import type { Card } from '../types';

export const burstofjoy: Card = {
  id: 'burstofjoy',
  ref: '02',
  unit: 0,
  unitLabel: 'Unit 0',
  title: 'Burst of Joy, 1973',
  lens: 'one-frame-of-many',
  tier: 'core',
  ratio: 960 / 655,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Associated Press',
    credit:
      "Slava 'Sal' Veder, 17 March 1973, Travis Air Force Base, California. Associated Press. Pulitzer Prize for Feature Photography, 1974.",
    sourceUrl: 'https://en.wikipedia.org/wiki/Burst_of_Joy',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A returned prisoner of war in uniform, photographed from behind. His teenage daughter runs toward him across the tarmac, arms flung wide, the rest of the family behind her.',
    },
  ],
  look: 'The runway at Travis Air Force Base, California. 17 March 1973.',
  commit: {
    prompt: 'What does this photograph show?',
    note: 'Ungraded. Say what you take it to be.',
    options: [
      { key: 'family', text: 'A family made whole again after six years of war.' },
      { key: 'moment', text: 'A greeting at an airport, and nothing further.' },
      { key: 'posed', text: 'A reunion restaged for the press.' },
      { key: 'cant', text: 'The picture cannot say.' },
    ],
  },
  context: [
    'Lieutenant Colonel Robert Stirm was shot down over Hanoi in 1967 and spent more than five years as a prisoner of war. This is his return, one of hundreds of homecomings photographed that spring. His daughter Lorrie, fifteen, leads; the rest of the family follows.',
    'Three days before this exposure, on the day of his release, Stirm was handed a letter from his wife. The marriage was over. Within a year they were divorced.',
    'The photograph won the Pulitzer Prize. Stirm has said he cannot enjoy it. His children keep copies on their walls.',
  ],
  probe: {
    prompt: "The caption calls it Burst of Joy. Whose joy can the picture actually show?",
    note: 'Open the photograph from the source record and study the faces you can and cannot see.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'runners',
        text: "The running children's — their faces carry it. The man's face is the one face the camera cannot see.",
        correct: true,
      },
      { key: 'his', text: "Lt Col Stirm's — the whole picture points at him." },
      { key: 'wife', text: "His wife's — she is in the frame too." },
      { key: 'all', text: "The whole family's, equally." },
    ],
  },
  reveal: {
    correct:
      'Yes. Stirm is photographed from behind. The joy in the frame belongs to the children running toward him; his face, and everything it knew, is turned away from the camera.',
    incorrect:
      'Look again at the geometry: Stirm has his back to the camera. The joy the frame records belongs to the children running toward him. His face — and everything it knew — is the one face the picture cannot show.',
    extra:
      'The photograph is not false. It is one true second, chosen from hundreds of homecoming frames because it looked like the story America wanted about its homecomings — and the letter in his pocket was three days old.',
  },
  andYet: {
    prompt: "The children's joy was real, and the picture claims nothing it does not show. What is there to defend?",
    canonical:
      'Veder photographed a real reunion exactly as it happened and captioned only what was in front of him. A photograph is allowed to show a happy second inside an unhappy story. It is readers who decide that one second stands for a whole life.',
  },
  principle: {
    canonical:
      'True and complete are different claims. A photograph can be perfectly honest about a moment and silent about everything around it — the dishonesty starts only when the silence is sold as the whole story.',
    verdict: 'acceptable',
  },
  teacherNotes:
    'Load-bearing card: it kills "fake versus real" before the mechanisms start. The photograph is not deceptive, and the story is still not what it seems. Keep both in the air at once.',
};
