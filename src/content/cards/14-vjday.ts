import type { Card } from '../types';

export const vjday: Card = {
  id: 'vjday',
  ref: '14',
  unit: 3,
  unitLabel: 'Unit 3',
  title: 'V-J Day in Times Square, 1945',
  lens: 'miscaptioned',
  tier: 'core',
  ratio: 960 / 989,
  sensitivity: 'discussion',
  lensRetrieval: true,
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'U.S. Navy / National Archives',
    credit: 'Victor Jorgensen, 14 August 1945. U.S. Navy, National Archives 80-G-377094. Public domain.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kissing_the_War_Goodbye.jpg',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/vj-day.jpg',
      alt: 'A sailor bends a woman in a white dress backwards into a kiss in a crowded Times Square.',
    },
  ],
  look: 'Times Square, New York. 14 August 1945.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first.',
    options: [],
  },
  context: [
    'Two photographers were standing a few metres apart. The famous version was taken by Alfred Eisenstaedt for Life magazine; this one was taken at the same moment by a Navy photographer. Neither of them asked for names.',
    'For decades the picture was described as a kiss between a sailor and his girlfriend. They did not know each other. Greta Zimmer Friedman, a dental assistant, said later that she was grabbed, and that it was not her choice.',
  ],
  probe: {
    prompt: 'What can this picture prove about the two people in it?',
    note: 'Only what the picture carries. The rest is caption.',
    tools: ['loupe'],
    grade: 'options',
    options: [
      {
        key: 'posture',
        text: 'That a man in uniform is kissing a woman in Times Square that day — and nothing about their relationship.',
        correct: true,
      },
      { key: 'strangers', text: 'That they do not know each other.' },
      { key: 'couple', text: 'That they are a couple.' },
      { key: 'consent', text: 'That she wanted to be kissed.' },
    ],
  },
  reveal: {
    correct:
      'Yes. A picture can show a position, and nothing more. Strangers, sweethearts, willing, unwilling: none of that is in the frame.',
    incorrect:
      'The picture cannot show that they are strangers, that they are a couple, or that she agreed. It shows two people in a street on one day. Everything else came from captions.',
    extra: 'Two photographers, two pictures, one moment — and eighty years of a story that neither of them wrote.',
  },
  andYet: {
    prompt: 'Neither photographer wrote the love story. Is the picture still responsible for it?',
    canonical:
      'Both men photographed something that happened in public on the day a war ended, and neither of them wrote the love story. That was added by readers over many years.',
  },
  principle: {
    canonical:
      'A photograph records a position, not a relationship. When a caption adds consent, the picture is being asked to prove something it cannot.',
    verdict: 'unresolved',
  },
  teacherNotes:
    "Sensitivity: discussion. Friedman's account belongs in the room, but keep the analytical question in front — what the frame can and cannot establish.",
};
