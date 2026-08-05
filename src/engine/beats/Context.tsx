import type { Card } from '../../content/types';
import { Action } from '../../components/ui';

/** Beat 3 — the background, only now that the commit is on the record. */
export function Context({ card, onAdvance }: { card: Card; onAdvance: () => void }) {
  return (
    <div>
      <div className="mb-9 flex max-w-[52ch] flex-col gap-5">
        {(card.context ?? []).map((p, i) => (
          <p key={i} className="text-[14.5px] leading-[1.85] text-body [text-wrap:pretty]">
            {p}
          </p>
        ))}
      </div>
      <Action onClick={onAdvance}>next question</Action>
    </div>
  );
}
