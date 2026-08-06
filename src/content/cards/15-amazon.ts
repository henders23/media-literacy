import type { Card } from '../types';

export const amazon: Card = {
  id: 'amazon',
  ref: '15',
  unit: 3,
  unitLabel: 'Unit 3',
  title: 'The Amazon fires, 2019',
  lens: 'wrong-context',
  tier: 'core',
  ratio: 960 / 640,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Estate of Loren McIntyre / various agencies',
    credit:
      'Photographer Loren McIntyre, date unknown — before 2003. Circulated worldwide in August 2019 as the burning Amazon.',
    sourceUrl: 'https://www.snopes.com/fact-check/amazon-rainforest-fire-photos/',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A wall of flame and smoke rises over rainforest at dusk, trees silhouetted against orange light.',
    },
  ],
  look: "A rainforest burning. Shared to millions of feeds as 'the Amazon, right now'. August 2019.",
  lookIntro:
    'In August 2019 large fires burned in the Amazon rainforest in Brazil. The story spread quickly around the world, and millions of people — including celebrities and presidents — shared pictures of burning forest online to raise the alarm.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first. Still ungraded.',
    options: [],
  },
  context: [
    'In August 2019, fires in the Brazilian Amazon became world news. Under #PrayForAmazonia, celebrities, athletes and heads of state shared dramatic photographs of burning forest; the most-shared images reached hundreds of millions of people.',
    'The most famous of them was traced — by ordinary users running reverse image searches — to Loren McIntyre, a National Geographic photographer who died in 2003, sixteen years before the fires it was captioned as showing. Others dated from 1989, or showed fires on other continents.',
    'The 2019 fires were real, and serious. The most-shared pictures of them were not pictures of them.',
  ],
  probe: {
    prompt: 'You cannot check this claim from inside the frame. Where is the evidence?',
    note: 'A live exercise: save the image from the source record and put it into a reverse image search. This works on any picture in your feed.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'history',
        text: "In the picture's publication history — the same frame printed years before the fires it now claims to show.",
        correct: true,
      },
      { key: 'smoke', text: 'In the smoke — its pattern shows the year.' },
      { key: 'trees', text: 'In the species of tree burning.' },
      { key: 'exif', text: 'In hidden camera data that survives on social media.' },
    ],
  },
  reveal: {
    correct:
      "Yes. Nothing inside the frame dates it — and platforms strip a photo's hidden data on upload. But a frame has a history outside itself: a reverse search finds this one published long before 2019, by a photographer who had been dead sixteen years.",
    incorrect:
      'Smoke and trees date nothing, and platforms strip hidden camera data on upload. The evidence is outside the frame: a reverse image search finds this photograph published long before 2019, by a photographer who had been dead sixteen years.',
    extra:
      'The fires were real. That is exactly why the wrong picture mattered: every recycled frame handed a ready-made argument to people who wanted the fires to be fake.',
  },
  andYet: {
    prompt: 'The people sharing it wanted to help. Does the good intention change the claim?',
    canonical:
      'Most sharers believed the caption and meant well, and the emergency was real. A borrowed picture of a true crisis is still a false document — but the people who assembled the false document were almost never the ones who took the photograph.',
  },
  principle: {
    canonical:
      'A photograph plus a date is a claim the photograph alone can never support. The test is not in the pixels but in the picture’s history — and anyone with a reverse image search can run it in under a minute.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'The only card that teaches a live, portable skill. Have every student actually run a reverse image search — on this picture, then on one from their own feed — before moving on. Do not cut the exercise for time.',
};
