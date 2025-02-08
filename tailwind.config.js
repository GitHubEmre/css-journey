/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'text-blue-light',
    'text-blue',
    'text-gray-dark',
    'text-gray-darker',
    'text-gray-light',
    'text-gray-lighter',
    'text-gray',
    'text-green',
    'text-orange-light',
    'text-orange',
    'text-white',
    'text-yellow',
    'bg-gray',
    'bg-green',
    'bg-blue',
    'border-blue',
    'justify-around',
    'ml-8',
    'ml-12'
  ],
  theme: {
    colors: {
      'blue-light': '#9CDCDA',
      'blue': '#4A9CD6',
      'brown-light': '#B79770',
      'gray-dark': '#1F1F1F', 
      'gray-darker': '#181818',
      'gray-light': '#6E7681',
      'gray-lighter': '#C0C0C0',
      'gray': '#404040',
      'green': '#6A993E',
      'orange-light': '#E2C06F',
      'orange': '#CE915B',
      'red': '#CC3300',
      'white': '#FFFFFF',
      'yellow': '#F1D700'
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
