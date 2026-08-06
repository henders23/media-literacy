import type { Card } from '../types';

export const gardner: Card = {
  id: 'gardner',
  ref: '28',
  unit: 7,
  unitLabel: 'Unit 7 · gated',
  title: 'Home of a Rebel Sharpshooter, 1863',
  lens: 'staged',
  tier: 'gated',
  ratio: 960 / 720,
  sensitivity: 'graphic',
  rights: {
    status: 'public-domain',
    display: 'link',
    holder: 'Library of Congress',
    credit:
      "Alexander Gardner, 'Home of a Rebel Sharpshooter', Gettysburg, July 1863. Library of Congress. Public domain.",
    sourceUrl: 'https://en.wikipedia.org/wiki/Alexander_Gardner_(photographer)',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A dead Confederate soldier lies in a stone-walled den among boulders, his face turned toward the camera, a rifle propped upright against the wall. The photograph is distressing and is not displayed here.',
    },
  ],
  look: "Devil's Den, the battlefield at Gettysburg, Pennsylvania. About 6 July 1863.",
  lookIntro:
    "In July 1863 the two armies of the American Civil War met at Gettysburg, the largest battle of the war. About fifty thousand men were killed or wounded in three days. Photography was still new, and the public had never seen what a battlefield looked like afterwards. Alexander Gardner's team arrived while the dead were still being buried.",
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'You arrive with the full kit. Name the mechanism.',
    options: [],
  },
  context: [
    "Gardner's team reached the field days after the battle, while burial parties worked. They photographed a dead young soldier where he lay — and then, as the historian William Frassanito established in 1975, carried the body some seventy yards to a stone-walled position between boulders, turned the face toward the camera, and leaned a rifle against the wall.",
    "The rifle was a prop that appears in other Gardner scenes; sharpshooters did not use that type. Gardner's album text supplied a story: a sharpshooter's den, a lingering death, dying thoughts of home. The same man appears in the album twice, in two places, as two different soldiers.",
  ],
  probe: {
    prompt: 'Frassanito proved the staging in 1975, from the pictures alone. What made the proof possible?',
    note: 'The evidence is in the published frames themselves.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'same',
        text: 'The same body — same face, same clothing — photographed in two different places.',
        correct: true,
      },
      { key: 'rifle', text: "The rifle's serial number." },
      { key: 'blood', text: 'The absence of blood at the wall.' },
      { key: 'angle', text: "The sun's angle between frames." },
    ],
  },
  reveal: {
    correct:
      'Yes. Gardner published the same dead man twice, in two locations, as two soldiers. A century later, laying the frames side by side was enough to convict the caption.',
    incorrect:
      'No serial number resolves at that distance, and blood and sun prove little on a four-day-old field. The proof is identity: the same face and clothing, published twice, in two places, as two different men.',
    extra:
      "The dead man was real and the battle was real. The 'sharpshooter's home' — the picture's whole story — was written afterwards, over a body moved to fit it.",
  },
  andYet: {
    prompt: 'Photography is twenty-four years old, no rules for photographing war exist, and the bodies are being buried as he works. What is Gardner’s defence?',
    canonical:
      'No one had photographed a battlefield before there were any rules for doing it. Gardner understood himself to be composing a memorial, as painters of history had always done — except that his dead were real, and about to disappear into graves. He arranged, as he saw it, so that the war could be seen at all.',
  },
  principle: {
    canonical:
      'Moving a body to improve a story is where arrangement stops being authorship — the dead cannot consent to the caption written over them. The seriousness of the subject raises, not lowers, the duty of the frame.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'Opens the gated unit: full vocabulary assumed, so keep the mechanism brief and let the ethics take the room. Fenton moved iron; Gardner moved a man. Students should articulate why that difference is the whole unit.',
};
