import type { Card } from '../types';

export const che: Card = {
  id: 'che',
  ref: '09',
  unit: 2,
  unitLabel: 'Unit 2',
  title: 'Guerrillero Heroico, 1960',
  lens: 'cropped',
  tier: 'core',
  ratio: 960 / 1230,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Korda estate',
    credit: 'Alberto Korda, 5 March 1960, Havana. © Korda estate.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Guerrillero_Heroico',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A man in a beret with a star looks past the camera, face set, against an empty sky. In the full negative, a stranger’s profile intrudes at the left edge and palm leaves at the right.',
    },
  ],
  look: 'A memorial service in Havana, Cuba. 5 March 1960.',
  lookIntro:
    "In 1959 Fidel Castro's revolution took power in Cuba, and Ernesto 'Che' Guevara was one of its leaders. In March 1960 a ship exploded in Havana's harbour, killing about a hundred people. At the public memorial service the next day, the photographer Alberto Korda was covering the speeches for a newspaper.",
  commit: {
    prompt: 'What is this photograph?',
    note: 'Ungraded.',
    options: [
      { key: 'sitting', text: 'A portrait arranged with the subject.' },
      { key: 'crowd', text: 'A photograph taken from a crowd at an event.' },
      { key: 'official', text: 'An official government photograph.' },
      { key: 'cant', text: 'The picture cannot tell you.' },
    ],
  },
  context: [
    "Korda took two photographs of Guevara at a memorial service for the people killed in the La Coubre explosion. On the negative there is a man's face at the left edge and palm leaves at the right.",
    'He cut both away. The print stayed in his studio for seven years before it left Cuba and became the most reproduced photograph of the century.',
  ],
  probe: {
    prompt: 'Compare the famous crop with the full negative. What does the tight crop remove?',
    note: 'The source record shows both. Name what the cropped picture can no longer tell you.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'setting',
        text: 'The crowd and the place, which show that he is at a funeral.',
        correct: true,
      },
      { key: 'retouch', text: 'Proof that the face has been altered.' },
      { key: 'second', text: 'Another man in uniform standing beside him.' },
      { key: 'date', text: 'A date printed on the edge of the negative.' },
    ],
  },
  reveal: {
    correct: 'Yes. Cropped, the picture stops being a photograph of a funeral and becomes a face against the sky.',
    incorrect:
      'There is no retouching and no date stamp. What the crop removes is the place: cropped, a photograph of a funeral becomes a face against the sky.',
    extra: 'Nothing was added and nothing was moved. One picture was chosen out of a bigger one.',
  },
  andYet: {
    prompt: 'Korda cut away the crowd, not the man. Is that composing a picture, or changing the record?',
    canonical:
      'Cropping is part of composing a picture, and he removed nothing that changed what Guevara was doing or where he stood. He took no money for the image for forty years.',
  },
  principle: {
    canonical:
      'A crop that removes the place removes the event and leaves a face. That is how a record becomes a symbol — which is fair, as long as nobody says the symbol is still the record.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'Pair with Loch Ness. Same operation, different verdict, and students should be able to say why.',
};
