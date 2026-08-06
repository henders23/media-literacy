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

export const CARDS: Card[] = [
  cottingley,
  burstofjoy,
  fenton,
  rothstein,
  lunch,
  iwojima,
  lochness,
  firdos,
  che,
  tankman,
  sitroom,
  earthrise,
  aldrin,
  vjday,
  amazon,
  reichstag,
  pyramids,
  ojcover,
  hajj,
  pillars,
  fallingsoldier,
  terrorofwar,
  eldagsen,
  miliband,
  marlboro,
  afghangirl,
  migrantmother,
  gardner,
  kentstate,
  carter,
  fallingman,
  unseen,
].sort((a, b) => (Number(a.ref) || 999) - (Number(b.ref) || 999));

export const cardById = (id: string): Card | undefined => CARDS.find((c) => c.id === id);
export const cardIndex = (id: string): number => CARDS.findIndex((c) => c.id === id);

import type { DeckSettings } from '../../store/progress';

/** The deck as gated by the teacher. The unseen capstone is always present. */
export const visibleCards = (s: DeckSettings): Card[] =>
  CARDS.filter(
    (c) => (c.tier !== 'extended' || s.showExtended) && (c.tier !== 'gated' || s.showGated),
  );
