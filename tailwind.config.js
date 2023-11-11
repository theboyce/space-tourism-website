/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['Bellefair'],
        barlow: ['Barlow'],
      },
      colors: {
        dark: '#0B0D17',
        'light-blue': '#D0D6F9',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'home-bg': "url('/src/assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
