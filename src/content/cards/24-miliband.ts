import type { Card } from '../types';

export const miliband: Card = {
  id: 'miliband',
  ref: '24',
  unit: 6,
  unitLabel: 'Unit 6',
  title: 'The bacon sandwich, 2014',
  lens: 'one-frame-of-many',
  tier: 'core',
  ratio: 960 / 640,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Evening Standard',
    credit: 'Jeremy Selwyn, New Covent Garden Market, London, 21 May 2014. Evening Standard.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Ed_Miliband_bacon_sandwich_photograph',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A politician caught mid-bite of a bacon sandwich, eyes half closed, face contorted for a fraction of a second.',
    },
  ],
  look: 'A flower market in south London, on the morning before local elections. 21 May 2014.',
  lookIntro:
    'In May 2014 Ed Miliband led the Labour Party and hoped to become the British prime minister. The day before local elections he made an early campaign visit to a London flower market. The press pack came with him, as it did everywhere.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first. Yes, it is a man eating a sandwich.',
    options: [],
  },
  context: [
    'Ed Miliband, then leader of the Labour Party, ate a bacon sandwich in front of the press pack at a staged campaign stop. Photographers made many frames of an unremarkable breakfast.',
    'One frame — mid-chew, eyes half closed, face folded for a fraction of a second — was published, then republished for years as evidence that he was awkward, strange, not prime ministerial. The day before the 2015 general election, The Sun ran it across its front page with the words "Save Our Bacon".',
    'Nobody has ever claimed the frame was altered. It did not need to be.',
  ],
  probe: {
    prompt: 'A dozen frames of the same breakfast exist. What makes this one publishable and the others not?',
    note: 'The source record shows the frame and tells the story around it.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'match',
        text: 'Nothing about the event — the face happened to match a story already being told about the man.',
        correct: true,
      },
      { key: 'light', text: 'The light is better.' },
      { key: 'sharp', text: 'It is the only sharp frame.' },
      { key: 'first', text: 'It was the first frame taken.' },
    ],
  },
  reveal: {
    correct:
      "Yes. Every human chews like this in some frame or other. The selection was not of a moment that revealed him but of a moment that matched him — the caption 'weird' existed first, and the frame was recruited for it.",
    incorrect:
      'Light, sharpness and order have nothing to do with it — several frames were technically fine. This one was chosen because the face matched a story already being told about the man. The caption existed first; the frame was recruited.',
    extra:
      'It ran on a front page the day before a general election. Nobody claimed the picture was false, and nobody needed to.',
  },
  andYet: {
    prompt: 'The frame is real and unaltered, and politicians court cameras for a living. What is the defence?',
    canonical:
      'He ate in front of forty photographers at a stop staged for photography; the bargain of such events is that every frame is on the record. The photographer filed an honest frame from an honest situation. The weaponising came later, from editors and readers who already agreed with it.',
  },
  principle: {
    canonical:
      'One frame from many is an argument disguised as an accident. When a picture confirms what its audience already believes about a person, ask to see the rest of the roll.',
    verdict: 'deceptive',
  },
  teacherNotes:
    "The lightest card in the deck, and students' favourite — use it to seed 'one frame of many' before Migrant Mother turns the same lens serious. Every student has a burst of frames of themselves exactly like this.",
};
