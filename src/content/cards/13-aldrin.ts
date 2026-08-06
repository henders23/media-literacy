import type { Card } from '../types';

export const aldrin: Card = {
  id: 'aldrin',
  ref: '13',
  unit: 3,
  unitLabel: 'Unit 3',
  title: 'Aldrin on the Moon, 1969',
  lens: 'miscaptioned',
  tier: 'core',
  ratio: 960 / 966,
  sensitivity: 'none',
  lensRetrieval: true,
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'NASA',
    credit: 'Neil Armstrong, 20 July 1969. NASA AS11-40-5903. Public domain.',
    sourceUrl: 'https://www.nasa.gov/image-article/aldrin-looks-back-tranquility-base/',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/aldrin.jpg',
      alt: 'An astronaut stands on the lunar surface facing the camera. The gold visor reflects the photographer and the lunar module.',
    },
  ],
  look: 'The Sea of Tranquility, the Moon. 20 July 1969.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'On this plate, beat two asks you to name the mechanism. Still ungraded.',
    options: [],
  },
  context: [
    'Armstrong carried the only camera on the surface. So nearly every photograph of a person standing on the Moon is a photograph of Aldrin, taken by Armstrong.',
    'This picture has been captioned "Armstrong on the Moon" in newspapers, posters and school books for decades. Armstrong is in it — but not where the caption says.',
  ],
  probe: {
    prompt: 'Click the only part of this picture that shows the other astronaut.',
    note: 'The loupe is on. It magnifies 3.4 times.',
    tools: ['loupe', 'hotspot'],
    grade: 'hotspot',
    hotspot: { x: 32, y: 12, w: 36, h: 28, label: 'the gold visor' },
  },
  reveal: {
    correct:
      'Yes. Armstrong is reflected in the gold visor, camera at his chest, with the lunar module beside him. The man standing in the suit is Aldrin.',
    incorrect:
      'Armstrong is in the picture — reflected in the gold visor, with the camera at his chest. The man standing in the suit is Aldrin. Use the loupe on the visor.',
    extra:
      'The caption is the only thing that names anyone in this picture, and for fifty years it has often been wrong.',
  },
  andYet: {
    prompt: 'The two suits look identical. Is a wrong name under a photograph a small mistake or a false claim?',
    canonical:
      "The two suits look the same, and the name people remember is the name of the first man on the Moon. NASA's own name for the picture is only a number. The mistake is careless rather than planned — but it is still false, and it was printed for fifty years by people who could have checked.",
  },
  principle: {
    canonical:
      'A caption is a claim, and it borrows the authority of the photograph above it. When the picture cannot show who someone is, the caption is the only evidence — so it has to be checked.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'Lens retrieval switches on at this card. Expect students to reach for staged, because the Moon invites it. Ask what in the frame would support staged, and let the question do the work.',
};
