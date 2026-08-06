import type { Card } from '../types';

export const firdos: Card = {
  id: 'firdos',
  ref: '08',
  unit: 2,
  unitLabel: 'Unit 2',
  title: 'Firdos Square, 2003',
  lens: 'cropped',
  tier: 'core',
  ratio: 960 / 640,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Reuters / Getty Images',
    credit:
      'Goran Tomasevic and others, 9 April 2003, Firdos Square, Baghdad. Reuters. Analysis: Peter Maass, "The Toppling", The New Yorker, 2011.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Firdos_Square_statue_destruction',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A bronze statue of Saddam Hussein tilts from its plinth as men pull on ropes. In tight frames the square seems packed; in wide frames it is a half-empty plaza ringed by armoured vehicles.',
    },
  ],
  look: 'Firdos Square, central Baghdad. 9 April 2003.',
  lookIntro:
    "In March 2003 the United States and its allies invaded Iraq to remove the dictator Saddam Hussein. Three weeks later their forces reached Baghdad, the capital. The world's press was based in a hotel beside Firdos Square, in the centre of the city.",
  commit: {
    prompt: 'What do you think this event was?',
    note: 'Ungraded. Answer from whatever version of this picture you carry.',
    options: [
      { key: 'mass', text: "A city's population pulling down its dictator." },
      { key: 'small', text: 'A small crowd at an event managed for the cameras.' },
      { key: 'army', text: 'A military operation with civilians watching.' },
      { key: 'cant', text: 'The frame you were shown decides which of these you saw.' },
    ],
  },
  context: [
    'As Baghdad fell, a statue of Saddam Hussein was pulled down in the square outside the Palestine Hotel — the hotel where the international press was staying. Television carried it live for hours.',
    'The tight frames show Iraqis swinging a sledgehammer, ropes, the statue falling, the head dragged through the street. The wide frames show the rest: a mostly empty square, sealed off by a cordon of U.S. Marines and armoured vehicles, a crowd of at most a few hundred — many of them journalists — and a Marine recovery vehicle doing the actual pulling.',
    'Both sets of frames were made by the same photographers on the same afternoon, and both were on editors’ desks by nightfall.',
  ],
  probe: {
    prompt: 'Between the tight frame and the wide frame, what changes?',
    note: 'Open the source record and compare the close news pictures with the wider views of the square.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'scale',
        text: 'How many people are there — a packed square in one, a guarded, half-empty plaza in the other.',
        correct: true,
      },
      { key: 'statue', text: 'Whether the statue actually falls.' },
      { key: 'place', text: 'Which city the square is in.' },
      { key: 'time', text: 'What time of day it is.' },
    ],
  },
  reveal: {
    correct:
      'Yes. The event is identical; the population of it is not. Tight, it is a nation in a square. Wide, it is a few hundred people, a Marine cordon, and an armoured vehicle doing the pulling.',
    incorrect:
      'The statue falls in every version, in the same city at the same hour. What changes is scale: tight, a nation fills the square; wide, a few hundred people stand inside a Marine cordon while an armoured vehicle does the pulling.',
    extra:
      'Neither framing is doctored. Both are accurate. Editors had both on their desks — and for hours, most of the world was shown one.',
  },
  andYet: {
    prompt: "A photographer's job is to fill the frame with the event. Is shooting tight a deception?",
    canonical:
      'Shooting tight is composition — it is how photography has always brought a viewer close. Every photographer in that square filed wide frames as well; the full record existed by nightfall. The narrowing happened afterwards, at desks choosing the frame that matched the story already being told.',
  },
  principle: {
    canonical:
      'A crop is an argument about scale. When the size of a crowd is the story, the edge of the frame is the claim — and only a wider frame can check it.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'The first crop card with stakes. Loch Ness hid a shoreline; this hid a cordon. Ask who did the deceiving — the photographers who filed both framings, or the desks that chose between them.',
};
