/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'developer-graph': "url('/img/developer.png')",
      },
      colors: {
        'light-coral': '#F08080',
        'vivid-tangerine': '#F4978E',
        'light-salmon-pink': '#F8AD9D',
        'deep-peach': '#FBC4AB',
        'peach-puff': '#FFDAB9',
        'raisin-black': '#2B2329',
        'black-coffee': '#40283A',
      },
    },
  },
  plugins: [],
}
