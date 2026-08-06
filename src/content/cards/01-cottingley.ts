import type { Card } from '../types';
import { wm } from '../sources';

export const cottingley: Card = {
  id: 'cottingley',
  ref: '01',
  unit: 0,
  unitLabel: 'Unit 0',
  title: 'The Cottingley Fairies, 1917',
  lens: 'staged',
  tier: 'core',
  ratio: 960 / 745,
  sensitivity: 'none',
  rights: {
    status: 'embed',
    display: 'embed',
    holder: 'Wikimedia Commons',
    credit:
      'Elsie Wright, July 1917, Cottingley, Yorkshire. Published in The Strand Magazine, December 1920. Reproduced from Wikimedia Commons.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cottingley_Fairies_1.jpg',
  },
  assets: [
    {
      label: 'plate',
      src: wm('Cottingley Fairies 1.jpg'),
      alt: 'A girl rests her chin on her hand behind a grassy bank. Four winged figures appear to dance in front of her; a small waterfall runs behind.',
    },
  ],
  look: 'A beck behind a garden in Cottingley, Yorkshire, England. July 1917.',
  commit: {
    prompt: 'What do you think this photograph is?',
    note: 'Ungraded, and it stays on the record. It is what you thought before anyone told you anything.',
    options: [
      { key: 'cut', text: 'A girl photographed with paper figures arranged in front of her.' },
      { key: 'double', text: 'Two photographs printed on top of each other.' },
      { key: 'real', text: 'A girl photographed with something unexplained in front of her.' },
      { key: 'cant', text: 'One photograph cannot answer this.' },
    ],
  },
  context: [
    "Elsie Wright, sixteen, and her cousin Frances Griffiths, nine, borrowed Elsie's father's camera for half an hour. He developed the plate, saw the figures, and dismissed it as a prank with 'bits of paper'.",
    'Three years later the photographs reached Sir Arthur Conan Doyle, the creator of Sherlock Holmes, who published them in The Strand Magazine as evidence that fairies were real. Photographic experts examined the plates for double exposure and retouching, and found none.',
    'In 1983 the cousins, by then old women, explained: figures copied from a children\'s book, cut out, and held up with hatpins.',
  ],
  probe: {
    prompt: 'Look at the waterfall behind and the figures in front. What separates them?',
    note: 'The exposure lasted long enough to matter. Use the loupe.',
    tools: ['loupe'],
    grade: 'options',
    options: [
      {
        key: 'sharp',
        text: 'The waterfall is smeared by the long exposure, but the dancing figures are perfectly sharp.',
        correct: true,
      },
      { key: 'glow', text: 'The figures glow with their own light.' },
      { key: 'shadow', text: 'The figures cast shadows in the wrong direction.' },
      { key: 'edge', text: 'The figures have a white cut line around them.' },
    ],
  },
  reveal: {
    correct:
      'Yes. In an exposure long enough to smear falling water into mist, anything dancing would blur. The fairies are the sharpest thing in the frame, because paper holds still.',
    incorrect:
      'No glow, no wrong shadows, no visible cut line — the figures are well made. The tell is the waterfall: an exposure long enough to smear falling water would smear a dancer. The fairies are perfectly sharp, because paper holds still.',
    extra:
      'The experts of the day tested the plates for photographic tricks — double exposure, retouching — and found none, and called the pictures genuine. They were genuine: genuine single exposures of paper figures. The camera was never fooled. The question asked of it was wrong.',
  },
  andYet: {
    prompt: 'Two children played a joke, and grown men turned it into evidence. Who deceived whom?',
    canonical:
      'Elsie and Frances staged a picture the way children stage a game, and never asked the world to believe it. Conan Doyle did that. The photograph only ever said: this stood in front of the lens. The claim about fairies was added by people who wanted it to be true.',
  },
  principle: {
    canonical:
      'A camera records what is arranged in front of it as faithfully as what is found there. Testing the plate for tricks is not the same as testing the claim — the deception was never in the photograph.',
    verdict: 'deceptive',
  },
  teacherNotes:
    'Card 1 sets up the fake-versus-real binary so card 2 can break it. Let students enjoy the debunking — the next card takes the same energy and complicates it.',
};
