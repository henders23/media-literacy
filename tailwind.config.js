/** @type {import('tailwindcss').Config} */
// Paper / zine direction ported from the working prototype (reference/Loupe.dc.html).
// github.md records this as the requested visual direction, superseding the
// earlier dark tokens in BUILD.md §3.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#e9e6de',
        sheet: '#f1eee6',
        ink: '#26241f',
        body: '#3b3830',
        soft: '#4a4640',
        muted: '#8a8578',
        dim: '#a9a396',
        faint: '#7d7869',
        line: '#d3cec0',
        hairline: '#ded9cc',
        edge: '#cdc8ba',
        blue: '#2946c8',
        red: '#c0392b',
        green: '#4e7f52',
      },
      fontFamily: {
        mono: ['"Courier Prime"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [],
};
