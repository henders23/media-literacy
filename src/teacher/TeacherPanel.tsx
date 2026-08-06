import { CARDS, cardById } from '../content/cards';
import { useProgress } from '../store/progress';
import { useUi } from '../store/ui';
import { exportCsv } from '../lib/csv';
import { Action } from '../components/ui';
import { GREEN, RED } from '../lib/colors';

/** Rights audit mirroring scripts/check-rights.ts, visible to the teacher. */
function audit() {
  return CARDS.map((c) => {
    const fails: string[] = [];
    if (!c.rights || !c.rights.credit || !c.rights.holder || !c.rights.sourceUrl)
      fails.push('incomplete rights');
    if (c.rights.display === 'host' && c.rights.status !== 'public-domain') fails.push('host on non-PD');
    if (c.sensitivity === 'graphic' && c.rights.display !== 'link') fails.push('graphic must link out');
    return {
      ref: c.ref,
      status: `${c.rights.status} · ${c.rights.display}`,
      verdict: fails.length ? fails.join(' / ') : 'pass',
      colour: fails.length ? RED : GREEN,
    };
  });
}

export function TeacherPanel() {
  const { teacherOpen, toggleTeacher, currentCardId, ab, diff, toggleDiff } = useUi();
  const { records, aligns, setAlign, resetAlign, clearResponses, settings, setSettings } = useProgress();
  if (!teacherOpen) return null;

  const card = currentCardId ? cardById(currentCardId) : undefined;
  const assetIndex = card ? Math.min(ab, card.assets.length - 1) : 0;
  const alignKey = card ? `${card.id}:${assetIndex}` : '';
  const current = card
    ? (aligns[alignKey] ?? card.assets[assetIndex].align ?? { scale: 1, dx: 0, dy: 0 })
    : { scale: 1, dx: 0, dy: 0 };

  const sliders = [
    { key: 'scale' as const, label: 'scale', min: 0.6, max: 1.6, step: 0.005 },
    { key: 'dx' as const, label: 'shift x', min: -50, max: 50, step: 0.5 },
    { key: 'dy' as const, label: 'shift y', min: -50, max: 50, step: 0.5 },
  ];

  return (
    <div className="fixed bottom-0 right-0 top-0 z-[70] w-[min(460px,92vw)] overflow-auto border-l border-edge bg-[#e4e0d6] px-8 pb-[60px] pt-[30px] shadow-[-24px_0_60px_rgba(38,36,31,.14)]">
      <div className="mb-7 flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[.2em] text-ink">teacher mode</span>
        <button
          type="button"
          onClick={toggleTeacher}
          className="cursor-pointer font-mono text-[10px] uppercase tracking-[.16em] text-muted hover:text-blue"
        >
          close
        </button>
      </div>

      {card && (
        <>
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
            notes — plate {card.ref}
          </div>
          <div className="mb-9 text-[13.5px] leading-[1.8] text-body">{card.teacherNotes}</div>
        </>
      )}

      {card && card.assets.length > 1 && (
        <div className="mb-9">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
            registration — {card.assets[assetIndex].label}
          </div>
          <div className="mb-4 text-[11.5px] leading-[1.7] text-muted">
            Scans from different institutions are not aligned. Nudge this plate until the two sit on top
            of each other, then read the values into the card data.
          </div>
          {sliders.map((k) => (
            <div key={k.key} className="mb-3.5">
              <div className="mb-1.5 flex justify-between font-mono text-[11px] uppercase tracking-[.1em] text-faint">
                <span>{k.label}</span>
                <span className="text-blue">{current[k.key]}</span>
              </div>
              <input
                type="range"
                min={k.min}
                max={k.max}
                step={k.step}
                value={current[k.key]}
                aria-label={k.label}
                onChange={(e) => setAlign(alignKey, { ...current, [k.key]: Number(e.target.value) })}
              />
            </div>
          ))}
          <div className="mt-3.5 flex gap-3">
            <button
              type="button"
              onClick={toggleDiff}
              className={`cursor-pointer border-b border-[#d8d3c6] font-mono text-[10px] uppercase tracking-[.14em] ${diff ? 'text-blue' : 'text-muted'}`}
            >
              difference view
            </button>
            <button
              type="button"
              onClick={() => resetAlign(alignKey)}
              className="cursor-pointer border-b border-[#d8d3c6] font-mono text-[10px] uppercase tracking-[.14em] text-muted"
            >
              reset
            </button>
          </div>
        </div>
      )}

      <div className="mb-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted">deck gating</div>
      <div className="mb-9 flex flex-col gap-3">
        <label className="flex cursor-pointer items-baseline gap-3 text-[12.5px] text-body">
          <input
            type="checkbox"
            checked={settings.showExtended}
            onChange={(e) => setSettings({ showExtended: e.target.checked })}
          />
          <span>
            extended plates
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[.14em] text-muted">
              optional depth within units
            </span>
          </span>
        </label>
        <label className="flex cursor-pointer items-baseline gap-3 text-[12.5px] text-body">
          <input
            type="checkbox"
            checked={settings.showGated}
            onChange={(e) => setSettings({ showGated: e.target.checked })}
          />
          <span>
            unit 7 — what photographs cost
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[.14em] text-red">
              graphic material · off by default · run after the capstone
            </span>
          </span>
        </label>
      </div>

      <div className="mb-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
        rights audit — all plates
      </div>
      <div className="mb-4 flex flex-col">
        {audit().map((a) => (
          <div
            key={a.ref}
            className="grid grid-cols-[44px_1fr_auto] gap-3 border-b border-[#d8d3c6] py-[9px] text-[11.5px]"
          >
            <span className="text-dim">{a.ref}</span>
            <span className="text-body">{a.status}</span>
            <span className="font-mono text-[10px] uppercase tracking-[.14em]" style={{ color: a.colour }}>
              {a.verdict}
            </span>
          </div>
        ))}
      </div>
      <div className="mb-9 text-[11.5px] leading-[1.75] text-muted">
        The same checks run at prebuild (scripts/check-rights.ts) and fail the build on any violation:
        complete rights metadata, hosting only where public domain, local files only under /images, graphic
        material behind a link.
      </div>

      <div className="flex flex-col items-start gap-3">
        <Action onClick={() => exportCsv(records)}>download responses as csv</Action>
        <Action
          tone="red"
          onClick={() => {
            if (window.confirm("Clear this device's responses? This cannot be undone.")) clearResponses();
          }}
        >
          clear this device's responses
        </Action>
      </div>
    </div>
  );
}
