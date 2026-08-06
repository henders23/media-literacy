import type { Card } from '../types';

export const pyramids: Card = {
  id: 'pyramids',
  ref: '17',
  unit: 4,
  unitLabel: 'Unit 4',
  title: 'The National Geographic pyramids, 1982',
  lens: 'retouched',
  tier: 'core',
  ratio: 960 / 1250,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'National Geographic Society',
    credit:
      'Gordon Gahan, camel train before the pyramids of Giza. Cover of National Geographic, February 1982.',
    sourceUrl: 'https://en.wikipedia.org/wiki/National_Geographic#Photo_manipulation',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A line of riders on camels passes in front of the pyramids of Giza at dusk, composed tall to fit a magazine cover.',
    },
  ],
  look: 'The pyramids at Giza, Egypt, on a magazine cover dated February 1982.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism before you are told what was done.',
    options: [],
  },
  context: [
    "Gordon Gahan's photograph of a camel train before the pyramids was horizontal. The magazine's cover is vertical. To make it fit, editors used one of the first digital scanning systems to move the pyramids slightly closer together.",
    'The change was tiny, invisible, and admitted when readers asked. An editor famously defended it as "the retroactive repositioning of the photographer" — as if the camera had simply stood a few feet to one side.',
    'It became the founding scandal of digital photo manipulation in journalism, cited ever since. The magazine has since called it a mistake it will not repeat.',
  ],
  probe: {
    prompt: 'The cover crops a horizontal picture to a vertical. What could a crop alone not have done here?',
    note: "The source record explains the edit. The cover itself is one image search away — 'National Geographic February 1982' — which is a skill this deck teaches anyway.",
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'closer',
        text: 'Bring the pyramids closer together — a crop can only discard, and the cover narrows the gap between them.',
        correct: true,
      },
      { key: 'sky', text: 'Remove sky above them.' },
      { key: 'camel', text: 'Cut a camel from the train.' },
      { key: 'tighter', text: 'Tighten in on the riders.' },
    ],
  },
  reveal: {
    correct:
      'Yes. Cropping discards; it cannot compress. To fit the vertical cover, the pyramids were moved toward each other — the geometry of the plateau changed, not the edges of the frame.',
    incorrect:
      'Sky, camels and tightness are all crop work. What a crop cannot do is bring two objects closer together — and on the cover, the pyramids stand closer than the ground ever put them.',
    extra:
      '"The retroactive repositioning of the photographer": the defence is more famous than the edit. It concedes everything — that the frame no longer records where a camera stood.',
  },
  andYet: {
    prompt: 'No fact about Egypt was harmed; the pyramids stand where they always stood. Why did this tiny nudge become the founding scandal?',
    canonical:
      'It was a cover, not a news page, and covers had been painted, montaged and designed for a century. The editors moved nothing in the world, lied about no event, and answered honestly when asked. They solved a layout problem with a new tool — and were the first to discover what the tool would come to mean.',
  },
  principle: {
    canonical:
      'The scandal is not the size of the change but what it dissolves: once geometry can be edited, "the camera stood here" is no longer something a reader can assume. That assumption, not the pyramids, is what moved.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'The dawn of digital manipulation. Contrast with Earthrise: rotation changed no geometry; this did, by a sliver, and the verdict flips. Let students argue about why the size of the edit does not matter.',
};
