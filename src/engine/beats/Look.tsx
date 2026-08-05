import type { Card } from '../../content/types';
import { Action } from '../../components/ui';

/** Beat 1 — image, when and where only. No framing, no hints. */
export function Look({ card, onAdvance }: { card: Card; onAdvance: () => void }) {
  return (
    <div>
      <div className="mb-4 max-w-[34ch] text-2xl leading-[1.45]">{card.look}</div>
      <div className="mb-9 max-w-[46ch] text-[12.5px] leading-[1.75] text-muted">
        When and where. Nothing else yet — no title, no framing, no hint of what is wrong with it.
      </div>
      <Action onClick={onAdvance}>start questions</Action>
    </div>
  );
}
