/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gameboy-green-1': '#0f380f',
        'gameboy-green-2': '#306230',
        'gameboy-green-3': '#8bac0f',
        'gameboy-green-4': '#9bbc0f',
      },
      fontFamily: {
        'pokemon': ['PokemonGB', 'monospace'],
      },
    },
  },
  plugins: [],
};
