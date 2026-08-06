import type { Card } from '../types';

export const kentstate: Card = {
  id: 'kentstate',
  ref: '29',
  unit: 7,
  unitLabel: 'Unit 7 · gated',
  title: 'Kent State, 1970',
  lens: 'retouched',
  tier: 'gated',
  ratio: 960 / 650,
  sensitivity: 'graphic',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'John Filo / Getty Images',
    credit: 'John Filo, Kent State University, Ohio, 4 May 1970. Pulitzer Prize, 1971.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kent_State_shootings',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A fourteen-year-old girl kneels over the body of a student shot dead in a parking lot, arms raised, mouth open in a scream. The photograph is distressing and is not displayed here.',
    },
  ],
  look: 'A parking lot at Kent State University, Ohio. 4 May 1970.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'The mechanism here is not the famous part of the story.',
    options: [],
  },
  context: [
    'National Guardsmen fired on students protesting the invasion of Cambodia, killing four. John Filo, a student photojournalist, photographed fourteen-year-old Mary Ann Vecchio kneeling over the body of Jeffrey Miller. The photograph won the Pulitzer Prize and became the image of the day America shot its own children.',
    "In the negative, a fence post rises directly out of Vecchio's head — a compositional accident. In many later reproductions, including some of the most widely printed, the post is gone: airbrushed out by an editor, somewhere, at some point. Filo did not do it, did not authorise it, and for years did not know.",
  ],
  probe: {
    prompt: 'Compare the original frame with the widely reprinted version. What is missing?',
    note: 'The source record discusses both versions.',
    tools: [],
    grade: 'options',
    options: [
      { key: 'post', text: 'A fence post that rose directly behind her head.', correct: true },
      { key: 'body', text: 'A second body.' },
      { key: 'guards', text: 'The guardsmen.' },
      { key: 'smoke', text: 'Tear gas in the background.' },
    ],
  },
  reveal: {
    correct:
      'Yes. In the negative a post grows out of her head; in decades of reprints it does not. Some editor painted it out, the cleaned frame propagated, and nobody said so.',
    incorrect:
      'No body, no guardsman and no gas was touched. What vanished is a fence post that rose out of her head — visual noise, painted out by an unknown editor, in a version that then reproduced for decades.',
    extra:
      "Nothing the post's removal changed bears on what happened in that parking lot. That is exactly what makes this card hard: the edit is real, invisible, unauthorised — and, arguably, about nothing.",
  },
  andYet: {
    prompt: 'An edit made without the photographer’s knowledge and kept quiet for decades. Can it really be defended?',
    canonical:
      "The post misdirected the eye at the picture's exact centre; removing it changed no fact of the event, added nothing, moved no person. Darkroom retouching of precisely this kind was routine for a century. The frame's testimony about the shooting is untouched.",
  },
  principle: {
    canonical:
      'The retouch changed geometry, not testimony — acceptable the way a contrast adjustment is acceptable. It stops being acceptable the moment anyone denies it, because a document of a killing must survive audit.',
    verdict: 'acceptable',
  },
  teacherNotes:
    'One of the three cards that must resolve acceptable, placed where students least expect it. If the class revolts against the verdict, good — make them name one fact about the event the edit altered. There is not one.',
};
