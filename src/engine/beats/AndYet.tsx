import type { Card } from '../../content/types';
import { useProgress, useRecord } from '../../store/progress';
import { Action } from '../../components/ui';

/**
 * Beat 6 — the student defends the photographer before seeing the canonical
 * defence. Not optional: without it the deck trains cynicism.
 */
export function AndYet({ card, onAdvance }: { card: Card; onAdvance: () => void }) {
  const rec = useRecord(card.id);
  const save = useProgress((s) => s.save);
  const written = (rec.andYet ?? '').trim().length > 0;

  return (
    <div>
      <div className="mb-5 font-mono text-sm uppercase tracking-[.22em] text-muted">and yet</div>
      <div className="mb-6 max-w-[38ch] text-xl leading-normal">{card.andYet?.prompt}</div>
      <textarea
        rows={4}
        placeholder="One line is enough."
        value={rec.andYet ?? ''}
        onChange={(e) => save(card.id, { andYet: e.target.value })}
        className="max-w-[48ch]"
      />
      {rec.andYetShown && (
        <div className="mt-7 max-w-[50ch] border-t border-line pt-5">
          <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
            the canonical defence
          </div>
          <div className="text-[14.5px] leading-[1.85] text-body [text-wrap:pretty]">
            {card.andYet?.canonical}
          </div>
        </div>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        <Action
          disabled={!written}
          onClick={() => save(card.id, { andYetShown: true })}
        >
          {rec.andYetShown
            ? 'defence on the record'
            : written
              ? 'show me the canonical defence'
              : 'write one line first'}
        </Action>
        {rec.andYetShown && <Action onClick={onAdvance}>write the principle</Action>}
      </div>
    </div>
  );
}
