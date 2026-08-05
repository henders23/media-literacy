/**
 * Resolve a card asset src. Hosted assets are stored as '/images/…' in card
 * data (the rights gate depends on that shape); at runtime they resolve
 * against Vite's base so the build works from any LMS subdirectory.
 */
export const resolveSrc = (src: string): string =>
  src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src;
