import type { Card } from '../../content/types';
import { Action } from '../../components/ui';

/** Beat 1 — image, when and where only. No framing, no hints. */
export function Look({ card, onAdvance }: { card: Card; onAdvance: () => void }) {
  return (
    <div>
      <div className="mb-4 max-w-[34ch] text-2xl leading-[1.45]">{card.look}</div>
      {card.lookIntro && (
        <div className="mb-9 max-w-[52ch] text-[14px] leading-[1.85] text-body [text-wrap:pretty]">
          {card.lookIntro}
        </div>
      )}
      <Action onClick={onAdvance}>start questions</Action>
    </div>
  );
}
