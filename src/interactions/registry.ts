import type { Card, GradeMode, InteractionId } from '../content/types';
import type { CardRecord } from '../store/progress';

/**
 * Interaction plugins are selected by string in card data (probe.tools /
 * probe.grade) — a card never imports a component. Adding an interaction
 * means registering it here plus its plate behaviour; the beat engine is
 * never touched.
 */

export type PlateUi = {
  ab: number;
  rotate: number;
  colour: Record<string, string>;
};

type Grader = (card: Card, rec: CardRecord, ui: PlateUi) => boolean;
type Readiness = (card: Card, rec: CardRecord, ui: PlateUi) => boolean;

export const graders: Record<GradeMode, Grader> = {
  options: (card, rec) => {
    const o = card.probe?.options?.find((x) => x.correct);
    return !!o && rec.probe === o.key;
  },
  hotspot: (card, rec) => {
    const h = rec.hotspot;
    const z = card.probe?.hotspot;
    if (!h || !z) return false;
    return h.x >= z.x && h.x <= z.x + z.w && h.y >= z.y && h.y <= z.y + z.h;
  },
  rotate: (card, _rec, ui) => {
    const norm = ((ui.rotate % 360) + 360) % 360;
    return (card.probe?.rotateAnswer ?? []).includes(norm);
  },
  colour: (card, _rec, ui) => {
    const a = card.probe?.colourAnswer ?? {};
    return Object.keys(a).every((k) => ui.colour[k] === a[k]);
  },
};

export const readiness: Record<GradeMode, Readiness> = {
  options: (_card, rec) => !!rec.probe,
  hotspot: (_card, rec) => !!rec.hotspot,
  rotate: (_card, _rec, ui) => ui.rotate !== 0,
  colour: (card, _rec, ui) => {
    const n = card.probe?.colourFilters?.length ?? 0;
    return Object.keys(ui.colour).length === n && new Set(Object.values(ui.colour)).size === n;
  },
};

/** Hint shown at the right of the plate tool row while the probe is live. */
export const toolHints: Record<InteractionId, string> = {
  loupe: 'loupe live · 3.4×',
  hotspot: 'click the frame',
  crop: 'drag the corners',
  rotate: 'turn the plate',
  ab: 'switch the plates',
  colour: 'assign the channels',
};

export const hintFor = (tools: InteractionId[]): string => {
  const order: InteractionId[] = ['loupe', 'hotspot', 'crop', 'rotate', 'ab', 'colour'];
  const first = order.find((t) => tools.includes(t));
  return first ? toolHints[first] : '';
};

export const CHANNELS = [
  { id: 'red', hex: '#b8422f' },
  { id: 'green', hex: '#4e7f52' },
  { id: 'blue', hex: '#2946c8' },
];

export const LOUPE_SIZE = 210;
export const LOUPE_ZOOM = 3.4;
