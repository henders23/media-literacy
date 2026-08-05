# Loupe — build specification

Media literacy app. Students examine photographs through a fixed seven-beat sequence and collect analytical "lenses".

This file is the complete spec. Work through it phase by phase. Everything needed to build the app is here — do not re-derive content, schema or rights from scratch.

---

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Build | Vite + React + TypeScript | Static output, drops into any LMS as a folder |
| Styling | Tailwind | Design tokens in section 3 |
| Routing | React Router, **hash mode** | `#/unit/2/card/9` survives LMS iframes without server config |
| State | Zustand + localStorage | No backend |
| Content | TypeScript objects in `/src/content` | Type-checked at build, no CMS |
| Media | Local files in `/public/images` | Never hotlink |
| Deploy | `vite build` → static folder | Moodle/Canvas upload or GitHub Pages |

**No backend in v1.** No auth, no accounts, no database. Add xAPI only if student data must leave the device.

---

## 2. Architecture

Three things stay strictly separate:

1. **The beat engine** knows the seven-beat sequence and nothing else.
2. **Interaction plugins** are registered components, selected by string in card data.
3. **Content** is data — 31 objects, zero JSX.

If building a new card ever requires touching engine code, add a schema field instead. This rule is the architecture.

```
src/
  engine/
    BeatRunner.tsx        drives the seven beats
    beats/                Look, Commit, Context, Probe, Reveal, AndYet, Principle
    Progress.tsx
  interactions/
    registry.ts
    Loupe.tsx  ABCompare.tsx  CropDrag.tsx  Sequence.tsx
    Rotate.tsx  Hotspot.tsx  ColourAssign.tsx  TextCommit.tsx
  activities/
    UnseenCard.tsx  LensSort.tsx  BuildDeception.tsx
    ConfidenceReview.tsx  SpacedReturn.tsx
  content/
    cards/                01-cottingley.ts … 31-falling-man.ts
    units.ts  lenses.ts  rights.ts
  store/
    progress.ts  responses.ts
  teacher/
    Gating.tsx  Notes.tsx  Calibration.tsx  Export.tsx
scripts/
  check-rights.ts         runs in prebuild, fails the build
public/
  images/
```

---

## 3. Design tokens

Dark, archival, light-box. Ported from the working prototype.

```js
colors: {
  ink:      '#0e1319',   panel:   '#18202a',   panel2:  '#1f2934',
  line:     '#2c3945',   paper:   '#e7e1d3',   paperDim:'#cfc7b5',
  cyan:     '#5aa3bd',   cyanDim: '#2e5f74',   ochre:   '#c9903f',
  text:     '#dfe6ec',   muted:   '#8494a2',
  ok:       '#6fae7f',   err:     '#c2705f',
}
```

- **Display / questions:** Georgia, "Iowan Old Style", serif
- **Body:** system sans stack
- **Labels, catalogue numbers, buttons:** ui-monospace — archive reference numbers are real structure, not decoration
- Cyan = interaction and student input. Ochre = reveal. Never mix them.
- Border radius 2–3px. No shadows except the loupe.
- `prefers-reduced-motion` respected everywhere.

---

## 4. The seven beats

Fixed order. Never reorder, never skip, except via the declared `variant`.

| # | Beat | What happens | Why it exists |
|---|---|---|---|
| 1 | **Look** | Image. When and where only. No framing, no hints. | An uncontaminated first read is the most valuable data the card produces |
| 2 | **Commit** | Interpretive question + **confidence slider**. Ungraded. | Confidence × correctness is the actual skill being taught |
| 3 | **Context** | The background, now that they've committed | Context given first would bias the read |
| 4 | **Probe** | Second question — **evidential and verifiable**, uses an interaction | Beat 2 asks what they think; beat 4 asks what they can prove |
| 5 | **Reveal** | The answer, with their beat-2 answer quoted back verbatim | Closes the loop on their own words |
| 6 | **And yet** | Student defends the photographer, then sees the canonical defence | Prevents the deck training cynicism |
| 7 | **Principle** | Student writes the rule in one line, *then* compares to canonical | Generation effect; costs one text box |

**Beats 2 and 4 must differ in kind.** Beat 2: *what do you think this is?* Beat 4: *what in the frame proves it?* That distinction is the whole course in miniature.

