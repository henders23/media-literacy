import type { Card } from '../types';

export const pillars: Card = {
  id: 'pillars',
  ref: '20',
  unit: 4,
  unitLabel: 'Unit 4',
  title: 'Pillars of Creation, 1995',
  lens: 'retouched',
  tier: 'extended',
  ratio: 960 / 947,
  sensitivity: 'none',
  lensRetrieval: true,
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'NASA / ESA / STScI',
    credit:
      'NASA, ESA, STScI, J. Hester and P. Scowen (Arizona State University), 1 April 1995. Hubble WFPC2. Public domain.',
    sourceUrl: 'https://hubblesite.org/contents/media/images/1995/44/378-Image.html',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/pillars-of-creation.jpg',
      alt: 'Three towering columns of interstellar gas and dust against a glowing background.',
    },
  ],
  look: 'The Eagle Nebula, M16, about 6,500 light years away. Hubble WFPC2, 1 April 1995.',
  lookIntro:
    "The Hubble Space Telescope was launched in 1990 to photograph space from above the Earth's atmosphere. In 1995 astronomers pointed it at the Eagle Nebula, a huge cloud of gas and dust where new stars are being born, about 6,500 light years away.",
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism before you know what was done.',
    options: [],
  },
  context: [
    "Hubble's camera takes no colour. It records grey images through narrow filters. Each filter lets through the light of one element: oxygen at 502 nanometres, hydrogen at 656, sulphur at 673.",
    'Three grey images are then combined, and each one is given a colour channel. A person decides which filter becomes which colour, and that decision does not follow the order of the wavelengths.',
  ],
  probe: {
    prompt: 'Give each filter the colour channel that the Hubble palette uses.',
    note: 'The picture stays grey until you answer. Three filters, three channels.',
    tools: ['colour'],
    grade: 'colour',
    colourFilters: [
      { id: 'oiii', label: 'O III — oxygen, 502 nm' },
      { id: 'ha', label: 'H-alpha — hydrogen, 656 nm' },
      { id: 'sii', label: 'S II — sulphur, 673 nm' },
    ],
    colourAnswer: { oiii: 'blue', ha: 'green', sii: 'red' },
  },
  reveal: {
    correct:
      'Yes. Sulphur to red, hydrogen to green, oxygen to blue. This spreads three very close wavelengths across the three channels, so you can see the structure.',
    incorrect:
      'The Hubble palette is sulphur to red, hydrogen to green, oxygen to blue. Following the wavelengths would put hydrogen and sulphur almost on top of each other, and the shapes would disappear.',
    extra:
      'Every colour here tells you which element is glowing where. Read like that, the picture is a measurement. Read as a window, it shows a colour that nothing there has.',
  },
  andYet: {
    prompt: 'Nobody could ever see these colours. Is this still a photograph, or is it a chart?',
    canonical:
      'Each colour records which element is glowing where, and the key is published with the image, so any astronomer can read the data back out. This is a chart that happens to be beautiful, not a photograph that has been improved.',
  },
  principle: {
    canonical:
      'Colour that nobody could ever see can still be evidence, as long as the key travels with the picture. Hiding the key would be the deception, not choosing the colours.',
    verdict: 'acceptable',
  },
  teacherNotes:
    'Closes Unit 4. Students have spent four cards learning that editing conceals; this one shows editing carrying information. Ask what would have to change for the same file to become dishonest.',
};
