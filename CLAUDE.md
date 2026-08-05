# Loupe

Media literacy app for secondary students. They examine photographs through a fixed seven-beat sequence and collect analytical "lenses" they can apply to new images.

Full specification in `BUILD.md`. Read it before starting a phase.

## Stack

Vite + React + TypeScript + Tailwind. React Router in **hash mode**. Zustand + localStorage. Static build, deployed into an LMS as a folder. **No backend.**

## Architecture rules

- **Content is DATA.** Never write card-specific JSX. If a card seems to need engine changes, add a field to the schema instead.
- **Interactions are plugins**, selected by string from a registry. A card never imports a component.
- **The beat engine** knows the seven beats and nothing about any particular photograph.

## The seven beats — fixed order

Look → Commit → Context → Probe → Reveal → And Yet → Principle

- **Context comes after the commit.** Deliberate. Context first would bias the read.
- **The commit is ungraded.** Do not add correctness to it. It records a hypothesis and a confidence level, and gets quoted back at Reveal.
- **Beats 2 and 4 differ in kind.** Beat 2: what do you think this is? Beat 4: what in the frame proves it?
- **The principle is written by the student first**, then compared to the canonical version. Never show the canonical first.
- **And Yet is not optional.** The student defends the photographer. Without it the deck trains cynicism.

## Rights — enforced by the build

- Every card needs complete `rights` metadata.
- `display: 'host'` is **only** valid when `status: 'public-domain'`.
- Never hotlink. Hosted images live in `/public/images`, referenced as `/images/…`.
- Credit lines are visible on every plate, always.

`scripts/check-rights.ts` runs in `prebuild` and fails the build on any violation. Do not weaken or bypass it.

## Voice

Plain and direct. No exclamation marks, no enthusiasm markers, no gamification language.

**Never write "photos lie" or any variant.** Principles must discriminate: what separates acceptable authorship from deception in this specific case? Three cards resolve as *acceptable* and two as *unresolved* — that's deliberate, and if a student can predict the verdict from a card's presence in the deck, the card has failed.

Errors explain what went wrong and how to fix it. Buttons say what happens: "Show me what I missed", not "Next".

## Don't

- Add a backend, authentication, or accounts
- Add streaks, points, badges, or scores
- Reorder or skip beats except via a card's declared `variant`
- Grade the commit
- Display any image marked `sensitivity: 'graphic'` outside the gated unit
- Reach for a CMS — content is typed TS objects, checked at build

## Current phase

Phase 0. Update this line as you go.
