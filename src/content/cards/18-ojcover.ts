import type { Card } from '../types';

export const ojcover: Card = {
  id: 'ojcover',
  ref: '18',
  unit: 4,
  unitLabel: 'Unit 4',
  title: 'The Time O.J. cover, 1994',
  lens: 'retouched',
  tier: 'extended',
  ratio: 960 / 1270,
  sensitivity: 'none',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Time Inc.',
    credit:
      'Matt Mahurin photo-illustration of a Los Angeles Police Department booking photograph. Time, 27 June 1994.',
    sourceUrl: 'https://en.wikipedia.org/wiki/O._J._Simpson_murder_case',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A police booking photograph of O.J. Simpson on a magazine cover, the face darkened and shadowed, beside the same photograph printed unaltered on a rival cover.',
    },
  ],
  look: 'Two news-stand covers of the same police photograph. 27 June 1994.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first.',
    options: [],
  },
  context: [
    "After O.J. Simpson's arrest, the police released his booking photograph. Newsweek printed it as received. Time commissioned an artist, Matt Mahurin, who darkened the face, deepened the stubble and shadows, and blurred the background. A small credit read 'photo-illustration'.",
    'The two covers sat side by side on every news-stand in America. The accusation came within days: Time had made a Black defendant look darker, and darker meant — in the visual language the cover drew on — more guilty. The managing editor published an explanation and regretted the offence.',
  ],
  probe: {
    prompt: "Set the two covers side by side. What did Time's version change?",
    note: 'The source record shows both covers.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'tone',
        text: 'The darkness of the face and the depth of the shadows — the man, and nothing about the case.',
        correct: true,
      },
      { key: 'eyes', text: 'The direction of his eyes.' },
      { key: 'number', text: 'The booking number was invented.' },
      { key: 'size', text: 'His face was enlarged to fill the frame.' },
    ],
  },
  reveal: {
    correct:
      'Yes. Same photograph, same day, two covers. One printed the record; one darkened the man in it. The alteration carried a meaning nobody had to write down.',
    incorrect:
      'The eyes, the number and the framing match — it is the same record. What changed is tone: the face darkened, the shadows deepened. The alteration carried a meaning nobody had to write down.',
    extra:
      "Time labelled it a photo-illustration, in small type, and the label was accurate. It did not matter. On a news-stand, next to Newsweek, it read as the same police record telling a darker story.",
  },
  andYet: {
    prompt: 'Magazine covers have always been illustration, and Time said what it had done. What more was owed?',
    canonical:
      'Covers are posters, not news pages, and using an artist on one is a century-old practice that Time disclosed. The failure was not the technique but its direction — on a story already saturated with race, using a document readers trust as neutral record, every choice pushed one way.',
  },
  principle: {
    canonical:
      'A label does not neutralise an edit. When an altered image sits where records are expected, it reads as record — and an edit that darkens a defendant is an argument about guilt, whoever signs it.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'The A/B pair does the work: have students study both covers via the link before any discussion. The racial reading is not an add-on to the analysis; it is the content of the edit.',
};
