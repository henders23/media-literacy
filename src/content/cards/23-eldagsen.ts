import type { Card } from '../types';

export const eldagsen: Card = {
  id: 'eldagsen',
  ref: '23',
  unit: 5,
  unitLabel: 'Unit 5',
  title: 'Pseudomnesia: The Electrician, 2023',
  lens: 'no-referent',
  tier: 'core',
  ratio: 960 / 1200,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Boris Eldagsen',
    credit:
      "Boris Eldagsen, 'Pseudomnesia: The Electrician', 2022. Generated with AI tools; entered and refused at the Sony World Photography Awards, 2023.",
    sourceUrl: 'https://www.eldagsen.com/pseudomnesia/',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'What appears to be a 1940s studio portrait: two women, one standing behind the other with hands on her shoulders, in soft period lighting. No camera ever recorded it.',
    },
  ],
  look: 'Two women, in what appears to be a portrait from the 1940s. Exhibited 2023.',
  lookIntro:
    'By 2023, artificial intelligence tools could produce images from a written description in seconds. Photography competitions had not yet decided how to deal with them. Boris Eldagsen, a German artist who had worked in photography for thirty years, entered the Sony World Photography Awards.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first.',
    options: [],
  },
  context: [
    'Boris Eldagsen, a photographer of thirty years, entered this image in the creative category of the Sony World Photography Awards. It won. At the ceremony he refused the prize and explained: the image was generated with AI tools. Nothing in it had ever stood before a lens.',
    'He said he had entered as "a cheeky monkey" — to test whether the world\'s photography competitions were ready for what was coming. By his account and the organisers\', they were not.',
    'The image imitates the surface of a period photograph: the grain, the lighting, the pose. It has no negative, no sitting, no sitters.',
  ],
  probe: {
    prompt: 'Nothing in this image ever stood before a lens. What is the strongest sign of that inside the frame itself?',
    note: 'Open it from the source record and look closely at the bodies.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'anatomy',
        text: 'The bodies — hands, eyes and clothing go slightly wrong, because the system predicts what pictures look like instead of recording real things.',
        correct: true,
      },
      { key: 'grain', text: 'Film grain from the wrong decade.' },
      { key: 'light', text: 'Studio light from an impossible angle.' },
      { key: 'border', text: 'A print border that is machine-perfect.' },
    ],
  },
  reveal: {
    correct:
      'Yes. A camera records objects; these systems predict what pictures look like. Where prediction runs out — fingers, eyes, the seams of a garment — the surface stays plausible while the object quietly stops making sense.',
    incorrect:
      'The grain, light and border are all convincingly imitated — surfaces are what these systems do best. The failure is in the objects: hands, eyes and clothing drift wrong, because nothing is being recorded, only predicted.',
    extra:
      'The judges gave it a photography award. Eldagsen stood up, declined it, and told them why. He had entered, he said, to find out whether the competitions were ready. They were not.',
  },
  andYet: {
    prompt: 'He deceived the judges on purpose. What is the defence?',
    canonical:
      'He entered under a category for creative work, refused the prize the moment it was won, and kept nothing but the question. A hoax that unmasks itself at the podium is closer to an experiment than a fraud — and photography needed the result.',
  },
  principle: {
    canonical:
      "When an image can be generated, 'this looks photographic' stops being evidence that anything happened. The question 'was something in front of a lens?' now has to be asked; it can no longer be assumed.",
    verdict: 'deceptive',
  },
  teacherNotes:
    "The deck's only born-digital card. Connect it back to Cottingley: the same structure a century apart — the plate was genuine, the referent was not. Ask what the 2023 equivalent of the sharp waterfall is.",
};
