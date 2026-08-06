import { useNavigate } from 'react-router-dom';
import { visibleCards } from '../content/cards';
import { LENSES } from '../content/lenses';
import { useProgress } from '../store/progress';
import { Action } from '../components/ui';

/**
 * The framing lesson. Read before the first plate: how the seven beats work,
 * and the app's position on photographs as property — which is itself the
 * first lesson of the deck.
 */
export function StartScreen() {
  const navigate = useNavigate();
  const settings = useProgress((s) => s.settings);
  const first = visibleCards(settings)[0];

  return (
    <div className="relative z-[2] flex min-h-[calc(100vh-54px)] justify-center px-10 pb-20 pt-[46px]">
      <div
        className="relative w-full max-w-[820px] rounded border border-[#dcd7c9] bg-sheet px-10 pb-14 pt-14 xl:px-16"
        style={{
          backgroundImage: 'linear-gradient(105deg,rgba(255,255,255,.5),rgba(255,255,255,0) 38%)',
          boxShadow:
            '0 1px 0 #e7e3d7, 7px 7px 0 -2px rgba(214,208,192,.5), 14px 14px 0 -4px rgba(214,208,192,.32), 0 26px 64px rgba(38,36,31,.14)',
        }}
      >
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[.3em] text-red">start here</div>

        <h1 className="mb-8 max-w-[28ch] text-[28px] leading-[1.35]">
          Read this before the first plate.
        </h1>

        <div className="flex max-w-[58ch] flex-col gap-5 text-[14.5px] leading-[1.85] text-body [text-wrap:pretty]">
          <p>
            Loupe is a collection of photographs that changed what people believed. You will work
            every one the same way: look, commit to a reading and say how sure you are, get the
            context, prove what you can from the frame, see the answer, make the case for the
            photographer, and write the rule in one line. Along the way you collect seven lenses —{' '}
            {LENSES.map((l) => l.label).join(', ')} — to use on pictures nobody has taught you.
            Your answers stay on this device.
          </p>
        </div>

        <div className="mb-4 mt-10 font-mono text-[10px] uppercase tracking-[.2em] text-muted">
          photographs are property
        </div>
        <div className="flex max-w-[58ch] flex-col gap-5 text-[14.5px] leading-[1.85] text-body [text-wrap:pretty]">
          <p>
            Some plates are public domain and are shown inside the app. The rest are still
            someone's intellectual property, so the app does not copy them: it names who made and
            who holds each one, and opens the photograph at the rights holder's own archive. Treat
            that as the first lesson — who made a picture, who owns it, and how it reached you is
            part of what it means.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-hairline pt-8">
          {first && <Action onClick={() => navigate(`/card/${first.id}`)}>begin with the first plate</Action>}
          <Action onClick={() => navigate('/')}>back to the index</Action>
        </div>
      </div>
    </div>
  );
}
