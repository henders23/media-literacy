import type { Card } from '../types';

export const terrorofwar: Card = {
  id: 'terrorofwar',
  ref: '22',
  unit: 5,
  unitLabel: 'Unit 5',
  title: 'The Terror of War, 1972',
  lens: 'no-referent',
  tier: 'core',
  ratio: 960 / 650,
  sensitivity: 'graphic',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Associated Press',
    credit:
      "'The Terror of War', Trảng Bàng, 8 June 1972. Credited to Nick Út, Associated Press; attribution suspended by World Press Photo, 2025.",
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Terror_of_War',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'Children run down a road away from a wall of smoke; at the centre a badly burned nine-year-old girl runs naked, crying. Soldiers walk behind. The photograph is distressing and is not displayed here.',
    },
  ],
  look: 'Route 1 outside Trảng Bàng, South Vietnam. 8 June 1972.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'You may know this picture. Name the mechanism you think is in play — the answer is stranger than the famous story.',
    options: [],
  },
  context: [
    'After a South Vietnamese napalm strike hit their village, children ran up the road toward the press corps. Nine-year-old Phan Thị Kim Phúc, her clothes burned away, is at the centre of the frame. The photograph won the Pulitzer Prize and World Press Photo of the Year, and newspapers broke their own rules to print it.',
    'For fifty-three years the credit read Nick Út, an AP staff photographer. In 2025, a documentary presented evidence that the frame may have been made by Nguyễn Thành Nghệ, a freelance driver-stringer whose film AP bought that day. World Press Photo suspended its attribution; the AP investigated and found the evidence inconclusive in both directions.',
    'What happened on the road — and to Kim Phúc, who survived and has spoken about it all her life — has never been in doubt.',
  ],
  probe: {
    prompt: 'Fifty years on, which claim about this photograph is actually in dispute?',
    note: 'Separate the claims a photograph carries: event, subject, maker.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'author',
        text: 'Who pressed the shutter — not what happened on the road.',
        correct: true,
      },
      { key: 'event', text: 'Whether the napalm strike happened.' },
      { key: 'girl', text: 'Whether the girl survived.' },
      { key: 'edit', text: 'Whether the image was retouched.' },
    ],
  },
  reveal: {
    correct:
      'Yes. The event is among the best-witnessed of the war — television crews filmed the same minutes. What the archive cannot now prove is which man, standing in that group, made this exposure.',
    incorrect:
      'The strike is documented on film by television crews; Kim Phúc lived, and has testified to it for fifty years; the negative shows no retouching. What is disputed is the byline: which man, in that group of photographers, made this exposure.',
    extra:
      "In 2025 World Press Photo suspended the credit it had carried for fifty-three years, and the AP found the question unanswerable either way. The photograph's power never depended on the byline. The prizes, the fees and a lifetime of honours did.",
  },
  andYet: {
    prompt: 'If the byline is wrong, the wrong man was honoured for half a century. What did the photograph itself never get wrong?',
    canonical:
      'The frame told the truth about what napalm does to children, and it ended arguments that words had not ended. Whoever made it, it was made by a Vietnamese photographer standing yards from the burning — and the girl in it has spent her life confirming what it shows.',
  },
  principle: {
    canonical:
      'Authorship is a claim like any caption, checkable only against records kept at the time. A photograph can be perfectly true about its subject and permanently unsettled about its maker — the two questions must be kept apart.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'The image stays behind the link; the card does not need it. Students who know the picture will want to discuss the napalm — hold the analytical line on authorship, and let the ethics of the image itself wait for the gated unit.',
};
