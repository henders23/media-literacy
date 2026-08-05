import type { Card } from '../types';
import { fenton } from './03-fenton';
import { lunch } from './05-lunch';
import { iwojima } from './06-iwojima';
import { lochness } from './07-lochness';
import { che } from './09-che';
import { sitroom } from './11-sitroom';
import { earthrise } from './12-earthrise';
import { aldrin } from './13-aldrin';
import { vjday } from './14-vjday';
import { reichstag } from './16-reichstag';
import { pillars } from './20-pillars';
import { migrantmother } from './27-migrantmother';
import { unseen } from './99-unseen';

export const CARDS: Card[] = [
  fenton,
  lunch,
  iwojima,
  lochness,
  che,
  sitroom,
  earthrise,
  aldrin,
  vjday,
  reichstag,
  pillars,
  migrantmother,
  unseen,
].sort((a, b) => (Number(a.ref) || 999) - (Number(b.ref) || 999));

export const cardById = (id: string): Card | undefined => CARDS.find((c) => c.id === id);
export const cardIndex = (id: string): number => CARDS.findIndex((c) => c.id === id);
