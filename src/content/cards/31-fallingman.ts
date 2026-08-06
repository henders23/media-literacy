import type { Card } from '../types';

export const fallingman: Card = {
  id: 'fallingman',
  ref: '31',
  unit: 7,
  unitLabel: 'Unit 7 · gated',
  title: 'The Falling Man, 2001',
  lens: 'one-frame-of-many',
  tier: 'gated',
  ratio: 960 / 1300,
  sensitivity: 'graphic',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Associated Press',
    credit: 'Richard Drew, New York, 9:41 a.m., 11 September 2001. Associated Press.',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Falling_Man',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A man falls head-first down the face of the World Trade Center, body vertical and composed, aligned with the tower’s columns. The photograph is distressing and is not displayed here.',
    },
  ],
  look: 'The north tower of the World Trade Center, New York. 9:41 a.m., 11 September 2001.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'The last card of the deck. Name the mechanism.',
    options: [],
  },
  context: [
    'Richard Drew photographed a man falling from the north tower — a sequence of frames in which he tumbles, flails, spins. The published frame is the one exception: for a fraction of a second the body is vertical, head-down, one knee bent, aligned with the columns of the tower. Composed. Almost calm.',
    'It ran in newspapers around the world on September 12. Readers were furious; papers apologised and did not run it again. The man has never been conclusively identified. An estimated one to two hundred people fell or jumped that morning; the official accounts avoided the category altogether.',
  ],
  probe: {
    prompt: "Drew's sequence holds a dozen frames of the same fall. What is true only of the published one?",
    note: 'The source record reproduces the sequence.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'calm',
        text: 'Its composure — vertical, symmetrical, aligned with the tower — held for a fraction of a second in a fall that had none.',
        correct: true,
      },
      { key: 'alone', text: 'That the man is alone in it.' },
      { key: 'sharp', text: 'That it is in focus.' },
      { key: 'time', text: 'That it was taken in the morning.' },
    ],
  },
  reveal: {
    correct:
      'Yes. The other frames show what falling looks like. The chosen frame shows what grace looks like — one-twelfth of a second of accidental order, standing for a death that was all disorder. The choice is the picture.',
    incorrect:
      'He is alone and in focus in every frame, all taken the same minute. What is unique to the published frame is composure: vertical, symmetrical, aligned with the tower — a fraction of a second of accidental order in a fall that had none.',
    extra:
      'Papers that ran it once did not run it again. The man has never been conclusively identified, and the number of people who fell appears in no official count. One frame of one man is most of what remains.',
  },
  andYet: {
    prompt: "Readers said printing it stole a man's last privacy. What is the defence?",
    canonical:
      'A public death on the most photographed morning in history is part of the record, and refusing to print it would not have un-happened it. Drew chose the frame that allowed the man dignity — its composure is the reason anyone can bear to look at all.',
  },
  principle: {
    canonical:
      'When only one frame of a sequence can be looked at, that frame becomes the memory — chosen precisely because it shows the least of what happened. Selection here is not deception; it is mercy doing the same work, and it should say so.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'Last card of the gated unit; Abu Ghraib is the sanctioned substitute where local context makes it preferable. End with the manifest question in reverse: after this unit, do the seven lenses still hold?',
};
