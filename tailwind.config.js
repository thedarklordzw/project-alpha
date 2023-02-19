/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/index.html', './src/**/*.{html,js,ts}'],
  theme: {
    fontFamily: {
      display: ['Playfair Display', 'sans'],
      sans: ['Rajdhani', 'sans-serif'],
    },

    screens: {
      xxl: {
        max: '1536px',
      },

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1060px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '850px' },
      // => @media (max-width: 850px) { ... }

      sm: { max: '650px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
