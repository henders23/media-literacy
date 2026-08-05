import type { Card } from '../../content/types';
import { useProgress, useRecord } from '../../store/progress';
import { lensLabel } from '../../content/lenses';
import { Action } from '../../components/ui';
import { GREEN, INK, RED } from '../../lib/colors';

/**
 * Beat 7 — the student writes the rule first, then compares to the canonical.
 * Generation effect; costs one text box.
 */
export function Principle({ card, onFinish }: { card: Card; onFinish: () => void }) {
  const rec = useRecord(card.id);
  const save = useProgress((s) => s.save);
  const written = (rec.principle ?? '').trim().length > 0;
  const verdict = card.principle?.verdict;
  const verdictColour = verdict === 'acceptable' ? GREEN : verdict === 'deceptive' ? RED : INK;

  return (
    <div>
      <div className="mb-3.5 max-w-[40ch] text-xl leading-normal">
        Write the rule this photograph teaches, in one line.
      </div>
      <div className="mb-6 max-w-[46ch] text-[12.5px] leading-[1.75] text-muted">
        It has to discriminate. What separates authorship from deception in this case, specifically.
      </div>
      <textarea
        rows={4}
        placeholder="Your principle."
        value={rec.principle ?? ''}
        onChange={(e) => save(card.id, { principle: e.target.value })}
        className="max-w-[48ch]"
      />
      {rec.principleShown && (
        <div className="mt-7 max-w-[50ch] border-t border-line pt-5">
          <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
            the canonical principle
          </div>
          <div className="text-[15px] leading-[1.8] text-ink [text-wrap:pretty]">
            {card.principle?.canonical}
          </div>
          <div
            className="mt-6 inline-block border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[.2em]"
            style={{ borderColor: verdictColour, color: verdictColour }}
          >
            verdict — {verdict}
          </div>
          <div className="mt-4 font-mono text-[12.5px] leading-[1.8] text-muted">
            lens filed: {card.lens === '—' ? '—' : lensLabel(card.lens)}
          </div>
        </div>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        <Action
          disabled={!written}
          onClick={() => save(card.id, { principleShown: true, done: true })}
        >
          {rec.principleShown ? 'yours is on the record' : written ? 'compare to the canonical' : 'write yours first'}
        </Action>
        {rec.principleShown && <Action onClick={onFinish}>next plate</Action>}
      </div>
    </div>
  );
}
