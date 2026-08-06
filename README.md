# Loupe

Media literacy app for secondary students. Students examine historical photographs through a
fixed seven-beat sequence — Look → Commit → Context → Probe → Reveal → And Yet → Principle —
and collect analytical "lenses" they can apply to new images.

- **Spec:** [`BUILD.md`](BUILD.md) · **conventions:** [`CLAUDE.md`](CLAUDE.md)
- **Reference:** the working single-file prototype and visual direction live in [`reference/`](reference/)

## Stack

Vite + React + TypeScript + Tailwind. React Router in hash mode (`#/card/fenton` survives LMS
iframes). Zustand + localStorage — **no backend**, no accounts. Static build drops into
Moodle/Canvas as a folder.

## Run it

```sh
npm install
npm run fetch-images   # one-time: pulls the public-domain plates into /public/images
npm run dev            # develop
npm run build          # rights gate → type check → static build in /dist
```

`fetch-images` downloads the public-domain scans (NASA, Library of Congress, National Archives…)
from Wikimedia Commons at 1600px so the app hosts them locally and never hotlinks. Cards with
`status: 'embed'` are deliberately served from the rights holder instead and need no download.
The two Fenton plates shipped with the design system; one is already vendored.

## Architecture

Three things stay strictly separate (this rule *is* the architecture):

1. **The beat engine** (`src/engine/`) knows the seven-beat sequence and nothing else.
2. **Interaction plugins** (`src/interactions/registry.ts`) are selected by string in card data —
   a card never imports a component. Loupe, A/B compare, crop handles, rotate, hotspot,
   colour-channel assignment.
3. **Content is data** (`src/content/cards/`) — typed TS objects, zero JSX, checked at build.

`scripts/check-rights.ts` runs in `prebuild` and **fails the build** if any card has incomplete
rights metadata, hosts a non-public-domain image, hotlinks a hosted asset, or lacks a credit
line. Do not weaken it.

## Screens

- `#/` — the index: a paper contact sheet of plates, lens kit, progress marks
- `#/card/:id` — a card: plate + interactions left, the seven beats right
- `#/review` — confidence review: every card where the student was sure and wrong
- `#/teacher` (or the header toggle) — teacher notes, plate registration calibration with
  difference view, rights audit, CSV export of this device's responses

## Content status

All 31 cards in the BUILD.md manifest are authored, plus the unassessed capstone. Cards whose
photographs are under copyright use the rights ladder's **link-out** rung: the app supplies the
context and questions, and a button opens the photograph at the rights holder's archive — it is
never copied. Unit 7 (graphic material) ships gated off; the teacher panel turns it on.

## Music

"Healing" by Kevin MacLeod (incompetech.com), licensed under CC BY 4.0, plays on start and
loops; the header button turns it off and the choice persists on the device. Full attribution
is on the credits page (the last page of the index).

## LMS deployment

Vite `base` is `'./'`, so `/dist` works from any subdirectory. Moodle: zipped folder resource.
Canvas: upload, link `index.html`, give the iframe ≥ 900px height. All assets are local —
no mixed-content blocks.
