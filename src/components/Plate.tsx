import { useEffect, useRef, useState } from 'react';
import type { Card } from '../content/types';
import { resolveSrc } from '../lib/asset';
import { hintFor, LOUPE_SIZE, LOUPE_ZOOM } from '../interactions/registry';
import { useProgress, useRecord } from '../store/progress';
import { DEFAULT_CROP, useUi } from '../store/ui';

type LoupePos = { x: number; y: number; w: number; h: number };

/**
 * The photograph, with whichever interactions the card's probe declares:
 * A/B plate switching, loupe, crop handles, rotation, hotspot marking,
 * channel-assignment greyscale, and the teacher difference view.
 */
export function Plate({ card }: { card: Card }) {
  const rec = useRecord(card.id);
  const save = useProgress((s) => s.save);
  const aligns = useProgress((s) => s.aligns);
  const { ab, rotate, crop, diff, setAb, setRotate, setCrop } = useUi();
  const [loupe, setLoupe] = useState<LoupePos | null>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<string | null>(null);

  const unseen = card.mode === 'unseen';
  const tools = card.probe?.tools ?? [];
  const beat = rec.beat ?? 0;
  const live = !unseen && beat >= 3;
  const answered = !!rec.probeAnswered && beat >= 4;

  const assetIndex = Math.min(ab, card.assets.length - 1);
  const asset = card.assets[assetIndex];

  const align = (() => {
    const stored = aligns[card.id + ':' + assetIndex];
    const a = stored ?? asset.align ?? {};
    return { scale: a.scale ?? 1, dx: a.dx ?? 0, dy: a.dy ?? 0 };
  })();

  // Fit the scan into the plate frame, preserving its intrinsic ratio, then
  // apply the registration transform. Percentage rules scale with the frame,
  // so the loupe maths below stays correct.
  const ir = asset.ratio ?? card.ratio;
  const fr = card.ratio;
  const sx = (ir >= fr ? 100 : (100 * ir) / fr) * align.scale;
  const sy = (ir >= fr ? (100 * fr) / ir : 100) * align.scale;
  const px = 50 + align.dx;
  const py = 50 + align.dy;

  const pct = (e: { clientX: number; clientY: number }): LoupePos | null => {
    const el = plateRef.current;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      w: r.width,
      h: r.height,
    };
  };

  useEffect(() => {
    const up = () => {
      dragRef.current = null;
    };
    const move = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const p = pct(e);
      if (!p) return;
      const c = { ...useUi.getState().crop };
      const x = Math.max(0, Math.min(100, p.x));
      const y = Math.max(0, Math.min(100, p.y));
      if (d.includes('w')) {
        const r = c.x + c.w;
        c.x = Math.min(x, r - 8);
        c.w = r - c.x;
      }
      if (d.includes('e')) c.w = Math.max(8, x - c.x);
      if (d.includes('n')) {
        const b = c.y + c.h;
        c.y = Math.min(y, b - 8);
        c.h = b - c.y;
      }
      if (d.includes('s')) c.h = Math.max(8, y - c.y);
      setCrop(c);
    };
    window.addEventListener('pointerup', up);
    window.addEventListener('pointermove', move);
    return () => {
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointermove', move);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Link-out material: the app supplies context and questions; the photograph
  // itself opens at the rights holder's archive and is never copied here.
  if (card.rights.display !== 'host' && card.rights.display !== 'embed') {
    return (
      <div className="w-full" style={{ maxWidth: `calc(64vh * ${card.ratio.toFixed(3)})` }}>
        <div
          className="flex w-full flex-col items-start justify-between gap-6 border border-line bg-[#eeebe1] p-7"
          style={{ aspectRatio: String(Math.max(card.ratio, 0.9)) }}
        >
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[.2em] text-muted">
              held at the rights holder's archive
            </div>
            <p className="max-w-[46ch] text-[14px] leading-[1.8] text-body [text-wrap:pretty]">{asset.alt}</p>
            {card.sensitivity === 'graphic' && (
              <p className="mt-4 max-w-[44ch] font-mono text-[11px] uppercase leading-[1.8] tracking-[.12em] text-red">
                distressing photograph — open it deliberately
              </p>
            )}
          </div>
          <a
            href={card.rights.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border border-blue px-[18px] py-[11px] font-mono text-[11px] uppercase tracking-[.16em] text-blue no-underline hover:bg-blue hover:text-paper"
            style={{ borderBottomWidth: 1 }}
          >
            open the photograph at the archive
          </a>
        </div>
        <div className="mt-4 max-w-[62ch] text-base leading-normal text-ink">{card.title}</div>
        <div className="mt-2 max-w-[62ch] text-[13.5px] leading-[1.7] text-faint">{card.rights.credit}</div>
        <div className="mt-2 text-[13.5px]">
          <a href={card.rights.sourceUrl} target="_blank" rel="noopener noreferrer">
            source record
          </a>
          <span className="text-dim"> · {rightsLine(card)}</span>
        </div>
      </div>
    );
  }

  const bg = `url("${resolveSrc(asset.src)}")`;
  const greyscale = tools.includes('colour') && !answered;
  const loupeOn = tools.includes('loupe') && loupe && live;

  const loupeStyle = (() => {
    if (!loupeOn || !loupe) return undefined;
    const iw = (loupe.w * sx) / 100;
    const ih = (loupe.h * sy) / 100;
    const offX = (-(iw - loupe.w) * px) / 100;
    const offY = (-(ih - loupe.h) * py) / 100;
    const cx = (loupe.x / 100) * loupe.w;
    const cy = (loupe.y / 100) * loupe.h;
    const half = LOUPE_SIZE / 2;
    return {
      backgroundImage: bg,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${iw * LOUPE_ZOOM}px ${ih * LOUPE_ZOOM}px`,
      backgroundPosition: `${-((cx - offX) * LOUPE_ZOOM - half)}px ${-((cy - offY) * LOUPE_ZOOM - half)}px`,
      left: `calc(${loupe.x}% - ${half}px)`,
      top: `calc(${loupe.y}% - ${half}px)`,
    } as const;
  })();

  const cropHandles = [
    { key: 'nw', left: '0%', top: '0%', cursor: 'nwse-resize' },
    { key: 'ne', left: '100%', top: '0%', cursor: 'nesw-resize' },
    { key: 'sw', left: '0%', top: '100%', cursor: 'nesw-resize' },
    { key: 'se', left: '100%', top: '100%', cursor: 'nwse-resize' },
  ];

  const toolButtons: { label: string; active?: boolean; onPick?: () => void }[] = [];
  if (tools.includes('ab'))
    card.assets.forEach((a, i) =>
      toolButtons.push({ label: a.label, active: assetIndex === i, onPick: () => setAb(i) }),
    );
  if (tools.includes('rotate')) {
    toolButtons.push({ label: 'turn left', onPick: () => setRotate(rotate - 90) });
    toolButtons.push({ label: 'turn right', onPick: () => setRotate(rotate + 90) });
    toolButtons.push({ label: `${((rotate % 360) + 360) % 360}°`, active: true });
  }
  if (tools.includes('crop'))
    toolButtons.push({ label: 'reset crop', onPick: () => setCrop(DEFAULT_CROP) });

  return (
    <div className="w-full" style={{ maxWidth: `calc(64vh * ${card.ratio.toFixed(3)})` }}>
      <div
        ref={plateRef}
        role="img"
        aria-label={asset.alt}
        onPointerMove={(e) => {
          if (tools.includes('loupe') && live) setLoupe(pct(e));
        }}
        onPointerLeave={() => setLoupe(null)}
        onClick={(e) => {
          if (tools.includes('hotspot') && live && !answered) {
            const p = pct(e);
            if (p) save(card.id, { hotspot: { x: p.x, y: p.y } });
          }
        }}
        className="relative w-full overflow-hidden bg-[#d8d3c6] shadow-[0_1px_0_rgba(255,255,255,.6)]"
        style={{
          aspectRatio: String(card.ratio),
          cursor: tools.includes('hotspot') && live && !answered ? 'crosshair' : 'default',
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat transition-[transform,filter] duration-500 motion-reduce:transition-none"
          style={{
            backgroundImage: bg,
            backgroundSize: `${sx.toFixed(2)}% ${sy.toFixed(2)}%`,
            backgroundPosition: `${px.toFixed(2)}% ${py.toFixed(2)}%`,
            filter: greyscale ? 'grayscale(1) contrast(1.05)' : 'none',
            transform: `rotate(${rotate}deg)`,
          }}
        />
        {diff && card.assets.length > 1 && (
          <div
            className="pointer-events-none absolute inset-0 z-[3] bg-no-repeat mix-blend-difference"
            style={{
              backgroundImage: `url("${resolveSrc(card.assets[assetIndex === 0 ? 1 : 0].src)}")`,
              backgroundSize: `${sx.toFixed(2)}% ${sy.toFixed(2)}%`,
              backgroundPosition: `${px.toFixed(2)}% ${py.toFixed(2)}%`,
            }}
          />
        )}
        {answered && card.probe?.hotspot && (
          <div
            className="pointer-events-none absolute z-[4] border border-dashed border-red"
            style={{
              left: `${card.probe.hotspot.x}%`,
              top: `${card.probe.hotspot.y}%`,
              width: `${card.probe.hotspot.w}%`,
              height: `${card.probe.hotspot.h}%`,
            }}
          />
        )}
        {rec.hotspot && live && tools.includes('hotspot') && (
          <div
            className="pointer-events-none absolute z-[5] h-[14px] w-[14px] rounded-full border border-blue"
            style={{
              left: `${rec.hotspot.x}%`,
              top: `${rec.hotspot.y}%`,
              margin: '-7px 0 0 -7px',
            }}
          />
        )}
        {tools.includes('crop') && beat >= 3 && (
          <div
            className="absolute z-[6] border border-blue"
            style={{
              left: `${crop.x}%`,
              top: `${crop.y}%`,
              width: `${crop.w}%`,
              height: `${crop.h}%`,
              boxShadow: '0 0 0 9999px rgba(233,230,222,.74)',
            }}
          >
            {cropHandles.map((h) => (
              <div
                key={h.key}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  dragRef.current = h.key;
                }}
                className="absolute h-[15px] w-[15px] bg-blue"
                style={{ left: h.left, top: h.top, margin: '-8px 0 0 -8px', cursor: h.cursor }}
              />
            ))}
          </div>
        )}
        {loupeOn && loupeStyle && (
          <div
            className="pointer-events-none absolute z-[7] rounded-full border border-[rgba(38,36,31,.5)] shadow-[0_12px_34px_rgba(38,36,31,.3)]"
            style={{ width: LOUPE_SIZE, height: LOUPE_SIZE, ...loupeStyle }}
          />
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-5 border-t border-line pt-2.5">
        <div className="flex gap-4 font-mono text-[10px] uppercase tracking-[.14em]">
          {toolButtons.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={t.onPick}
              className={`${t.active ? 'border-b border-blue text-blue' : 'border-b border-transparent text-muted hover:text-blue'} pb-0.5 ${t.onPick ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[.14em] text-dim">
          {live ? hint(tools) : ''}
        </span>
      </div>

      <div className="mt-4 max-w-[62ch] text-base leading-normal text-ink">{card.title}</div>
      <div className="mt-2 max-w-[62ch] text-[13.5px] leading-[1.7] text-faint">{card.rights.credit}</div>
      <div className="mt-2 text-[13.5px]">
        <a href={card.rights.sourceUrl} target="_blank" rel="noopener noreferrer">
          source record
        </a>
        <span className="text-dim"> · {rightsLine(card)}</span>
      </div>
    </div>
  );
}

const hint = hintFor;

const rightsLine = (card: Card): string => {
  if (card.rights.display === 'link')
    return card.rights.status === 'public-domain'
      ? "public domain, linked to the holder's archive"
      : 'under copyright, linked — never copied';
  return card.rights.status === 'public-domain'
    ? 'public domain, hosted with this app'
    : card.rights.status === 'embed'
      ? "served from the rights holder's archive"
      : card.rights.status;
};
