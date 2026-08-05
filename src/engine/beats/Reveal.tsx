import type { Card } from '../../content/types';
import { useRecord } from '../../store/progress';
import { confWord } from '../../lib/confidence';
import { Action } from '../../components/ui';
import { commitOptions } from './Commit';

/** Beat 5 — the answer, with the student's beat-2 words quoted back verbatim. */
export function Reveal({ card, onAdvance }: { card: Card; onAdvance: () => void }) {
  const rec = useRecord(card.id);
  const conf = rec.conf ?? 50;
  const quoted = commitOptions(card).find((o) => o.key === rec.commit)?.text ?? 'nothing recorded';
  const correct = !!rec.probeCorrect;

  return (
    <div>
      <div className="mb-7 max-w-[46ch] border-l-2 border-blue py-1 pl-4">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
          at beat two, {conf}% sure ({confWord(conf)}), you said
        </div>
        <div className="text-[15px] leading-[1.65] text-blue">{quoted}</div>
      </div>
      <div className="mb-5 max-w-[46ch] text-base leading-[1.75] [text-wrap:pretty]">
        {correct ? card.reveal?.correct : card.reveal?.incorrect}
      </div>
      {card.reveal?.extra && (
        <div className="mb-9 max-w-[50ch] text-[14.5px] leading-[1.85] text-body [text-wrap:pretty]">
          {card.reveal.extra}
        </div>
      )}
      <Action onClick={onAdvance}>and yet — the other side of it</Action>
    </div>
  );
}
