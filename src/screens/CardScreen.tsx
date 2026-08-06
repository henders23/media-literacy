import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cardById, visibleCards } from '../content/cards';
import { useProgress } from '../store/progress';
import { BeatRunner } from '../engine/BeatRunner';
import { Plate } from '../components/Plate';
import { useUi } from '../store/ui';

export function CardScreen() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const card = cardById(id);
  const settings = useProgress((s) => s.settings);
  const setCurrentCard = useUi((s) => s.setCurrentCard);
  const resetPlate = useUi((s) => s.resetPlate);

  useEffect(() => {
    setCurrentCard(card?.id ?? null);
    resetPlate();
    window.scrollTo(0, 0);
    return () => setCurrentCard(null);
  }, [card?.id, setCurrentCard, resetPlate]);

  if (!card) {
    return (
      <div className="relative z-[2] p-14 font-mono text-sm text-muted">
        No plate with that reference. <a href="#/">Back to the index.</a>
      </div>
    );
  }

  // "Next plate" walks the teacher-gated deck, skipping hidden tiers.
  const deck = visibleCards(settings);
  const idx = deck.findIndex((c) => c.id === card.id);
  const next = idx >= 0 && idx < deck.length - 1 ? deck[idx + 1] : null;

  return (
    <div className="relative z-[2] grid min-h-[calc(100vh-54px)] grid-cols-1 lg:grid-cols-[1.08fr_1fr]">
      <div className="border-r border-line px-11 pb-14 pt-10">
        <div className="mb-5 flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
          <span>plate {card.ref}</span>
          <span>{card.unitLabel.toLowerCase()}</span>
        </div>
        <Plate card={card} />
      </div>
      <div className="flex min-h-0 flex-col px-12 pb-[72px] pt-10">
        <BeatRunner
          card={card}
          onFinish={() => (next ? navigate(`/card/${next.id}`) : navigate('/review'))}
        />
      </div>
    </div>
  );
}