### Variants — use deliberately

By card six students learn the rhythm and start waiting for the twist instead of examining the photograph. Break it:

- `reveal-first` — state the finding, then ask them to locate the evidence
- `no-second-reveal` — one card per unit stops early
- `verdict: 'acceptable'` — three cards must resolve as *this edit is fine*

If a student can predict the verdict from the card's presence in the deck, the card has failed.

---

## 5. Card schema

```ts
export type LensId =
  | 'staged' | 'cropped' | 'miscaptioned' | 'retouched'
  | 'one-frame-of-many' | 'wrong-context' | 'no-referent';

export type RightsStatus = 'public-domain' | 'embed' | 'link-out' | 'described';
export type DisplayMode  = 'host' | 'iframe' | 'link' | 'diagram';

export type Card = {
  id: string;
  unit: number;
  order: number;
  lens: LensId;
  tier: 'core' | 'extended' | 'gated';

  rights: {
    status: RightsStatus;
    holder: string;
    credit: string;        // shown under every plate, always
    sourceUrl: string;
    display: DisplayMode;  // 'host' ONLY valid when status is 'public-domain'
  };

  assets: {
    id: string;
    src: string;           // /images/… when hosted, absolute URL otherwise
    alt: string;
    align?: { scale: number; dx: number; dy: number };  // registration
  }[];

  look:    { orientation: string };          // when + where ONLY
  commit:  {
    prompt: string;
    note?: string;
    options?: { key: string; text: string }[];
    interaction?: InteractionId;
    confidence: true;                        // always on
  };
  context: { body: string };
  probe:   {
    prompt: string;
    note?: string;
    interaction: InteractionId;
    options: { key: string; text: string; correct?: boolean }[];
  };
  reveal:  { correct: string; incorrect: string; quoteCommit: true };
  andYet:  { prompt: string; canonical: string };
  principle: {
    studentWrites: true;
    canonical: string;
    verdict: 'deceptive' | 'acceptable' | 'unresolved';
  };

  variant?: 'reveal-first' | 'no-second-reveal';
  sensitivity: 'none' | 'discussion' | 'graphic';
  teacherNotes: string;
};
```

---

## 6. Interaction plugins

Each takes assets plus config and emits a response. Registered by string, never imported by a card.

| Id | Does | Used by |
|---|---|---|
| `ABCompare` | Toggle two registered images | Fenton, Reichstag, O.J. |
| `Loupe` | Magnifier following pointer, 3.4× | Fenton, Aldrin, Hajj |
| `CropDrag` | Student drags crop handles | Firdos, Che, Tank Man |
| `Sequence` | Scrub a frame strip, select one | Miliband, Migrant Mother, Rothstein |
| `Rotate` | Rotate an image to chosen orientation | Earthrise |
| `Hotspot` | Click a region to identify | Iwo Jima, Situation Room, Aldrin visor |
| `ColourAssign` | Map channels to colours | Pillars of Creation |
| `TextCommit` | Free text, used at beats 6 and 7 | Every card |

**Loupe implementation** — a working version exists in the prototype. Clone the frame markup into a circular overflow-hidden div, scale the inner container by zoom factor, position it at `-(pointer × zoom - loupeSize/2)`. Percentage-based layer rules then scale correctly, including any alignment transform.

**Image registration** — scans from different institutions are not pixel-aligned. Teacher mode needs the calibration panel from the prototype: scale/dx/dy sliders plus a `mix-blend-mode: difference` view. Where images align the frame goes near-black; the residue is the finding. Store results in `assets[].align`.

---

## 7. Rights gate — build this before the content

`scripts/check-rights.ts`, wired to `prebuild`. Fails the build if:

- any card lacks complete `rights` metadata
- `display: 'host'` on anything whose `status` is not `public-domain`
- any hosted asset `src` is an absolute URL rather than `/images/…`
- any card lacks a `credit` string

Roughly forty lines. It makes the mistake structurally impossible rather than remembered, and it is the single highest-value file in the project.

**The rights ladder**, applied per card:

1. **Public domain** — host, crop, annotate freely
2. **Official embed** — Getty editorial embed, Wikimedia; served from the rights holder
3. **Link out** — app supplies context and questions, button opens the archive page
4. **Describe + diagram** — for anything unclearable

