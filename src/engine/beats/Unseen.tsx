import { useNavigate } from 'react-router-dom';
import type { Card } from '../../content/types';
import { useProgress, useRecord } from '../../store/progress';
import { Action } from '../../components/ui';

/** The unassessed capstone — no scaffolding, one question. */
export function Unseen({ card }: { card: Card }) {
  const rec = useRecord(card.id);
  const save = useProgress((s) => s.save);
  const navigate = useNavigate();
  const written = (rec.principle ?? '').trim().length > 0;

  return (
    <div>
      <div className="mb-4 max-w-[34ch] text-2xl leading-[1.45]">{card.unseen?.prompt}</div>
      <div className="mb-6 max-w-[46ch] text-[12.5px] leading-[1.75] text-muted">{card.unseen?.note}</div>
      <textarea
        rows={5}
        placeholder="What the frame cannot tell you."
        value={rec.principle ?? ''}
        onChange={(e) => save(card.id, { principle: e.target.value })}
        className="max-w-[48ch]"
      />
      <div className="mt-7">
        <Action
          disabled={!written}
          onClick={() => save(card.id, { principleShown: true, done: true })}
        >
          record it
        </Action>
      </div>
      {rec.principleShown && (
        <div className="mt-8 max-w-[50ch] border-t border-line pt-5">
          <div className="text-[14.5px] leading-[1.85] text-body [text-wrap:pretty]">{card.unseen?.after}</div>
          <div className="mt-7">
            <Action onClick={() => navigate('/review')}>show my confidence review</Action>
          </div>
        </div>
      )}
    </div>
  );
}
