/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        redOrangeLight1: '#f5e7e4',
        redOrangeLight2: '#d19f92',
        redOrangeLight3: '#c37b63',
        redOrangeLight4: '#e4d1cd',
        redOrange1: '#b88d8b',
        redOrange2: '#87341a',
        redOrangeDark: '#86341e',
      },
    },
  },
  plugins: [],
};
