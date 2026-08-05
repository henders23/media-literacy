import type { Card } from '../types';

export const migrantmother: Card = {
  id: 'migrantmother',
  ref: '27',
  unit: 6,
  unitLabel: 'Unit 6 · capstone',
  title: 'Migrant Mother, 1936',
  lens: 'one-frame-of-many',
  tier: 'core',
  ratio: 960 / 1248,
  sensitivity: 'discussion',
  lensRetrieval: true,
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'Library of Congress',
    credit:
      'Dorothea Lange, March 1936. Farm Security Administration collection, Library of Congress, LC-DIG-fsa-8b29516. Public domain.',
    sourceUrl: 'https://www.loc.gov/pictures/item/2017762891/',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/migrant-mother.jpg',
      alt: 'A woman looks past the camera, hand at her chin. Two children lean into her shoulders, faces turned away.',
    },
  ],
  look: "A pea-pickers' camp beside the highway at Nipomo, California. March 1936.",
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'The capstone. Every mechanism in the deck is available to you here.',
    options: [],
  },
  context: [
    'Lange stopped for about ten minutes and took six photographs, moving closer each time. This is the last one. The others show the shelter, an older daughter, and a baby feeding. In the negative of this frame there was a thumb holding the tent pole at the bottom right. It was removed before publication.',
    'The caption sent out with it said: very poor pea pickers in California, a mother of seven children, aged thirty-two. Florence Owens Thompson was thirty-two and her children were with her. She said later that she had been told the pictures would not be published, and she never received a copy.',
  ],
  probe: {
    prompt: 'The caption says pea pickers. What in this picture supports that?',
    note: 'Use the crop handles. Cut the frame down to whatever really shows evidence.',
    tools: ['crop'],
    grade: 'options',
    options: [
      {
        key: 'nothing',
        text: 'Nothing. There is no field, no crop, no work and no camp in the picture.',
        correct: true,
      },
      { key: 'clothes', text: 'Their clothes show farm work.' },
      { key: 'tent', text: 'The canvas behind them shows a workers\' camp.' },
      { key: 'faces', text: "The children's faces show hunger." },
    ],
  },
  reveal: {
    correct:
      'Yes. A woman, three children and a piece of canvas. Pea pickers, seven children, thirty-two years old, California, March: all of that comes from outside the picture.',
    incorrect:
      'Crop it down and look. No field, no crop, no work, no camp — a woman, three children and canvas. Every fact in that caption comes from outside the picture.',
    extra:
      'This is not an accusation. It is what photographs are. The picture carries what things looked like; words carry everything else. The other five frames from those ten minutes are in the same public archive.',
  },
  andYet: {
    prompt:
      'This photograph brought government food to that camp within days. Does that outweigh a caption she could not support?',
    canonical:
      'She was paid to make the case for food aid, and she made it in ten minutes, with her name on the picture. The frame she chose is the one that worked — and the other five are in the same public archive, so anyone can check her choice. Very few photographers make that possible.',
  },
  principle: {
    canonical:
      'Every published photograph is one choice out of frames you never see. A picture cannot say "this happened". It can say "this is what I chose, and here is what I chose it from".',
    verdict: 'unresolved',
  },
  teacherNotes:
    "Capstone. Ask which of the six frames they would have wired, then what their own crop asserts. Thompson's later objection belongs here: consent is not one of the seven lenses, and this is where students notice the gap.",
};
