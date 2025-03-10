/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [ // TODO: À la fin du projet, enlever de safelist tout ce qui ne sert à rien
    {pattern: /(bg|text|border|fill|ml|translate-x)-./},
    'justify-around',
  ],
  theme: {
    colors: {
      'black': '#181818',
      'blue': '#AFCBEB',
      'blue-dark': '#4A9CD6',
      'blue-darker': '#0431FA',
      'blue-light': '#9CDCDA',
      'brown-light': '#B79770',
      'brown': '#800000',
      'gray': '#404040',
      'gray-dark': '#2D2D2D', 
      'gray-darker': '#1F1F1F', 
      'gray-light': '#6E7681',
      'gray-lighter': '#C0C0C0',
      'green': '#B5D6C3',
      'green-dark': '#6A993E',
      'orange': '#F5B895',
      'orange-code': '#E2C06F',
      'orange-dark': '#CE915B',
      'pink': '#F8C8DC',
      'purple': '#CDB4DB',
      'red': '#CC3300',
      'red-dark': '#E50000',
      'white': '#FAF3E0',
      'white-real': '#FFFFFF',
      'yellow': '#FBE7A1',
      'yellow-dark': '#F1D700'
    },
    extend: {
      keyframes: {
        vibrate: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-2px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        vibrate: 'vibrate 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
