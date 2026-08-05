import type { Card } from '../types';

export const sitroom: Card = {
  id: 'sitroom',
  ref: '11',
  unit: 2,
  unitLabel: 'Unit 2',
  title: 'The Situation Room, 2011',
  lens: 'cropped',
  tier: 'core',
  ratio: 960 / 640,
  sensitivity: 'none',
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'The White House',
    credit: 'Pete Souza, 1 May 2011. Official White House photograph. Public domain.',
    sourceUrl: 'https://www.flickr.com/photos/whitehouse/5680724572',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/situation-room.jpg',
      alt: 'Thirteen people crowd a small conference room, watching something out of frame. Papers lie on the table.',
    },
  ],
  look: 'A conference room in the West Wing of the White House, Washington. 1 May 2011.',
  commit: {
    prompt: 'What do you think you are looking at?',
    note: 'Ungraded. Say what you take the picture to be.',
    options: [
      { key: 'sitroom', text: 'The Situation Room, during the raid.' },
      { key: 'side', text: 'A small room next door to it, during the raid.' },
      { key: 'posed', text: 'A picture arranged after the operation was over.' },
      { key: 'cant', text: 'The picture cannot tell you which room this is.' },
    ],
  },
  context: [
    'This is not the Situation Room. It is a small meeting room next to it, about seven metres by five. Souza took about a hundred photographs from the doorway over about forty minutes.',
    'Before the picture was released, the White House blurred a document on the table. Later, two newspapers in Brooklyn removed Hillary Clinton and Audrey Tomasello from the picture before printing it, and then apologised.',
  ],
  probe: {
    prompt: 'Use the loupe. Which of these can you actually find in the picture?',
    note: 'One of these is really there. The other three come from films.',
    tools: ['loupe'],
    grade: 'options',
    options: [
      { key: 'doc', text: 'A document on the table with the writing blurred out.', correct: true },
      { key: 'feed', text: 'A television showing live pictures of the compound.' },
      { key: 'map', text: 'A map of Abbottabad on the wall.' },
      { key: 'phone', text: 'A red telephone.' },
    ],
  },
  reveal: {
    correct:
      'Yes. A document on the table is blurred on purpose, and the White House said so when it released the picture.',
    incorrect:
      'There is no live feed, no wall map and no red telephone. There is a document on the table with the writing blurred out, and the White House said it had done this.',
    extra:
      'So this picture has two edits. One hid secret information, and was explained. The other removed two women, and was not explained until readers noticed.',
  },
  andYet: {
    prompt: 'Two edits happened here: a blur, and a crop that removed two people. What can be said for the first one?',
    canonical:
      'The blur took secret information out of a picture that could not have been released at all without it, and the White House said what it had done. Nobody was removed, and nothing about the room was changed.',
  },
  principle: {
    canonical:
      'Hiding information to protect a secret and removing a person are both edits. Only one of them changes who was in the room, and only one of them was explained.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'Useful for separating redaction from falsification. Both are subtraction; only one is dishonest, and the difference is disclosure plus what is being subtracted.',
};
