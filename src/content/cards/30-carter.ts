import type { Card } from '../types';

export const carter: Card = {
  id: 'carter',
  ref: '30',
  unit: 7,
  unitLabel: 'Unit 7 · gated',
  title: 'The vulture and the child, 1993',
  lens: 'miscaptioned',
  tier: 'gated',
  ratio: 960 / 640,
  sensitivity: 'graphic',
  rights: {
    status: 'link-out',
    display: 'link',
    holder: 'Kevin Carter estate / Sygma',
    credit: 'Kevin Carter, near Ayod, southern Sudan, March 1993. Pulitzer Prize for Feature Photography, 1994.',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Vulture_and_the_Little_Girl',
  },
  assets: [
    {
      label: 'plate',
      src: '',
      alt: 'A starving toddler has collapsed forward on bare ground, head down. A few metres behind, a vulture stands watching. The photograph is distressing and is not displayed here.',
    },
  ],
  look: 'Scrubland near a feeding centre at Ayod, southern Sudan. March 1993.',
  lookIntro:
    'In 1993 southern Sudan was suffering both war and famine. Aid agencies flew journalists in on their food flights, so the world would see the crisis and send help. The South African photographer Kevin Carter came in on one of those flights.',
  commit: {
    prompt: 'Which lens applies to this photograph?',
    note: 'The famous reading of this picture is not in the picture. Name the mechanism.',
    options: [],
  },
  context: [
    'Kevin Carter flew in with other journalists on a UN food flight during the famine. Near the feeding centre he photographed a collapsed child with a vulture standing behind. The New York Times ran it; readers by the hundred demanded to know what happened to the girl; the paper published an unusual editors\' note saying she had resumed her walk to the centre, fate unknown.',
    "Carter won the Pulitzer. He was also pilloried — 'why didn't he help her?' — and fifteen months after taking the frame, under many pressures, he took his own life.",
    'In 2011, investigators located the family. The child was a boy, Kong Nyong, and he survived the famine. His parents had been metres away, collecting food from the aircraft. The vulture had been drawn by the food drop.',
  ],
  probe: {
    prompt: 'What did readers conclude that the frame never showed?',
    note: 'List what is actually inside the frame, then subtract it from the famous story.',
    tools: [],
    grade: 'options',
    options: [
      {
        key: 'alone',
        text: 'That the child had been abandoned to die — the parents were metres away, at a food drop the caption never mentioned.',
        correct: true,
      },
      { key: 'famine', text: 'That there was a famine in Sudan.' },
      { key: 'vulture', text: 'That a vulture was present.' },
      { key: 'place', text: 'That the photograph was taken in Africa.' },
    ],
  },
  reveal: {
    correct:
      "Yes. The frame holds a child, a bird and bare ground. 'Abandoned', 'dying', 'stalked' — the story that horrified the world was assembled by readers from what the tight frame left out: an aid station, a food drop, parents within earshot.",
    incorrect:
      'The famine, the vulture and the place are all real and all in the frame. What is not in the frame is abandonment: the parents were metres away, at a food drop the caption never mentioned, and the child survived.',
    extra:
      "Eighteen years later the child had a name, Kong Nyong, and a survival the world never heard about. The most-asked question in the paper's history — what happened to her? — was about someone who did not exist quite as described.",
  },
  andYet: {
    prompt: "Carter was destroyed by a question — why didn't he help her? — built on facts that were never in the frame. What is his defence?",
    canonical:
      'He was one of a planeload of journalists at a supervised food drop, photographing exactly what he had been flown there to show, under instructions not to touch the sick. The parents were present. The famine his frame made real to millions was not a misreading — it was the point.',
  },
  principle: {
    canonical:
      'A tight frame plus a horrified reader will write a story no one photographed. What the caption omits — the aid station, the parents, the survival — is not detail; it is the difference between a record and an accusation.',
    verdict: 'unresolved',
  },
  teacherNotes:
    "Handle with care: students may know how Carter died. Keep the analytical question on the caption and the frame; the biography is context, not evidence. The 2011 investigation that found Kong Nyong's family is worth reading aloud.",
};
