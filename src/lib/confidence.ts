export const confWord = (v: number): string =>
  v < 20 ? 'a guess' : v < 40 ? 'a hunch' : v < 60 ? 'fairly sure' : v < 80 ? 'confident' : 'certain';
