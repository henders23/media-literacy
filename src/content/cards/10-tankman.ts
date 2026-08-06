import type { Card } from '../types';

export const tankman: Card = {
  id: 'tankman',
  ref: '10',
  unit: 2,
  unitLabel: 'Unit 2',
  title: 'Tank Man, 1989',
  lens: 'cropped',
  tier: 'core',
  ratio: 960 / 640,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Associated Press',
    credit: "Jeff Widener, 5 June 1989, Chang'an Avenue, Beijing. Associated Press.",
    sourceUrl: 'https://en.wikipedia.org/wiki/Tank_Man',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A man in a white shirt, shopping bags in both hands, stands on an empty avenue directly in front of a column of tanks, the lead tank stopped a metre away.',
    },
  ],
  look: "Chang'an Avenue, near Tiananmen Square, Beijing. 5 June 1989.",
  lookIntro:
    'In spring 1989, students and workers filled Tiananmen Square in Beijing to demand political change in China. On 4 June the army cleared the square by force, killing many people. Foreign journalists, kept inside a nearby hotel, could only watch the avenue below from their balconies.',
  commit: {
    prompt: 'What do you think this photograph shows?',
    note: 'Ungraded. Answer from whatever version of this picture you carry.',
    options: [
      { key: 'lone', text: 'One man alone against four tanks.' },
      { key: 'column', text: 'One man in front of a much longer column.' },
      { key: 'crowd', text: 'A protest crowd, mostly out of frame.' },
      { key: 'cant', text: 'The frame cannot tell you what it cut away.' },
    ],
  },
  context: [
    'The morning after the army cleared Tiananmen Square by force, photographers confined to the Beijing Hotel shot from balconies, several hundred metres away, as a column of tanks moved up the avenue.',
    'A man carrying shopping bags stepped into the road and stopped the lead tank. It tried to steer around him; he moved with it; he climbed up and spoke to the crew; he was eventually pulled away by others. He has never been identified.',
    'The famous version is a tight frame: one man, four tanks. Other photographers on the same balconies made wider frames — a column of tanks stretching far up an avenue emptied by the previous day’s killings, with one small figure in front of it.',
  ],
  probe: {
    prompt: 'Put the crop back out. What does the wide frame add to the account?',
    note: 'The source record shows both the close and the wide pictures.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'column',
        text: "The scale — dozens of tanks, on an avenue the army had already emptied.",
        correct: true,
      },
      { key: 'faces', text: "The man's face." },
      { key: 'square', text: 'The square itself, filled with protesters.' },
      { key: 'troops', text: 'Soldiers aiming at the man.' },
    ],
  },
  reveal: {
    correct:
      'Yes. Wide, the picture shows what he stood against: not four tanks but a column, on an avenue cleared by force the day before. The tight frame makes a duel; the wide frame makes a witness statement.',
    incorrect:
      'No frame shows his face, and the square is out of every version. What the wide frame adds is scale: not four tanks but a column of them, on an avenue the army had emptied by force the day before.',
    extra:
      'For once the crop ran toward drama and away from scale in the same move — the wide frame is arguably the more damning document, and it is the tight one the world kept.',
  },
  andYet: {
    prompt: 'The tight crop made one unknown man unforgettable. What is its defence?',
    canonical:
      'The crop removed nothing false: the man, the tanks and the standoff are real and in true proportion. Framing him close is what made a nameless man impossible to forget — and kept alive a memory that a state has spent decades erasing.',
  },
  principle: {
    canonical:
      'The same crop that builds a symbol discards the evidence of scale. Keep the symbol if you keep the contact sheet — the wide frame is where the history lives.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'Completes the crop trio with Loch Ness and Firdos: a crop that hid, a crop that inflated, and a crop that distilled. The verdict is unresolved on purpose — press students to say what one caption line would settle it.',
};
