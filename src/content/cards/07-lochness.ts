import type { Card } from '../types';

export const lochness: Card = {
  id: 'lochness',
  ref: '07',
  unit: 2,
  unitLabel: 'Unit 2',
  title: "The surgeon's photograph, Loch Ness, 1934",
  lens: 'cropped',
  tier: 'extended',
  ratio: 960 / 720,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Associated Newspapers',
    credit:
      'Attributed to Robert Kenneth Wilson, published in the Daily Mail, 21 April 1934. © Associated Newspapers.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Loch_Ness_Monster',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A small dark head and neck rise from rippled water. Nothing else is in the frame — no shore, no boat, nothing of known size.',
    },
  ],
  look: 'Loch Ness, Scotland. Published 21 April 1934.',
  lookIntro:
    'Loch Ness is a deep lake in Scotland. In 1933 a new road opened along its shore, and stories of a monster in the water began to spread. Newspapers competed for proof. In April 1934 the Daily Mail published a photograph supplied by a respected London doctor.',
  commit: {
    prompt: 'What is in this photograph?',
    note: 'Ungraded. Answer from the frame you can see.',
    options: [
      { key: 'large', text: 'A large animal, some distance from the camera.' },
      { key: 'small', text: 'A small object, close to the camera.' },
      { key: 'retouch', text: 'A picture that has been altered by hand.' },
      { key: 'cant', text: 'Nothing in the picture tells you the size.' },
    ],
  },
  context: [
    'The Daily Mail published it as "the surgeon\'s photograph", on the word of a London doctor who did not want his name attached to the creature. The version that spread is a tight crop of a much wider picture.',
    'In 1994 Christian Spurling explained how the object was made: a model head and neck fixed to a toy submarine, about thirty centimetres high, floated near the shore.',
  ],
  probe: {
    prompt: 'Imagine the crop pulled wider. What is missing that would tell you the size?',
    note: 'Open the photograph from the source record. The answer is something that is not there — name it.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'scale',
        text: 'Anything of known size — a shore, a boat, a bird — to compare it with.',
        correct: true,
      },
      { key: 'colour', text: 'Colour, to separate the object from the water.' },
      { key: 'focus', text: 'Sharper focus on the object.' },
      { key: 'second', text: 'A second photograph from another angle.' },
    ],
  },
  reveal: {
    correct:
      'Yes. Water gives you no sense of size. With no shore and no known object in the frame, a small model and a large animal make the same picture.',
    incorrect:
      'Colour, focus and another angle would not help. Water gives you no sense of size: with nothing of known size in the frame, a thirty-centimetre model and a ten-metre animal look the same.',
    extra:
      'The wider picture included the shore. The crop that made this photograph famous is the crop that removed the only way of checking it.',
  },
  andYet: {
    prompt: 'In 1934 there was no way to test a print. Was the newspaper wrong to publish it?',
    canonical:
      'They published what they had, with the name of a respected man behind it, at a time when there was no way to test a print. Cutting a picture tighter is something every newspaper does.',
  },
  principle: {
    canonical:
      'A picture with nothing of known size in it cannot prove how big something is. Cropping that out changes nothing inside the picture; it removes the one thing that would have let a reader check it.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'Students want to talk about the hoax. Keep them on the crop: the hoax needed the crop to work, and the same crop logic runs through Firdos Square and Che.',
};
