/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['Bellefair'],
        barlow: ['Barlow Condensed'],
      },
      colors: {
        dark: '#0B0D17',
        'light-blue': '#D0D6F9',
        white: '#FFFFFF',
        stroke: '#484B54',
        hover: '#979797',
      },
      backgroundImage: {
        'home-lg': "url('/src/assets/home/background-home-desktop.jpg')",
        'destination-lg':
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        'crew-lg': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'technology-lg':
          "url('/src/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
