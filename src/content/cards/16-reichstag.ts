import type { Card } from '../types';
import { wm } from '../sources';

export const reichstag: Card = {
  id: 'reichstag',
  ref: '16',
  unit: 4,
  unitLabel: 'Unit 4',
  title: 'Raising a flag over the Reichstag, 1945',
  lens: 'retouched',
  tier: 'core',
  ratio: 960 / 693,
  sensitivity: 'none',
  lensRetrieval: true,
  rights: {
    status: 'embed',
    display: 'embed',
    holder: 'Wikimedia Commons',
    credit: 'Yevgeny Khaldei, 2 May 1945, Berlin. Reproduced from Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Raising_a_flag_over_the_Reichstag.jpg',
  },
  assets: [
    {
      label: 'plate',
      src: wm('Raising a flag over the Reichstag.jpg'),
      alt: 'A soldier swings a Soviet flag from the parapet of the Reichstag roof, above a smoking city.',
    },
  ],
  look: 'The roof of the Reichstag, Berlin. 2 May 1945.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism before you are told what was done.',
    options: [],
  },
  context: [
    'Khaldei arrived after the fighting on the roof was over. He brought a flag sewn from tablecloths and arranged the scene with soldiers he found there. He took about three dozen photographs.',
    'Before the picture was published, it was worked on by hand: the smoke over the city was made darker, and one object was removed from the wrist of the soldier holding up the flag-bearer.',
  ],
  probe: {
    prompt: "One object was removed from the supporting soldier's wrist before publication. What was it?",
    note: 'The loupe is on. Look at the wrists and at the skyline.',
    tools: ['loupe'],
    grade: 'options',
    options: [
      { key: 'watch', text: 'A second wristwatch, which would suggest stealing.', correct: true },
      { key: 'rifle', text: 'A rifle on his back.' },
      { key: 'flag', text: 'A second, smaller flag.' },
      { key: 'band', text: 'An armband with a unit number.' },
    ],
  },
  reveal: {
    correct:
      'Yes. A second watch on the same arm was painted out, and the smoke over the city was darkened at the same time.',
    incorrect:
      'Not the rifle, the flag or the armband. A second wristwatch on the same arm was painted out, because it would have suggested stealing — and the smoke over the city was darkened as well.',
    extra:
      'Two edits on one picture. One changes the weather. The other changes what the soldiers were doing up there.',
  },
  andYet: {
    prompt: 'The Reichstag really did fall. Does that make the retouching acceptable?',
    canonical:
      'The Reichstag really did fall, and these were soldiers who had fought for it. The retouching removed a suggestion, not a fact about the battle. Photographers on every side were doing at least this much, and his editor would have done it for him.',
  },
  principle: {
    canonical:
      'Removing a detail because of what people would think about it is an edit to the story, not to the mood. The smoke changes the weather; the watch changes the account.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'The two edits on one print are the teaching object. Ask which of them they would have signed off, and what the difference is.',
};
