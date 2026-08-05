/**
 * Wikimedia Commons file-path URL, used ONLY for status: 'embed' material —
 * served from the rights holder, never copied into /public/images.
 * Public-domain plates are hosted locally instead (see scripts/fetch-images.mjs).
 */
export const wm = (name: string): string =>
  'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(name) + '?width=1600';
