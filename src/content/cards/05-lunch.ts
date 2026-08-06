import type { Card } from '../types';

export const lunch: Card = {
  id: 'lunch',
  ref: '05',
  unit: 1,
  unitLabel: 'Unit 1',
  title: 'Lunch atop a Skyscraper, 1932',
  lens: 'staged',
  tier: 'core',
  ratio: 960 / 741,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Bettmann Archive / Getty Images',
    credit:
      'Photographer disputed, 29 September 1932. Rockefeller Center construction publicity. © Bettmann Archive / Getty Images.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Lunch_atop_a_Skyscraper',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'Eleven men sit in a row along a steel beam high above New York City, eating lunch, all facing the camera.',
    },
  ],
  look: 'The steel frame of the RCA Building, Rockefeller Center, New York. 29 September 1932.',
  lookIntro:
    'In 1932 New York kept building upward even in the middle of the Great Depression. The men who built the skyscrapers — many of them immigrants — worked at great heights without safety ropes. The new Rockefeller Center hired photographers to make pictures that would keep the project in the newspapers.',
  commit: {
    prompt: 'What do you think is happening in this photograph?',
    note: 'Ungraded. Say what you take it to be.',
    options: [
      { key: 'break', text: 'Steel workers having their lunch break, photographed as they were.' },
      { key: 'pr', text: 'A publicity photograph arranged during building work.' },
      { key: 'composite', text: 'Two photographs joined together: men in a studio, the beam on site.' },
      { key: 'cant', text: 'The picture cannot tell you which.' },
    ],
  },
  context: [
    'The men are real steel workers and the beam really is on the sixty-ninth floor of a building under construction. The height is not faked, and men did eat lunch up there.',
    "The pictures were taken for the building's publicity campaign. Other photographs from the same afternoon survive, including one of the same men lying asleep on the beam. Nobody is sure who took them.",
  ],
  probe: {
    prompt: 'Look along the beam. What in the picture suggests it was arranged?',
    note: 'Open the photograph from the source record and look along the beam.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'row',
        text: 'The men sit evenly along the beam, all facing the same way, and nobody is working.',
        correct: true,
      },
      { key: 'harness', text: 'They are wearing safety belts that have been painted out.' },
      { key: 'sky', text: 'The sky behind them is a painted background.' },
      { key: 'shadow', text: 'The shadows on the beam fall in two different directions.' },
    ],
  },
  reveal: {
    correct: 'Yes. An even row, one direction, nobody working. That is an arrangement, not a lunch break.',
    incorrect:
      'There are no safety belts, no painted background and no strange shadows. The men sit in an even row, all facing one way, and nobody is working. That is an arrangement.',
    extra: 'The height, the beam and the men are exactly as true as they look. Only the moment was arranged.',
  },
  andYet: {
    prompt: 'The men really did work at that height. Does that make the arranged photograph fair?',
    canonical:
      'These men worked at that height every day with no safety equipment, and the picture showed that to millions of people who would never go up there. Arranging a lunch break is not inventing one, and nobody was told anything false about the job.',
  },
  principle: {
    canonical:
      'The men and the height are real; the moment is not. Printed without saying that it was made for a publicity campaign, the picture pretends to be something it never was.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'Good early pairing with Fenton: both arrange, neither invents. Ask what a caption would have to say for this to be honest.',
};