Credit lines stay visible on every plate. Not primarily a legal matter — provenance is part of what the app teaches, and stripping it while teaching it would be an odd lesson.

---

## 8. Content manifest — 31 cards

`PD` = public domain, host directly. Others need embed or link-out. Verify each before shipping.

### Unit 0 — Break the binary (core)
| # | Card | Lens | Rights | Interaction | Verdict |
|---|---|---|---|---|---|
| 1 | Cottingley Fairies, 1917 | staged | link-out | Hotspot | deceptive |
| 2 | *Burst of Joy*, 1973 | one-frame-of-many | link-out | TextCommit | acceptable |

Card 2 is load-bearing: it kills "fake vs real" before the mechanisms start.

### Unit 1 — Staged (core)
| # | Card | Lens | Rights | Interaction | Verdict |
|---|---|---|---|---|---|
| 3 | Fenton, 1855 | staged | **PD** | Loupe + ABCompare | deceptive |
| 4 | Rothstein steer skull, 1936 | staged | **PD** (LoC) | Sequence | deceptive |
| 5 | *Lunch atop a Skyscraper*, 1932 | staged | link-out | TextCommit | deceptive |
| 6 | Iwo Jima, 1945 | miscaptioned | **PD** | Hotspot | unresolved |

### Unit 2 — The edge of the frame
| # | Card | Lens | Rights | Interaction | Tier |
|---|---|---|---|---|---|
| 7 | Loch Ness, 1934 | cropped | link-out | CropDrag | extended |
| 8 | Firdos Square, 2003 | cropped | link-out | CropDrag | core |
| 9 | *Guerrillero Heroico*, 1960 | cropped | link-out | CropDrag | core |
| 10 | Tank Man, 1989 | cropped | link-out | CropDrag | core |
| 11 | *Situation Room*, 2011 | cropped | **PD** | Hotspot | core |
| 12 | *Earthrise*, 1968 | retouched | **PD** (NASA) | Rotate | core · **acceptable** |

### Unit 3 — The caption (core)
**Lens retrieval starts here.** From card 13 the commit question becomes *"which lens applies?"*

| # | Card | Lens | Rights | Interaction |
|---|---|---|---|---|
| 13 | Aldrin on the Moon, 1969 | miscaptioned | **PD** (NASA) | Loupe + Hotspot |
| 14 | *V-J Day*, 1945 | miscaptioned | link-out | TextCommit |
| 15 | Amazon fires, 2019 | wrong-context | link-out | TextCommit |

Card 15 is the only card teaching a portable skill — live reverse image search. Do not cut it.

### Unit 4 — After the shutter (branchable)
| # | Card | Lens | Rights | Interaction | Tier |
|---|---|---|---|---|---|
| 16 | Reichstag flag, 1945 | retouched | link-out | ABCompare | core |
| 17 | Nat Geo pyramids, 1982 | retouched | link-out | CropDrag | core |
| 18 | *Time* O.J. cover, 1994 | retouched | link-out | ABCompare | extended |
| 19 | Adnan Hajj / Reuters, 2006 | retouched | link-out | Loupe | extended |
| 20 | *Pillars of Creation* | retouched | **PD** | ColourAssign | extended · **acceptable** |

Card 20 closes the unit. It does for Unit 4 what card 2 does for Unit 0 — stops it collapsing into "editing = lying" at exactly the moment students are about to conclude it.

### Unit 5 — Did it happen at all? (branchable)
| # | Card | Lens | Rights | Interaction | Verdict |
|---|---|---|---|---|---|
| 21 | Capa, *Falling Soldier*, 1936 | no-referent | link-out | TextCommit | **unresolved** |
| 22 | *Terror of War*, 1972 | no-referent | **link-out, never display** | TextCommit | **unresolved** |
| 23 | Eldagsen AI image, 2023 | no-referent | link-out | TextCommit | deceptive |

Card 22 is `sensitivity: 'graphic'`. Teach the 2025 authorship dispute; the image stays behind a link.

