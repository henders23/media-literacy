import { useEffect, useRef, useState } from 'react';

const MUSIC_KEY = 'loupe.music.v1';

/**
 * "Healing" by Kevin MacLeod (CC BY 4.0 — see the credits page). Plays on
 * start, looped; the header button turns it off, and the choice persists.
 * Browsers may block audio until the first interaction, so a blocked
 * autoplay retries on the first pointer or key press.
 */
export function MusicToggle() {
  const [on, setOn] = useState(() => {
    try {
      return localStorage.getItem(MUSIC_KEY) !== 'off';
    } catch {
      return true;
    }
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!on) {
      audio.pause();
      return;
    }
    audio.volume = 0.55;
    const tryPlay = () => audio.play().catch(() => undefined);
    void audio.play().catch(() => {
      // Autoplay blocked — start on the first gesture instead.
      const once = () => {
        void tryPlay();
        window.removeEventListener('pointerdown', once);
        window.removeEventListener('keydown', once);
      };
      window.addEventListener('pointerdown', once);
      window.addEventListener('keydown', once);
      return undefined;
    });
    return () => audio.pause();
  }, [on]);

  const toggle = () => {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem(MUSIC_KEY, next ? 'on' : 'off');
    } catch {
      /* private mode */
    }
  };

  return (
    <>
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}audio/healing-kevin-macleod.mp3`} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={on}
        title={on ? 'Turn the music off' : 'Turn the music on'}
        className={`cursor-pointer rounded border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[.16em] transition-colors motion-reduce:transition-none ${
          on
            ? 'border-blue bg-blue text-paper hover:bg-transparent hover:text-blue'
            : 'border-muted text-muted hover:border-blue hover:text-blue'
        }`}
      >
        music {on ? 'on' : 'off'}
      </button>
    </>
  );
}
