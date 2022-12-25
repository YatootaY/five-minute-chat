/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        Comfortaa: ['"Comfortaa"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
