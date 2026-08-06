import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { visibleCards } from '../content/cards';
import { LENSES, lensLabel } from '../content/lenses';
import { useProgress } from '../store/progress';
import { resolveSrc } from '../lib/asset';
import { playTurn } from '../lib/audio';

const PER_PAGE = 6;
const WIDTHS = [280, 236, 310, 252, 268, 300, 226, 262];
const TILTS = [-2.2, 1.4, -1, 2.4, -1.8, 0.8, -2.6, 1.8];
const OFFSETS = [0, 46, 14, 62, 8, 38, 26, 54];

const CREDITS: { role: string; name: string; links?: { label: string; href: string }[] }[] = [
  { role: 'Project Lead', name: 'David Thornthwaite' },
  { role: 'Lead Designer', name: 'Paul Hendrie' },
  {
    role: 'Music',
    name: '"Healing" by Kevin MacLeod, licensed under a Creative Commons Attribution 4.0 license.',
    links: [
      { label: 'license', href: 'https://creativecommons.org/licenses/by/4.0/' },
      { label: 'source', href: 'http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1200048' },
      { label: 'artist', href: 'http://incompetech.com/' },
    ],
  },
];

/** The index — a contact sheet of plates laid out on a paper sheet. */
export function IndexScreen() {
  const navigate = useNavigate();
  const records = useProgress((s) => s.records);
  const settings = useProgress((s) => s.settings);
  const [page, setPage] = useState(0);
  const [turn, setTurn] = useState<'out' | 'in' | null>(null);

  const deck = visibleCards(settings);
  const cardPages = Math.max(1, Math.ceil(deck.length / PER_PAGE));
  const pages = cardPages + 1; // the last page of the book is the credits
  const creditsPage = page >= cardPages;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const flipTo = (next: number) => {
    if (turn || next === page) return;
    if (reduced) {
      setPage(next);
      window.scrollTo(0, 0);
      return;
    }
    playTurn();
    setTurn('out');
    setTimeout(() => {
      setPage(next);
      setTurn('in');
      window.scrollTo(0, 0);
      setTimeout(() => setTurn(null), 40);
    }, 420);
  };

  const visible = deck.map((c, i) => ({ card: c, i })).filter(({ i }) => Math.floor(i / PER_PAGE) === page);
  const collected = LENSES.filter((l) => deck.some((c) => c.lens === l.id && records[c.id]?.done));
  const nextUnopened = deck.find((c) => !records[c.id]?.done);

  return (
    <div className="relative z-[2] flex min-h-[calc(100vh-54px)] justify-center px-10 pb-20 pt-[46px] [perspective:2200px]">
      <div
        className="relative w-full max-w-[1180px] rounded border border-[#dcd7c9] bg-sheet px-10 pb-10 pt-[64px] [transform-origin:left_center] motion-reduce:!transition-none xl:px-14 xl:pt-[76px]"
        style={{
          backgroundImage: 'linear-gradient(105deg,rgba(255,255,255,.5),rgba(255,255,255,0) 38%)',
          transform: turn === 'out' ? 'rotateY(-88deg)' : turn === 'in' ? 'rotateY(74deg)' : 'rotateY(0deg)',
          opacity: turn ? 0.1 : 1,
          transition: `transform ${turn === 'in' ? '0s' : '0.42s'} cubic-bezier(.35,.02,.3,1), opacity ${turn === 'in' ? '0s' : '0.42s'} linear`,
          boxShadow:
            '0 1px 0 #e7e3d7, 7px 7px 0 -2px rgba(214,208,192,.5), 14px 14px 0 -4px rgba(214,208,192,.32), 0 26px 64px rgba(38,36,31,.14)',
        }}
      >
        {page === 0 && (
          <div>
            <h1 className="mb-6 mt-8 text-center text-[52px] uppercase leading-none tracking-[.26em] text-ink [text-indent:.26em] xl:text-[64px]">
              Loupe
            </h1>
            <p className="mx-auto mb-7 max-w-[34ch] text-center text-[22px] leading-[1.45] tracking-[-.01em] text-soft">
              Explore historical photos to identify principles of media literacy.
            </p>
            <div className="mb-8 text-center">
              <button
                type="button"
                onClick={() => navigate('/start')}
                className="inline-block cursor-pointer rounded border border-red px-[18px] py-[11px] font-mono text-[11px] uppercase tracking-[.16em] text-red transition-colors hover:bg-red hover:text-paper motion-reduce:transition-none"
              >
                start here
              </button>
            </div>
            <div className="mx-auto mb-14 flex max-w-[72ch] flex-wrap items-baseline justify-center gap-x-5 gap-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted">
                lenses collected · {collected.length} of {LENSES.length}
              </span>
              {LENSES.map((l) => {
                const got = collected.some((c) => c.id === l.id);
                return (
                  <span
                    key={l.id}
                    title={l.gloss}
                    className={`font-mono text-[10px] uppercase tracking-[.16em] ${got ? 'text-blue' : 'text-dim'}`}
                  >
                    {got ? '▣' : '▢'} {l.label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {creditsPage ? (
          <div className="flex min-h-[46vh] flex-col justify-center px-2 py-10">
            <div className="mb-10 text-center font-mono text-[11px] uppercase tracking-[.3em] text-muted">
              credits
            </div>
            <div className="mx-auto flex w-full max-w-[62ch] flex-col gap-9">
              {CREDITS.map((c) => (
                <div key={c.role} className="border-b border-hairline pb-8">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[.2em] text-muted">{c.role}</div>
                  <div className="text-[17px] leading-[1.6] [text-wrap:pretty]">{c.name}</div>
                  {c.links && (
                    <div className="mt-3 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[.14em]">
                      {c.links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-start justify-center gap-x-[52px] gap-y-14 pb-10 pt-3">
            {visible.map(({ card, i }) => {
              const r = records[card.id] ?? {};
              const done = !!r.done;
              const mark = done ? 'filed' : r.beat ? 'in hand' : 'unopened';
              const linked = !card.assets[0].src;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => navigate(`/card/${card.id}`)}
                  className="cursor-pointer text-left transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 motion-reduce:transition-none"
                  style={{
                    width: WIDTHS[i % 8],
                    marginTop: OFFSETS[i % 8],
                    transform: `rotate(${TILTS[i % 8]}deg)`,
                  }}
                >
                  <div
                    className="flex w-full items-center justify-center border-[6px] border-[#f2efe7] bg-[#d8d3c6] bg-cover bg-center shadow-[0_6px_22px_rgba(38,36,31,.16)]"
                    style={{
                      aspectRatio: String(Math.min(card.ratio, 1.6)),
                      backgroundImage: linked ? undefined : `url("${resolveSrc(card.assets[0].src)}")`,
                    }}
                  >
                    {linked && (
                      <span className="px-4 text-center font-mono text-[10px] uppercase leading-[1.9] tracking-[.18em] text-[#8a8578]">
                        held at the archive
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-2.5 font-mono text-[10px] uppercase tracking-[.16em]">
                    <span className="text-muted">{card.unitLabel}</span>
                    <span className={done ? 'text-blue' : r.beat ? 'text-red' : 'text-dim'}>{mark}</span>
                  </div>
                  <div className="mt-1.5 text-sm leading-[1.4]">
                    {card.title}
                    <span className="text-dim">
                      {card.mode === 'unseen' ? ' · no scaffolding' : done ? ` · ${lensLabel(card.lens)}` : ''}
                    </span>
                  </div>
                  <div className="mt-[5px] text-xs leading-relaxed text-muted">{card.look}</div>
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-10 flex items-baseline justify-between gap-6 border-t border-hairline pt-4">
          {page > 0 ? (
            <button
              type="button"
              onClick={() => flipTo(page - 1)}
              className="cursor-pointer border-b border-blue/35 font-mono text-[11px] uppercase tracking-[.16em] text-blue"
            >
              back a page
            </button>
          ) : nextUnopened ? (
            <button
              type="button"
              onClick={() => navigate(`/card/${nextUnopened.id}`)}
              className="cursor-pointer border-b border-blue/35 font-mono text-[11px] uppercase tracking-[.16em] text-blue"
            >
              {deck.some((c) => records[c.id]?.done || records[c.id]?.beat)
                ? 'continue where you left off'
                : 'begin with the first plate'}
            </button>
          ) : (
            <span />
          )}
          {!creditsPage && (
            <button
              type="button"
              onClick={() => flipTo(cardPages)}
              className="cursor-pointer border-b border-blue/35 font-mono text-[11px] uppercase tracking-[.16em] text-blue"
            >
              credits
            </button>
          )}
          <button
            type="button"
            onClick={() => flipTo((page + 1) % pages)}
            className="cursor-pointer border-b border-blue/35 font-mono text-[11px] uppercase tracking-[.16em] text-blue"
          >
            {page < pages - 1 ? 'turn the page' : 'back to the first page'}
          </button>
        </div>
        <button
          type="button"
          onClick={() => flipTo((page + 1) % pages)}
          title="turn the page"
          aria-label="turn the page"
          className="absolute bottom-0 right-0 h-[74px] w-[74px] cursor-pointer shadow-[inset_-2px_-2px_6px_rgba(38,36,31,.09)]"
          style={{
            background: 'linear-gradient(315deg,#e2ded1 0%,#e2ded1 48%,rgba(226,222,209,0) 50%)',
          }}
        />
      </div>
    </div>
  );
}
