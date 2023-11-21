/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },

    extend: {
      fontFamily: {
        bellefair: ['Bellefair'],
        barlow: ['Barlow Condensed'],
        'barlow-regular': ['Barlow'],
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
        'home-md': "url('/src/assets/home/background-home-tablet.jpg')",
        'home-sm': "url('/src/assets/home/background-home-mobile.jpg')",
        'destination-lg':
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        'destination-md':
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        'destination-sm':
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        'crew-lg': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crew-md': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'crew-sm': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'technology-lg':
          "url('/src/assets/technology/background-technology-desktop.jpg')",
        'technology-lg':
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        'technology-lg':
          "url('/src/assets/technology/background-technology-mobiile.jpg')",
      },
    },
  },
  plugins: [],
};
