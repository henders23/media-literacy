import type { Card } from '../types';

export const marlboro: Card = {
  id: 'marlboro',
  ref: '25',
  unit: 6,
  unitLabel: 'Unit 6',
  title: 'The Marlboro Marine, 2004',
  lens: 'one-frame-of-many',
  tier: 'extended',
  ratio: 960 / 1150,
  sensitivity: 'discussion',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Los Angeles Times',
    credit: 'Luis Sinco, Fallujah, Iraq, 9 November 2004. Los Angeles Times.',
    sourceUrl: 'https://en.wikipedia.org/wiki/James_Blake_Miller',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A young marine after a night of combat: face streaked with mud and blood, eyes distant, a cigarette hanging from his lips.',
    },
  ],
  look: 'A rooftop in Fallujah, Iraq, after a night of fighting. 9 November 2004.',
  lookIntro:
    'In November 2004 American forces fought for the Iraqi city of Fallujah, in some of the heaviest combat of the Iraq war. Photographer Luis Sinco of the Los Angeles Times was embedded with a Marine unit and went through the battle beside the soldiers he photographed.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'Name the mechanism first.',
    options: [],
  },
  context: [
    'Lance Corporal James Blake Miller, twenty, photographed after more than twelve hours of combat. The frame ran in over a hundred and fifty newspapers; television anchors called him the Marlboro Marine; the picture became shorthand for American grit and was talked about for recruitment posters.',
    'Miller came home with severe post-traumatic stress. He was discharged; his marriage collapsed. The photographer, Luis Sinco, stayed in his life for years, photographing the aftermath — pictures almost nobody printed.',
  ],
  probe: {
    prompt: 'What did the papers print this frame as evidence of?',
    note: 'Think about what a face after combat can prove, and what it was used to say.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'symbol',
        text: 'A quality — toughness, determination — that no single picture can prove about a person.',
        correct: true,
      },
      { key: 'battle', text: 'The outcome of the battle.' },
      { key: 'conditions', text: 'Conditions on the front line.' },
      { key: 'age', text: 'The age of the soldiers.' },
    ],
  },
  reveal: {
    correct:
      "Yes. A face after combat proves it was photographed after combat. 'This is what resolve looks like' was the caption's work — and the man behind the face was carrying home something the frame could not show.",
    incorrect:
      "The battle's outcome, the conditions and the ages are all outside this tight frame. What the papers printed it as was a quality — resolve, grit — which no single frame can establish about a person. The man was carrying home something the frame could not show.",
    extra:
      'Sinco did what almost no one does: he followed. His later photographs of Miller — home, ill, a marriage ending — are the rest of the roll, made over years. Almost nobody printed those.',
  },
  andYet: {
    prompt: 'Sinco took one great frame, and the papers made it a poster. Is that his failure?',
    canonical:
      'Sinco photographed what was in front of him, and then stayed with his subject for years, publishing the un-iconic aftermath at his own cost. The failure of follow-up belongs to the hundred and fifty front pages that never ran a second picture.',
  },
  principle: {
    canonical:
      'A face is evidence of a moment, never of a character. When one frame of a person becomes a symbol, the person keeps living past the edge of it — the honest record is the sequence, not the icon.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'Pairs with Afghan Girl: faces made into symbols of wars. The difference here is the photographer’s decades of follow-up — ask what obligations, if any, come with making someone iconic.',
};
