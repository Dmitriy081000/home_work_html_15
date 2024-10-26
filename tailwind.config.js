/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      textColor: {
        black: 'black'
      },
      width: {
        '80': '80%'
      },
      screens: {
        'model-m': '320px',
        'model-l': '425px'
      },
    },
  },
  plugins: [],
}

