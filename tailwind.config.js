/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        redOrangeLight1: "#f5e7e4",
        redOrangeLight2: "#d19f92",
        redOrange: "#87341a",
        redOrangeDark: "#853420",
      },
    },
  },
  plugins: [],
}

