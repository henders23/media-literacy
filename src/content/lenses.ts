import type { LensId, Option } from './types';

export const LENSES: { id: LensId; label: string; gloss: string }[] = [
  { id: 'staged', label: 'staged', gloss: 'arranged in front of the camera' },
  { id: 'cropped', label: 'cropped', gloss: 'the frame cut until the account changes' },
  { id: 'miscaptioned', label: 'miscaptioned', gloss: 'true frame, false words' },
  { id: 'retouched', label: 'retouched', gloss: 'altered after the exposure' },
  { id: 'one-frame-of-many', label: 'one frame of many', gloss: 'a selection presented as the event' },
  { id: 'wrong-context', label: 'wrong context', gloss: 'a real photograph of somewhere else' },
  { id: 'no-referent', label: 'no referent', gloss: 'nothing was in front of a lens' },
];

export const LENS_OPTIONS: Option[] = LENSES.map((l) => ({
  key: l.id,
  text: `${l.label} — ${l.gloss}`,
}));

export const lensLabel = (id: string): string => {
  const l = LENSES.find((x) => x.id === id);
  return l ? l.label : id;
};

/** Beat 2 switches to "which lens applies?" from this card ref onward. */
export const LENS_RETRIEVAL_FROM = 13;
