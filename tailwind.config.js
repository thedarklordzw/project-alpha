/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/index.html', './src/**/*.{html,js,ts}'],
  theme: {
    fontFamily: {
      serif: ['Playfair Display', 'sans'],
      sans: ['Bebas Neue', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
