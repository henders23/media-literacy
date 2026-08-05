import type { Card } from '../types';

export const unseen: Card = {
  id: 'unseen',
  ref: '—',
  unit: 9,
  unitLabel: 'No scaffolding',
  title: 'An unseen photograph',
  lens: '—',
  tier: 'core',
  ratio: 960 / 968,
  sensitivity: 'none',
  mode: 'unseen',
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'NASA',
    credit: 'Buzz Aldrin, 20 July 1969. NASA AS11-40-5878. Public domain.',
    sourceUrl: 'https://www.nasa.gov/image-article/apollo-11-bootprint/',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/bootprint.jpg',
      alt: 'A single boot print pressed into fine grey lunar soil.',
    },
  ],
  look: 'The Sea of Tranquility, the Moon. 20 July 1969.',
  unseen: {
    prompt: 'Name what you cannot tell from this photograph.',
    note: 'No background, no options, no answer, no lens. Only the picture.',
    after:
      'Recorded. One thing worth knowing: this picture is usually captioned as the first footprint on the Moon. It is not. Aldrin made it on purpose, as part of an experiment on the soil, after both men had been walking around for some time — and the boot is his.',
  },
  teacherNotes:
    'Run at the end of every session. Collect answers verbatim; the good ones name absences rather than doubts.',
};
