/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/index.html', './src/**/*.{html,js,ts}'],
  theme: {
    fontFamily: {
      display: ['Playfair Display', 'sans'],
      sans: ['Rajdhani', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
