/**
 * Wikimedia Commons file-path URL, used ONLY for status: 'embed' material —
 * served from the rights holder, never copied into /public/images.
 * Public-domain plates are hosted locally instead (see scripts/fetch-images.mjs).
 *
 * Pass width: 0 to serve the original file — MediaWiki refuses to upscale,
 * so requesting a width larger than the source 404s.
 */
export const wm = (name: string, width = 1600): string =>
  'https://commons.wikimedia.org/wiki/Special:FilePath/' +
  encodeURIComponent(name) +
  (width ? `?width=${width}` : '');
