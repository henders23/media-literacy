import type { Card } from '../types';

export const fenton: Card = {
  id: 'fenton',
  ref: '03',
  unit: 1,
  unitLabel: 'Unit 1',
  title: 'Valley of the Shadow of Death, 1855',
  lens: 'staged',
  tier: 'core',
  ratio: 960 / 735,
  sensitivity: 'none',
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'Library of Congress',
    credit:
      'Roger Fenton, 23 April 1855. Salted paper print. Library of Congress Prints & Photographs Division, Washington. Public domain.',
    sourceUrl: 'https://www.loc.gov/pictures/item/2001697141/',
  },
  assets: [
    {
      label: 'plate a',
      src: '/images/fenton-cannonballs-road.jpg',
      alt: 'A ravine between two rocky hillsides. Cannonballs lie in the ditch and across the road.',
      ratio: 5606 / 4257,
    },
    {
      label: 'plate b',
      src: '/images/fenton-clear-road.jpg',
      alt: 'The same ravine from the same camera position. Cannonballs lie in the ditch; the road is clearer.',
      ratio: 2040 / 1126,
      align: { scale: 1, dx: 0, dy: 0 },
    },
  ],
  look: 'A ravine on the road to Sevastopol, Crimea. 23 April 1855.',
  lookIntro:
    'In 1855 Britain and France were at war with Russia in the Crimea, a peninsula on the Black Sea. Newspapers could not yet print photographs, but people at home were hungry for pictures of the war. A print dealer paid Roger Fenton, one of the first war photographers, to travel there and bring back views to sell.',
  commit: {
    prompt: 'What do you think this photograph shows?',
    note: 'Ungraded, and it stays on the record. It is what you thought before anyone told you anything.',
    options: [
      { key: 'fell', text: 'A road under fire, with the cannonballs where they landed.' },
      { key: 'after', text: 'A valley after the shelling stopped, photographed as it was found.' },
      { key: 'moved', text: 'A valley where the cannonballs were moved before the photograph was taken.' },
      { key: 'cant', text: 'One photograph cannot answer this.' },
    ],
  },
  context: [
    'In 1855 a print dealer sent Fenton to the Crimean War to bring back photographs to sell. He made about 360 of them. Each one had to be coated, exposed and developed inside a horse-drawn van, and each exposure took several seconds.',
    'British soldiers called this valley the valley of death, because Russian guns fired into it. The picture was shown in London later that year as one of a series of views.',
    'Two photographs of this same view survive. Fenton made both on the same day, from the same place.',
  ],
  probe: {
    prompt: 'Switch between the two plates. What is different?',
    note: 'Switch between plate a and plate b, and use the loupe on the road.',
    tools: ['ab', 'loupe'],
    grade: 'options',
    options: [
      { key: 'hill', text: 'Guns have hit the hillside between the two photographs.' },
      {
        key: 'road',
        text: 'In one plate the cannonballs lie in the ditch. In the other they also cover the road.',
        correct: true,
      },
      { key: 'sky', text: 'The sky has been added to one plate.' },
      { key: 'light', text: 'The shadows point in different directions.' },
    ],
  },
  reveal: {
    correct: 'Yes. The place, the camera position and the light stay the same. The cannonballs do not.',
    incorrect:
      'Not that. The place, the camera position and the light stay the same in both plates. The cannonballs do not: in one they lie in the ditch, in the other they also lie on the road.',
    extra:
      'In 2007 the film-maker Errol Morris visited the place and compared the two plates. Small rocks had rolled down the slope between the two exposures, and this shows the order: the plate with cannonballs on the road was made second. Someone moved them there before Fenton took it.',
  },
  andYet: {
    prompt: 'Fenton was selling views, not news. Does that excuse moving the cannonballs?',
    canonical:
      'In 1855 nobody had agreed that a photograph was proof. Cameras were slow, so anything that moved could not be photographed at all. The valley was real and the shelling was real, and the picture was sold as a view, not as news. Fenton moved objects in an empty landscape. He did not invent an event.',
  },
  principle: {
    canonical:
      "Moving objects inside the frame changes what a photograph can prove. The shelling was real, but the cannonballs on the road are Fenton's arrangement — and a viewer cannot see the difference.",
    verdict: 'deceptive',
  },
  teacherNotes:
    'Students often settle on the ditch plate as "the real one". Press on that: choosing the moment to expose is also a choice. The finding is the pair, not either plate on its own.',
};
