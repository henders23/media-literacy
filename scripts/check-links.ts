/**
 * Checks every card's sourceUrl resolves (follows redirects). Run it from a
 * machine with open internet: `npm run check-links`. A 200 means the page
 * loads — whether the photograph is visible on it still needs one human look.
 */
import { CARDS } from '../src/content/cards';

const byUrl = new Map<string, string[]>();
for (const c of CARDS) {
  const u = c.rights.sourceUrl;
  byUrl.set(u, [...(byUrl.get(u) ?? []), c.ref]);
}

let bad = 0;
for (const [url, refs] of byUrl) {
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; loupe-link-check/1.0)' },
      signal: AbortSignal.timeout(20000),
    });
    const ok = res.ok;
    if (!ok) bad++;
    console.log(`${ok ? '✓' : '✗'} ${res.status}  ${url}  (plate ${refs.join(', ')})`);
  } catch (e) {
    bad++;
    console.log(`✗ ERR  ${url}  (plate ${refs.join(', ')}): ${(e as Error).message}`);
  }
}

if (bad) {
  console.error(`\n${bad} link(s) failed — fix the card's rights.sourceUrl.`);
  process.exit(1);
}
console.log(`\nAll ${byUrl.size} source links resolve.`);
