/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: '#54a59b',
          light: '#a4dbd4',
        },
      },
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
  daisyui: {
    themes: false,
  },
};
