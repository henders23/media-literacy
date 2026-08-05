let ctx: AudioContext | null = null;

/** Short paper-rustle for the index page turn. Silent under reduced motion. */
export function playTurn(): void {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    ctx = ctx ?? new Ctx();
    if (ctx.state === 'suspended') void ctx.resume();
    const dur = 0.55;
    const sr = ctx.sampleRate;
    const len = Math.floor(sr * dur);
    const buf = ctx.createBuffer(1, len, sr);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const t = i / sr;
      const env = Math.pow(Math.max(0, 1 - t / dur), 2.4) * Math.min(1, t * 30);
      const rustle = 0.6 + 0.4 * Math.sin(t * 61);
      d[i] = (Math.random() * 2 - 1) * env * rustle * 0.55;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 0.7;
    const t0 = ctx.currentTime;
    bp.frequency.setValueAtTime(700, t0);
    bp.frequency.exponentialRampToValueAtTime(2800, t0 + 0.2);
    bp.frequency.exponentialRampToValueAtTime(600, t0 + 0.55);
    const g = ctx.createGain();
    g.gain.value = 0.3;
    src.connect(bp);
    bp.connect(g);
    g.connect(ctx.destination);
    src.start();
  } catch {
    /* no audio available */
  }
}
