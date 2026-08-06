let turnAudio: HTMLAudioElement | null = null;

/** Paper rustle for the index page turn. Silent under reduced motion. */
export function playTurn(): void {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!turnAudio) {
      turnAudio = new Audio(`${import.meta.env.BASE_URL}audio/page-turn.mp3`);
      turnAudio.preload = 'auto';
      turnAudio.volume = 0.5;
    }
    turnAudio.currentTime = 0;
    void turnAudio.play().catch(() => undefined);
  } catch {
    /* no audio available */
  }
}
