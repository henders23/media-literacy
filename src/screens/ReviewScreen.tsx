import { useNavigate } from 'react-router-dom';
import { CARDS } from '../content/cards';
import { useProgress } from '../store/progress';
import { confWord } from '../lib/confidence';
import { Action } from '../components/ui';
import { DIM, GREEN, MUTED, RED } from '../lib/colors';

/**
 * Confidence review — every card where the student was confident and wrong.
 * The most useful artefact the app produces.
 */
export function ReviewScreen() {
  const navigate = useNavigate();
  const records = useProgress((s) => s.records);

  const rows = CARDS.filter((c) => !c.mode).map((c) => {
    const r = records[c.id] ?? {};
    const conf = r.conf ?? null;
    let resultText = 'not reached';
    let colour = DIM;
    if (r.probeAnswered) {
      if (r.probeCorrect) {
        resultText = conf != null && conf < 40 ? 'right, unsure' : 'right';
        colour = conf != null && conf >= 60 ? GREEN : MUTED;
      } else {
        resultText = conf != null && conf >= 60 ? 'sure and wrong' : 'wrong';
        colour = conf != null && conf >= 60 ? RED : MUTED;
      }
    }
    return { card: c, conf, resultText, colour };
  });
  const sureWrong = rows.filter((x) => x.resultText === 'sure and wrong').length;

  return (
    <div className="relative z-[2] max-w-[1100px] px-14 pb-[90px] pt-16">
      <div className="mb-7 font-mono text-[10px] uppercase tracking-[.18em] text-muted">
        confidence review
      </div>
      <div className="mb-3.5 max-w-[32ch] text-[26px] leading-[1.4]">Where you were sure and wrong.</div>
      <div className="mb-12 max-w-[50ch] text-sm leading-[1.85] text-soft">
        {sureWrong
          ? `${sureWrong} of the plates you have worked went against you while you were sure. Those are the useful ones: reopen them and find the beat where the read went wrong.`
          : 'Confident and wrong is the pairing worth practising. Nothing here yet — work a few plates and come back.'}
      </div>
      <div className="flex flex-col">
        {rows.map(({ card, conf, resultText, colour }) => (
          <button
            key={card.id}
            type="button"
            onClick={() => navigate(`/card/${card.id}`)}
            className="grid cursor-pointer grid-cols-[48px_1fr_130px_150px] items-baseline gap-[18px] border-b border-hairline py-[15px] text-left hover:bg-white/40"
          >
            <span className="font-mono text-[11px] tracking-[.1em] text-dim">{card.ref}</span>
            <span className="text-[15px]">{card.title}</span>
            <span className="font-mono text-[11.5px] tracking-[.08em] text-muted">
              {conf == null ? '—' : `${conf}% · ${confWord(conf)}`}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[.16em]" style={{ color: colour }}>
              {resultText}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-11 flex gap-3">
        <Action onClick={() => navigate('/')}>back to the index</Action>
      </div>
    </div>
  );
}
