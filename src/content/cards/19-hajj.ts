import type { Card } from '../types';

export const hajj: Card = {
  id: 'hajj',
  ref: '19',
  unit: 4,
  unitLabel: 'Unit 4',
  title: 'The Reuters smoke, 2006',
  lens: 'retouched',
  tier: 'extended',
  ratio: 960 / 655,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Reuters (withdrawn)',
    credit:
      'Adnan Hajj, smoke over Beirut after an Israeli air strike, 5 August 2006. Withdrawn by Reuters.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Adnan_Hajj_photographs_controversy',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'Thick black smoke rises over a city skyline. Within the smoke, identical curls and identical buildings repeat — the signature of a clone tool.',
    },
  ],
  look: "Beirut under air strike, seen from the city's edge. 5 August 2006.",
  lookIntro:
    'In summer 2006 Israel and the armed group Hezbollah fought a short war in Lebanon. News agencies supplied the world with daily pictures of the bombing. Reuters, one of the largest agencies, used local freelance photographers, among them Adnan Hajj, who had worked for them for years.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first.',
    options: [],
  },
  context: [
    'During the 2006 Lebanon war, Reuters moved a photograph by Adnan Hajj, a long-serving freelance, of smoke rising over Beirut. Within hours, readers comparing it with his earlier take noticed something: the smoke repeated. Identical curls, and identical buildings, appeared more than once in the same frame.',
    'Hajj had used a clone tool to thicken the smoke. A second photograph was found with duplicated flares under an aircraft. Reuters withdrew both, ended the relationship, and removed all 920 of his photographs from its database — then tightened its rules to allow almost no processing at all.',
  ],
  probe: {
    prompt: 'The alteration exposed itself. What gives a cloned area away?',
    note: 'The source record shows the frame with the repeated areas marked.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'repeat',
        text: 'Repetition — identical puffs of smoke, and identical buildings, appearing more than once in one frame.',
        correct: true,
      },
      { key: 'colour', text: 'The smoke is the wrong colour for burning fuel.' },
      { key: 'horizon', text: 'The horizon is tilted.' },
      { key: 'res', text: 'The added areas are at lower resolution.' },
    ],
  },
  reveal: {
    correct:
      'Yes. Nature does not tile. A clone tool copies patches, and copied patches repeat — readers found the same smoke curl and the same building twice, within hours of publication.',
    incorrect:
      'Colour, tilt and resolution are all plausible and all wrong. The tell is repetition: a clone tool copies patches, and nature does not tile. The same curl of smoke and the same building appear twice in the frame.',
    extra:
      'The war was real, the strike was real, the smoke was real. Hajj made real smoke bigger — and it cost the wire not one photograph but every photograph he had ever filed. That is the price of a credit line.',
  },
  andYet: {
    prompt: 'The city really was burning. He thickened smoke that existed. Why did it end a career?',
    canonical:
      'Photographers have darkened skies since the darkroom, and nothing about the event was invented. By the standards of covers or advertising this was a routine touch-up. His misfortune was doing it on a wire photograph, where the unwritten caption reads: exactly what the sensor recorded.',
  },
  principle: {
    canonical:
      'A wire photograph carries an implicit caption — nothing added, nothing removed. Break it once, invisibly, and every frame you ever filed becomes suspect. The penalty is not for the smoke; it is for the signature.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'Good on institutions: the unit of trust is the wire service, not the photograph. Ask why Reuters pulled all 920 images when only two were altered — students should arrive at "because nobody could any longer say which".',
};
