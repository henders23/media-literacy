import type { Card } from '../types';

export const iwojima: Card = {
  id: 'iwojima',
  ref: '06',
  unit: 1,
  unitLabel: 'Unit 1',
  title: 'Raising the flag on Iwo Jima, 1945',
  lens: 'miscaptioned',
  tier: 'core',
  ratio: 960 / 727,
  sensitivity: 'discussion',
  rights: {
    status: 'public-domain',
    display: 'host',
    holder: 'Associated Press',
    credit: 'Joe Rosenthal, 23 February 1945. Associated Press. Public domain in the United States.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima',
  },
  assets: [
    {
      label: 'plate',
      src: '/images/iwo-jima.jpg',
      alt: 'Six marines raise a flag on a pole over churned ground at the summit of Mount Suribachi.',
    },
  ],
  look: 'The summit of Mount Suribachi, Iwo Jima. 23 February 1945.',
  commit: {
    prompt: 'What moment do you think this is?',
    note: 'Ungraded. Answer from the frame and from whatever you already carry about this picture.',
    options: [
      { key: 'first', text: 'The first American flag going up on the summit.' },
      { key: 'second', text: 'A second, larger flag going up hours after the first one.' },
      { key: 'reenact', text: 'A scene acted again for the camera, days later.' },
      { key: 'cant', text: 'The picture cannot tell you which.' },
    ],
  },
  context: [
    'A small flag went up on the summit that morning. It was too small to see from the beaches, so a larger one was carried up a few hours later. Rosenthal arrived as the second flag was going up. He took one photograph very quickly, without looking through the viewfinder, and did not see the result until the film was developed.',
    'Later that day he did pose a group of marines cheering under the flag. That was a different photograph, and he always said it was posed. People have confused the two ever since. The caption sent out with this picture said nothing about a first flag.',
  ],
  probe: {
    prompt: 'Click the part of the picture that shows the summit was already taken.',
    note: 'Not what you believe. What the picture itself shows.',
    tools: ['hotspot'],
    grade: 'hotspot',
    hotspot: { x: 10, y: 56, w: 56, h: 40, label: 'the ground and the figures on it' },
  },
  reveal: {
    correct: 'Yes. The ground is churned up, the men stand upright in the open, and nobody is taking cover.',
    incorrect:
      'The evidence is on the ground: churned earth, men standing upright in the open, nobody taking cover. The summit was already taken. This is the second flag, not the first one.',
    extra:
      'Rosenthal never said it was the first flag. Newspapers said that, because readers want a first time. For fifty years he was accused of faking the photograph he had not faked.',
  },
  andYet: {
    prompt: 'Rosenthal was called a faker for fifty years. He never wrote the caption. Is he to blame?',
    canonical:
      'He photographed something that was really happening, in one exposure, and arranged nothing. He said the same thing about it all his life. The false part was added later, by captions and by readers.',
  },
  principle: {
    canonical:
      'A photograph can be completely true and still carry a false claim, if the caption does not say which of two similar events it shows. The person who writes the caption is responsible.',
    verdict: 'unresolved',
  },
  teacherNotes:
    'Two flags, two photographs, one of them genuinely posed — students conflate all four facts. Draw the four apart on the board before discussion.',
};