### Unit 6 — Beyond the moment
| # | Card | Lens | Rights | Interaction | Tier |
|---|---|---|---|---|---|
| 24 | Miliband sandwich, 2014 | one-frame-of-many | link-out | Sequence | core |
| 25 | Marlboro Marine, 2004 | one-frame-of-many | link-out | TextCommit | extended |
| 26 | *Afghan Girl*, 1984 | one-frame-of-many | link-out | TextCommit | core |
| 27 | ***Migrant Mother*, 1936 — capstone** | all | **PD** (LoC) | Sequence | core |

Card 27 is the capstone: student acts as FSA picture editor, chooses from six frames, justifies the choice, then retouches the thumb. Every mechanism in one photograph.

### Unit 7 — What photographs cost (gated, off by default)
Runs **after** the capstone. Students arrive with full vocabulary, so discussion is ethical rather than mechanical.

| # | Card | Lens | Sensitivity |
|---|---|---|---|
| 28 | Gardner, Gettysburg, 1863 | staged | graphic |
| 29 | Kent State, 1970 | retouched | graphic · **acceptable** |
| 30 | Carter, Sudan, 1993 | miscaptioned | graphic |
| 31 | *The Falling Man*, 2001 | one-frame-of-many | graphic |

Abu Ghraib available as substitute for 31 where more appropriate.

### Always last — unassessed capstone
An unseen photograph, no scaffolding, one question: **name what you can't tell from this.**

---

## 9. Activities

| Activity | Where | What |
|---|---|---|
| **Unseen card** | End of each unit | New photograph, no scaffolding: *what can't you tell?* |
| **Lens sort** | End of units 3, 5, 7 | Four photos, seven lenses, no hints. Pure retrieval |
| **Build the deception** | End of unit 2 | Wide PD photo: crop and caption to tell two opposite true stories |
| **Spaced return** | Unit 4 | A Unit 1 photo reappears with a new question |
| **Confidence review** | End of deck | Every card where the student was confident and wrong |

Confidence review is the most useful artefact the app produces. Build it properly.

---

## 10. Build phases

**Phase 0 — Scaffold.** Vite + TS + Tailwind, hash routing, tokens from section 3, `CLAUDE.md`.

**Phase 1 — One card, seven beats.** Fenton, end to end, hard-coded, using two local images. Include the confidence slider and student-written principle. Nothing else until the loop feels right.

**Phase 2 — Extract the engine.** Refactor until Fenton is pure data. Add Rothstein reusing only existing interactions. *This proves the architecture. Do not skip it.*

**Phase 3 — Interaction plugins.** Registry, then the eight components in section 6.

**Phase 4 — Deck shell.** Units, routing, lens kit, progress, tier gating. Lens retrieval switches on at card 13. Units 0–3 linear and compulsory; 4, 5 and 7 branchable.

**Phase 5 — Rights gate.** Section 7. **Build this before phase 8**, not after.

**Phase 6 — Activities.** Section 9.

**Phase 7 — Teacher mode.** `#/teacher` — gating toggles, notes, alignment calibration, CSV export of responses.

**Phase 8 — Content.** All 31 cards. Core tier (21) first, test with students, then extended and gated. This will take longer than every other phase combined.

**Phase 9 — Ship.** A11y pass, mobile, reduced motion, images at 1600px/q80, LMS embed test at ≥900px iframe height, offline check.

---

## 11. LMS deployment

- **Moodle** — File resource or zipped Folder. Appearance → Display: *Open* or *In pop-up*.
- **Canvas** — upload folder, link `index.html` from a Page. Give the iframe ≥900px height.
- **Google Classroom** — no HTML hosting; use Drive or GitHub Pages.

Two things break LMS embeds: **mixed content** (any HTTP asset on an HTTPS LMS is silently blocked — local relative paths avoid it) and **iframe height** defaulting to ~400px.

Set Vite `base: './'` so relative asset paths work from any LMS subdirectory.

---

## 12. Known decisions, already made

Don't relitigate these while building:

- No backend, no accounts, no gamification
- Context comes **after** the commit, deliberately
- The commit is **ungraded** — adding correctness to it breaks the design
- The principle is written by the student **before** the canonical appears
- Three cards must resolve as `acceptable`, two as `unresolved`
- Distressing images are a gated unit **after** the capstone, not sprinkled through
- Credit lines are always visible
