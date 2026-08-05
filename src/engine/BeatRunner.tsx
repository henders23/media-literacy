import type { Card } from '../content/types';
import { useProgress, useRecord } from '../store/progress';
import { BEATS } from './beats/order';
import { Look } from './beats/Look';
import { Commit } from './beats/Commit';
import { Context } from './beats/Context';
import { Probe } from './beats/Probe';
import { Reveal } from './beats/Reveal';
import { AndYet } from './beats/AndYet';
import { Principle } from './beats/Principle';
import { Unseen } from './beats/Unseen';

/**
 * Drives the seven-beat sequence. Fixed order — never reordered, never
 * skipped except via a card's declared variant. The runner knows the beats
 * and nothing about any particular photograph.
 */
export function BeatRunner({ card, onFinish }: { card: Card; onFinish: () => void }) {
  const rec = useRecord(card.id);
  const save = useProgress((s) => s.save);
  const unseen = card.mode === 'unseen';
  const beat = unseen ? 0 : Math.min(rec.beat ?? 0, BEATS.length - 1);

  const advance = () => save(card.id, { beat: Math.min(6, beat + 1) });
  const back = () => save(card.id, { beat: Math.max(0, beat - 1) });

  return (
    <div className="flex min-h-0 flex-col">
      <div className="mb-8 flex flex-wrap gap-3.5">
        {BEATS.map((b, i) => (
          <div
            key={b.num}
            className="flex items-baseline gap-[5px] font-mono text-[9.5px] uppercase tracking-[.14em]"
            style={{ color: unseen ? '#a9a396' : i === beat ? '#c0392b' : i < beat ? '#8a8578' : '#a9a396' }}
          >
            <span>{b.num}</span>
            <span>{b.label}</span>
          </div>
        ))}
      </div>

      <div className="mb-5 flex items-baseline justify-between gap-5">
        <span className="font-mono text-[10px] uppercase tracking-[.2em] text-red">
          {unseen ? 'on your own' : `beat ${BEATS[beat].num} — ${BEATS[beat].label}`}
        </span>
        {!unseen && beat > 0 && (
          <button
            type="button"
            onClick={back}
            className="cursor-pointer border-b border-line font-mono text-[10px] uppercase tracking-[.16em] text-muted hover:text-blue"
          >
            back one question
          </button>
        )}
      </div>

      {unseen ? (
        <Unseen card={card} />
      ) : beat === 0 ? (
        <Look card={card} onAdvance={advance} />
      ) : beat === 1 ? (
        <Commit card={card} onAdvance={advance} />
      ) : beat === 2 ? (
        <Context card={card} onAdvance={advance} />
      ) : beat === 3 ? (
        <Probe card={card} />
      ) : beat === 4 ? (
        <Reveal card={card} onAdvance={advance} />
      ) : beat === 5 ? (
        <AndYet card={card} onAdvance={advance} />
      ) : (
        <Principle card={card} onFinish={onFinish} />
      )}
    </div>
  );
}
