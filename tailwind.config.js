/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        redOrangeLight: "#f5e7e4",
        redOrange: "#87341a",
        redOrangeDark: "#853420",
      },
    },
  },
  plugins: [],
}

