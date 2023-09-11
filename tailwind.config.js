/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue,css,scss}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'emerald',
      'pastel',
      'wireframe',
      'acid',
      'lemonade',
      'winter',
      'bumblebee',
      'autumn',
      'cupcake',
      'valentine',
      'dark',
      'dracula',
      'night',
      'synthwave',
      'halloween',
      'forest',
      'luxury',
    ],
  },
}
