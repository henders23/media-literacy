import type { Card } from '../types';

export const fallingsoldier: Card = {
  id: 'fallingsoldier',
  ref: '21',
  unit: 5,
  unitLabel: 'Unit 5',
  title: 'The Falling Soldier, 1936',
  lens: 'no-referent',
  tier: 'core',
  ratio: 960 / 650,
  sensitivity: 'discussion',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'International Center of Photography / Magnum Photos',
    credit:
      'Robert Capa, published in Vu, 23 September 1936. © International Center of Photography / Magnum Photos.',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Falling_Soldier',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A militiaman in shirtsleeves falls backwards on a bare hillside, arms flung out, his rifle slipping from his right hand.',
    },
  ],
  look: 'A hillside said to be near Cerro Muriano, on the Córdoba front, Spain. 5 September 1936.',
  lookIntro:
    "In 1936 civil war broke out in Spain between the elected government and General Franco's rebels. Young photographers went to cover it with the new small, fast cameras, among them 22-year-old Robert Capa. It was the first war photographed close up, as it happened.",
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism you suspect. Still ungraded.',
    options: [],
  },
  context: [
    'The photograph was published as the death of a Republican militiaman in the instant a bullet found him, and it made the 22-year-old Robert Capa the most famous war photographer alive. The man was later named as Federico Borrell García, who died that day at Cerro Muriano.',
    'Decades on, researchers matched the hillside to a location near Espejo — some fifty kilometres away, where no fighting is recorded on that date. Other frames from the same session show militiamen leaping and aiming on the same quiet slope, apparently for the camera.',
    'The negative is lost. The "Mexican Suitcase" of Capa\'s recovered Spanish negatives does not contain the strip. Capa himself left only brief, shifting secondhand accounts.',
  ],
  probe: {
    prompt: 'What single piece of evidence, if it existed, would settle this photograph?',
    note: 'Think about what each kind of evidence can and cannot rule out.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'sequence',
        text: 'The rest of the roll — the frames before and after this one, in order.',
        correct: true,
      },
      { key: 'caption', text: "A caption in Capa's handwriting." },
      { key: 'witness', text: 'One more witness account.' },
      { key: 'print', text: 'A sharper print.' },
    ],
  },
  reveal: {
    correct:
      'Yes. Frames in sequence would show what the slope was doing around this second — men falling under fire, or men performing for a camera. The negative strip is exactly what the archive does not hold.',
    incorrect:
      'Captions can be written later, witnesses have contradicted each other for ninety years, and no print is sharp enough to show a bullet. Only the roll in sequence could settle it — and the strip is exactly what the archive does not hold.',
    extra:
      'The hillside has been matched to a place with no recorded fighting that day; the man has been named as a militiaman who died that day fifty kilometres away. Both findings have serious defenders. Nothing inside the frame can choose between them.',
  },
  andYet: {
    prompt: 'If it was performed, it was performed by men who were dying that year, in that war. What can be said for Capa?',
    canonical:
      'Every account agrees the men were real militiamen on a real front of a real war, photographed by a young man who spent the rest of his life walking toward gunfire and died doing it. If the camera caught a performance that afternoon, the war around it was not one.',
  },
  principle: {
    canonical:
      "A photograph's claim to record a death rests entirely on evidence outside the frame. When the negatives, the witnesses and the ground disagree, the honest verdict is that there is no verdict.",
    verdict: 'unresolved',
  },
  teacherNotes:
    'The first card whose answer is genuinely unknown, and students will resist that. Do not resolve it for them; the discipline of leaving it open is the lesson of the unit.',
};
