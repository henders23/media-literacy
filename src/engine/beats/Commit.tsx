import type { Card } from '../../content/types';
import { LENS_OPTIONS, LENS_RETRIEVAL_FROM } from '../../content/lenses';
import { useProgress, useRecord } from '../../store/progress';
import { confWord } from '../../lib/confidence';
import { Action, OptionList } from '../../components/ui';
import { BLUE, INK } from '../../lib/colors';

export const usesLensRetrieval = (card: Card): boolean =>
  card.mode !== 'unseen' && (Number(card.ref) >= LENS_RETRIEVAL_FROM || !!card.lensRetrieval);

export const commitOptions = (card: Card) =>
  usesLensRetrieval(card) ? LENS_OPTIONS : (card.commit?.options ?? []);

/**
 * Beat 2 — interpretive question plus confidence slider. Ungraded, by design:
 * it records a hypothesis, and gets quoted back verbatim at Reveal.
 */
export function Commit({ card, onAdvance }: { card: Card; onAdvance: () => void }) {
  const rec = useRecord(card.id);
  const save = useProgress((s) => s.save);
  const conf = rec.conf ?? 50;
  const options = commitOptions(card);
  const prompt = usesLensRetrieval(card) ? 'Which lens applies to this photograph?' : card.commit?.prompt;

  return (
    <div>
      <div className="mb-6 max-w-[36ch] text-[23px] leading-[1.45]">{prompt}</div>
      <div className="mb-8">
        <OptionList
          options={options.map((o) => ({
            key: o.key,
            text: o.text,
            mark: rec.commit === o.key ? '▣' : '▢',
            colour: rec.commit === o.key ? BLUE : INK,
            picked: rec.commit === o.key,
          }))}
          onPick={(key) => save(card.id, { commit: key, conf })}
        />
      </div>
      <div className="mb-9 max-w-[46ch]">
        <div className="mb-4 flex items-baseline justify-between gap-4 font-mono text-sm uppercase tracking-[.1em] text-faint">
          <span>how sure are you</span>
          <span className="text-[15px] text-blue">
            {conf}% · {confWord(conf)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={conf}
          aria-label="confidence"
          onChange={(e) => save(card.id, { conf: Number(e.target.value) })}
        />
        <div className="mt-3 flex justify-between font-mono text-[12.5px] uppercase tracking-[.08em] text-dim">
          <span>a guess</span>
          <span>certain</span>
        </div>
      </div>
      <Action disabled={!rec.commit} onClick={onAdvance}>
        {rec.commit ? 'lock it in' : 'choose one first'}
      </Action>
    </div>
  );
}
