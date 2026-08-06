import type { Card } from '../types';

export const afghangirl: Card = {
  id: 'afghangirl',
  ref: '26',
  unit: 6,
  unitLabel: 'Unit 6',
  title: 'Afghan Girl, 1984',
  lens: 'one-frame-of-many',
  tier: 'core',
  ratio: 960 / 1180,
  sensitivity: 'discussion',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'National Geographic / Steve McCurry',
    credit:
      'Steve McCurry, Nasir Bagh refugee camp, Pakistan, December 1984. Cover of National Geographic, June 1985.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Afghan_Girl',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A girl of about twelve in a rust-red headscarf looks directly into the camera, pale green eyes wide, against a sea-green background.',
    },
  ],
  look: 'A tent school in the Nasir Bagh refugee camp, Peshawar, Pakistan. December 1984.',
  lookIntro:
    'After the Soviet Union invaded Afghanistan in 1979, millions of Afghans fled to refugee camps in Pakistan. In 1984 National Geographic sent the photographer Steve McCurry to the camps, to show the crisis to readers far away who had stopped paying attention.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first.',
    options: [],
  },
  context: [
    'Steve McCurry photographed a student of about twelve in a girls\' tent school in a refugee camp. He did not learn her name. The frame became the June 1985 cover and the most recognised photograph in the magazine\'s history.',
    'For eighteen years the world knew the face and not one fact about it. In 2002 a search team identified her by her irises: Sharbat Gula. She had never seen the photograph, and said she had been angry that day — a stranger, a man, had photographed her face without asking.',
    'The image raised millions for refugee causes and stood, for a generation, for a war she never chose to stand for.',
  ],
  probe: {
    prompt: 'For eighteen years the world knew this face and no fact about it. What could the frame itself actually establish?',
    note: 'Strip the caption away and list what remains.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'face',
        text: 'That a girl with green eyes sat before the camera that day — everything else came from outside the frame.',
        correct: true,
      },
      { key: 'refugee', text: 'That she was a refugee.' },
      { key: 'war', text: 'That her family died in the war.' },
      { key: 'fear', text: 'What she felt about being photographed.' },
    ],
  },
  reveal: {
    correct:
      'Yes. Age, name, nation, story, feeling — none of it is in the frame. The most famous photograph in the magazine\'s history was a face with a story readers wrote for it.',
    incorrect:
      'The camp, the war and her feelings are all outside the frame — the background is a plain canvas. What the frame establishes is that a girl with green eyes sat before the camera that day. Everything else, readers supplied.',
    extra:
      'When she was found in 2002, the fact that stuck was her anger. The eyes the world had read as fear, defiance, beauty, war — their owner had been asked about none of it.',
  },
  andYet: {
    prompt: 'The photograph moved the world to fund Afghan refugees for decades. What is the defence?',
    canonical:
      'McCurry photographed a real student in a real camp, within the rules of his era, and the image put a face on a crisis the world was ignoring — the money and attention it raised were real. And it was his magazine that later spent real effort finding her and supporting her.',
  },
  principle: {
    canonical:
      'A portrait proves presence, not consent and not meaning. The more powerful the face, the more story readers pour into it — and the person pays interest on a symbol they never agreed to become.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'Consent is not one of the seven lenses, and students discover that gap here, one card before the capstone names it. Let the discussion go there; the lens system is allowed to have edges.',
};
