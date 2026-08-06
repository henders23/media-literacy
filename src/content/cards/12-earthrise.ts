import type { Card } from '../types';

export const earthrise: Card = {
  id: 'earthrise',
  ref: '12',
  unit: 2,
  unitLabel: 'Unit 2',
  title: 'Earthrise, 1968',
  lens: 'retouched',
  tier: 'core',
  ratio: 1,
  sensitivity: 'none',
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'NASA',
    credit: 'William Anders, Apollo 8, 24 December 1968. NASA AS08-14-2383. Public domain.',
    sourceUrl: 'https://www.nasa.gov/image-article/apollo-8-earthrise/',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/earthrise.jpg',
      alt: 'The Earth, half in shadow, above the grey curve of the lunar surface.',
    },
  ],
  look: 'Lunar orbit, about 110 kilometres above the surface. 24 December 1968.',
  lookIntro:
    'In December 1968 the crew of Apollo 8 became the first people to fly around the Moon. Their job was to test the spacecraft and photograph the surface, to prepare for a landing the next year. The astronaut William Anders carried a camera for the mission.',
  commit: {
    prompt: 'Which way up was this picture taken?',
    note: 'Ungraded. The published orientation is not necessarily the exposed one.',
    options: [
      { key: 'asis', text: 'As you see it, with the edge of the Moon along the bottom.' },
      { key: 'quarter', text: 'The edge of the Moon ran up and down. It was turned before publication.' },
      { key: 'inverted', text: 'It was taken upside down.' },
      { key: 'cant', text: 'In orbit there is no up, so you cannot say.' },
    ],
  },
  context: [
    'The spacecraft was turning as it came around the Moon. Anders took the picture through a side window with a long lens, holding the camera in his hands. In orbit there is no up or down, so the camera had no horizon to line up with.',
    'NASA published the picture turned a quarter turn, with the edge of the Moon along the bottom and Earth above it. Almost every copy since has used that version.',
  ],
  probe: {
    prompt: 'Turn the plate back to the way the camera recorded it.',
    note: 'Put the edge of the Moon where the film has it.',
    tools: ['rotate'],
    grade: 'rotate',
    rotateAnswer: [90, 270],
  },
  reveal: {
    correct:
      'Yes. On the film the edge of the Moon runs up and down. Nothing was added, removed or moved. The whole edit is a quarter turn.',
    incorrect:
      'On the film the edge of the Moon runs up and down — a quarter turn from the version you know. Nothing was added, removed or moved.',
    extra:
      'The picture was turned so that people on Earth could read it, in a place where no direction is more true than another. It is the smallest edit possible, and it changed how millions of people understood the photograph.',
  },
  andYet: {
    prompt: 'In orbit there is no up. Does that make turning the picture fair?',
    canonical:
      'In orbit there is no correct up, so turning the picture cannot be false to the scene. Turning it let people see a horizon with a world rising above it, which is what the crew described. Nothing about the subject was changed.',
  },
  principle: {
    canonical:
      'An edit that changes nothing in front of the lens can still change what a picture says. Which way up a picture is shown is a choice — and it costs nothing to say you made it.',
    verdict: 'acceptable',
  },
  teacherNotes:
    'One of the three cards that must resolve as acceptable. If students arrive at "any edit is a lie", this card is the corrective — do not let them predict the verdict from the deck.',
};
