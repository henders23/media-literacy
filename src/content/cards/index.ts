import type { Card } from '../types';
import { cottingley } from './01-cottingley';
import { burstofjoy } from './02-burstofjoy';
import { fenton } from './03-fenton';
import { rothstein } from './04-rothstein';
import { lunch } from './05-lunch';
import { iwojima } from './06-iwojima';
import { lochness } from './07-lochness';
import { firdos } from './08-firdos';
import { che } from './09-che';
import { tankman } from './10-tankman';
import { sitroom } from './11-sitroom';
import { earthrise } from './12-earthrise';
import { aldrin } from './13-aldrin';
import { vjday } from './14-vjday';
import { amazon } from './15-amazon';
import { reichstag } from './16-reichstag';
import { pyramids } from './17-pyramids';
import { ojcover } from './18-ojcover';
import { hajj } from './19-hajj';
import { pillars } from './20-pillars';
import { fallingsoldier } from './21-fallingsoldier';
import { terrorofwar } from './22-terrorofwar';
import { eldagsen } from './23-eldagsen';
import { miliband } from './24-miliband';
import { marlboro } from './25-marlboro';
import { afghangirl } from './26-afghangirl';
import { migrantmother } from './27-migrantmother';
import { gardner } from './28-gardner';
import { kentstate } from './29-kentstate';
import { carter } from './30-carter';
import { fallingman } from './31-fallingman';
import { unseen } from './99-unseen';

/**
 * Deck order. Plates whose photographs are hosted in the app come first, so
 * the opening pages work without leaving it; the link-out plates — where the
 * student opens the photograph at the rights holder's archive — form one
 * contiguous block after them. Two placements are fixed regardless: the
 * Migrant Mother capstone stays late (every mechanism is assumed known), and
 * the gated unit and the unassessed capstone stay last.
 */
export const CARDS: Card[] = [
  // photographs in the app
  fenton,
  rothstein,
  iwojima,
  sitroom,
  earthrise,
  aldrin,
  vjday,
  pillars,
  // photographs at the archive
  cottingley,
  burstofjoy,
  lunch,
  lochness,
  firdos,
  che,
  tankman,
  amazon,
  reichstag,
  pyramids,
  ojcover,
  hajj,
  fallingsoldier,
  terrorofwar,
  eldagsen,
  miliband,
  marlboro,
  afghangirl,
  // capstone
  migrantmother,
  // gated unit, off by default — runs after the capstone
  gardner,
  kentstate,
  carter,
  fallingman,
  // always last
  unseen,
];

export const cardById = (id: string): Card | undefined => CARDS.find((c) => c.id === id);
export const cardIndex = (id: string): number => CARDS.findIndex((c) => c.id === id);

import type { DeckSettings } from '../../store/progress';

/** The deck as gated by the teacher. The unseen capstone is always present. */
export const visibleCards = (s: DeckSettings): Card[] =>
  CARDS.filter(
    (c) => (c.tier !== 'extended' || s.showExtended) && (c.tier !== 'gated' || s.showGated),
  );
