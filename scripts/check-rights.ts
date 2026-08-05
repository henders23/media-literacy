/**
 * Rights gate — runs in `prebuild` and FAILS THE BUILD on any violation
 * (BUILD.md §7). Do not weaken or bypass it. It makes the mistake
 * structurally impossible rather than remembered.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { CARDS } from '../src/content/cards';

const errors: string[] = [];
const warnings: string[] = [];

for (const c of CARDS) {
  const where = `card ${c.ref} (${c.id})`;
  const r = c.rights;

  if (!r || !r.status || !r.holder || !r.sourceUrl || !r.display) {
    errors.push(`${where}: incomplete rights metadata`);
    continue;
  }
  if (!r.credit || !r.credit.trim()) {
    errors.push(`${where}: missing credit string — credit lines stay visible on every plate`);
  }
  if (r.display === 'host' && r.status !== 'public-domain') {
    errors.push(`${where}: display 'host' but status '${r.status}' — host is ONLY valid for public domain`);
  }
  if (c.sensitivity === 'graphic' && r.display !== 'link') {
    errors.push(`${where}: sensitivity 'graphic' must display as link-out, never inline`);
  }
  for (const a of c.assets) {
    if (r.display === 'host') {
      if (/^https?:\/\//i.test(a.src)) {
        errors.push(`${where}: hosted asset '${a.label}' is an absolute URL (${a.src}) — never hotlink; put the file in /public/images`);
      } else if (!a.src.startsWith('/images/')) {
        errors.push(`${where}: hosted asset '${a.label}' must live under /images/… (got ${a.src})`);
      } else if (!existsSync(join(process.cwd(), 'public', a.src))) {
        warnings.push(`${where}: hosted asset ${a.src} is not in /public yet — run \`npm run fetch-images\``);
      }
    }
    if (!a.alt || !a.alt.trim()) {
      errors.push(`${where}: asset '${a.label}' has no alt text`);
    }
  }
}

for (const w of warnings) console.warn(`⚠ ${w}`);
if (errors.length) {
  console.error('\nRights gate failed:\n');
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`\n${errors.length} violation(s). The build stops here — fix the card data, not this script.`);
  process.exit(1);
}
console.log(`Rights gate: ${CARDS.length} cards pass.`);
