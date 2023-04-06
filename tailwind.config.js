const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', ...fontFamily.sans],
        bodoni: ['var(--font-bodoni)', ...fontFamily.sans],
        syncopate: ['var(--font-syncopate)', ...fontFamily.sans],
        jamjuree: ['var(--font-jamjuree)', ...fontFamily.sans],
      },
      colors: {
        black: '#464646',
      },
    },
  },
  plugins: [],
};
