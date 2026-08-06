/**
 * One-time fetch of the public-domain plates into /public/images, so the
 * built folder hosts them locally (never hotlinked, works offline in an LMS).
 * Files are pulled at 1600px from Wikimedia Commons, which serves these
 * public-domain scans. Existing files are left alone.
 */
import { createWriteStream, existsSync, mkdirSync, unlinkSync } from 'node:fs';
import { get } from 'node:https';
import { join } from 'node:path';

const wm = (name) =>
  'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(name) + '?width=1600';

const MANIFEST = [
  ['fenton-cannonballs-road.jpg', wm('Roger Fenton - Shadow of the Valley of Death.jpg')],
  ['iwo-jima.jpg', wm('Raising the Flag on Iwo Jima, larger - edit1.jpg')],
  ['situation-room.jpg', wm('Obama and Biden await updates on bin Laden.jpg')],
  ['earthrise.jpg', wm('NASA-Apollo8-Dec24-Earthrise.jpg')],
  ['aldrin.jpg', wm('Aldrin Apollo 11 original.jpg')],
  ['vj-day.jpg', wm('Kissing the War Goodbye.jpg')],
  ['pillars-of-creation.jpg', wm('Pillars of Creation.jpg')],
  ['migrant-mother.jpg', wm('Lange-MigrantMother02.jpg')],
  ['bootprint.jpg', wm('Apollo 11 bootprint.jpg')],
  ['rothstein-steer-skull.jpg', wm('Arthur Rothstein - The bleached skull of a steer, South Dakota Badlands, 1936.jpg')],
];

const dir = join(process.cwd(), 'public', 'images');
mkdirSync(dir, { recursive: true });

function fetchTo(url, path, redirects = 0) {
  return new Promise((resolve, reject) => {
    get(url, { headers: { 'user-agent': 'loupe-media-literacy/0.1 (classroom app; one-time asset fetch)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
        res.resume();
        resolve(fetchTo(new URL(res.headers.location, url).href, path, redirects + 1));
        return;
      }
      if (res.statusCode !== 200) {
        res.resume();
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const out = createWriteStream(path);
      res.pipe(out);
      out.on('finish', () => out.close(resolve));
      out.on('error', (e) => {
        unlinkSync(path);
        reject(e);
      });
    }).on('error', reject);
  });
}

let failures = 0;
for (const [file, url] of MANIFEST) {
  const path = join(dir, file);
  if (existsSync(path)) {
    console.log(`· ${file} already present`);
    continue;
  }
  try {
    await fetchTo(url, path);
    console.log(`✓ ${file}`);
  } catch (e) {
    failures++;
    console.error(`✗ ${file}: ${e.message}`);
  }
}
if (failures) {
  console.error(`\n${failures} file(s) failed — re-run when the network allows. The app shows empty plates until then.`);
  process.exit(1);
}
console.log('\nAll public-domain plates are in place.');
