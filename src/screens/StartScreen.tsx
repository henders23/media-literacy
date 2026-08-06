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
            every one the same way: look at it cold, commit to a reading and say how sure you are,
            get the background, prove what you can from the frame itself, see the answer with your
            own words quoted back, make the case for the photographer, and write the rule in one
            line. The order never changes. Your answers stay on this device and go nowhere else.
          </p>
          <p>
            As you work you will collect seven lenses —{' '}
            {LENSES.map((l) => l.label).join(', ')} — and by the end of the deck you will be
            expected to reach for them unprompted. Nothing here is a trick question, and not every
            plate resolves against the photographer. If you can predict the verdict before you have
            done the work, slow down.
          </p>
        </div>

        <div className="mb-4 mt-10 font-mono text-[10px] uppercase tracking-[.2em] text-muted">
          photographs are property
        </div>
        <div className="flex max-w-[58ch] flex-col gap-5 text-[14.5px] leading-[1.85] text-body [text-wrap:pretty]">
          <p>
            Some plates in this deck are public domain — old enough, or made by government agencies
            — so they belong to everyone, and the app shows them directly. Most of the rest are
            still someone's intellectual property. This app does not copy those. It describes each
            one, names who made it and who holds it in the credit line under every plate, and opens
            the photograph at the rights holder's own archive.
          </p>
          <p>
            Treat that as the first lesson rather than the small print. Every photograph you are
            about to examine was made by someone, is owned by someone, and reached you down a
            particular road. Who made a picture, who controls it, and how it got in front of you is
            part of what the picture means — which is the question this whole deck teaches.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-hairline pt-8">
          {first && <Action onClick={() => navigate(`/card/${first.id}`)}>begin at plate {first.ref}</Action>}
          <Action onClick={() => navigate('/')}>back to the index</Action>
        </div>
      </div>
    </div>
  );
}
