/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#760EFF',
        'header1': '#1C112A',
        'header2': '#463857',
        'header3': '#312343',
        'body1': '#695C7A',
        'body2': '#554865',

      }
    },
  },
  plugins: [],
}
