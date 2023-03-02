/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        // brand
        'fgl-primary': '#092147', // Downriver
        'fgl-lime': '#c2d730', // Lime
        'fgl-coconut': '#f2f7d5', // Coconut Cream
        'fgl-valencia': '#db3e4d', // Valencia

        // status
        'fgl-success': '#207f4c', // Eucalyptus
        'fgl-info': '#d1d2d1', // Pumice
        'fgl-warning': '#ffd111', // Candlelight
        'fgl-error': '#cc2200', // Milano
        'fgl-text-color-1': '#2d2e36', // Charade
        'fgl-text-color-2': '#2b333e', // Ebony Clay
        'fgl-text-color-3': '#c8c9c7', // Kangaroo
        'fgl-border-color': '#939597', // Oslo Gray
      },
      fontSize: { caption: '0.64rem' },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {

          'primary': '#092147',

          'secondary': '#C2D730',

          'accent': '#DB3E4D',

          'neutral': '#c8c9c7',

          'base-100': '#2B333E',

          'info': '#d1d2d1',

          'success': '#207f4c',

          'warning': '#ffd111',

          'error': '#cc2200',

        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
