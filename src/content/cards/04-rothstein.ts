import type { Card } from '../types';

export const rothstein: Card = {
  id: 'rothstein',
  ref: '04',
  unit: 1,
  unitLabel: 'Unit 1',
  title: 'The steer skull, 1936',
  lens: 'staged',
  tier: 'core',
  ratio: 1280 / 1262,
  sensitivity: 'none',
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'Library of Congress',
    credit:
      'Arthur Rothstein, May 1936, Pennington County, South Dakota. Farm Security Administration collection, Library of Congress. Public domain.',
    sourceUrl: 'https://www.loc.gov/pictures/search/?q=bleached%20skull%20of%20a%20steer',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/rothstein-steer-skull.jpg',
      alt: 'A bleached steer skull lies on cracked, sun-baked earth, its shadow hard beside it.',
    },
  ],
  look: 'Rangeland in Pennington County, South Dakota. May 1936.',
  commit: {
    prompt: 'What do you think this photograph shows?',
    note: 'Ungraded. Answer from the frame described, before anyone tells you its history.',
    options: [
      { key: 'found', text: 'A skull photographed where the drought left it.' },
      { key: 'moved', text: 'A skull the photographer repositioned for the picture.' },
      { key: 'prop', text: 'A studio prop carried out for the assignment.' },
      { key: 'cant', text: 'One frame cannot tell you.' },
    ],
  },
  context: [
    'Rothstein was twenty-one, photographing the drought for the Farm Security Administration — a government agency making the case for New Deal relief. He found a bleached steer skull on the range and made at least five exposures, moving it a few metres between grass and cracked alkali flat, trying the light. Every frame went into the same public archive.',
    'That August, in an election year, Republican newspapers found the variant frames and ran them under one word: fake. If the skull was moved, they argued, the drought pictures were propaganda — and so was the relief program.',
    'The drought was real. That summer was among the worst ever recorded on the northern plains.',
  ],
  probe: {
    prompt: 'Five frames of this skull survive in the same archive. What in them shows the object was moved?',
    note: 'This is the cracked-earth frame. Open the archive from the source record and compare it with the others.',
    tools: ['loupe'],
    grade: 'options',
    options: [
      {
        key: 'ground',
        text: 'The same skull — same cracks, same horns — sits on cracked earth in one frame and on grass in another.',
        correct: true,
      },
      { key: 'shadow', text: 'The shadows fall in different directions.' },
      { key: 'paint', text: 'Brush marks show the skull was whitened.' },
      { key: 'wires', text: 'A wire props up the horns in two frames.' },
    ],
  },
  reveal: {
    correct:
      'Yes. One skull, one afternoon, two grounds. The archive itself carries the evidence, because Rothstein filed every frame.',
    incorrect:
      'No paint, no wires — and the shadows only show time passing. The proof is the ground: the same skull, with the same cracks, on cracked earth in one frame and on grass in another. The archive carries the evidence because Rothstein filed every frame.',
    extra:
      'The cattle really died and the ground really cracked. But the cracked-earth frame said "this is where death happens", and that ground was chosen, a few metres from where the skull lay. In an election year, a few metres was enough to put every government photograph under suspicion.',
  },
  andYet: {
    prompt: 'He moved a skull ten feet on empty rangeland, for better light. Is that different from choosing where to stand?',
    canonical:
      'Every photographer chooses light and ground, and no caption promised the skull was untouched. Rothstein was making a symbol of a real drought, not inventing one — and he filed all five frames where anyone could find them. What he did not reckon with was how much weight one frame would be asked to carry.',
  },
  principle: {
    canonical:
      'An arranged symbol of a true thing is still an arrangement, and it hands your opponents the whole archive. The moment a photograph is used as proof, how it was made becomes part of the claim.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'Pairs with Fenton: both moved objects in a real landscape. The new element is the archive — the frames that expose him are the frames he filed. Ask whether filing them makes him more honest, or just less careful.',
};
