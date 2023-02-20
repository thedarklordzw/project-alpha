/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/index.html', './src/**/*.{html,js,ts}'],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      display: ['Rajdhani', 'sans-serif'],
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

      ssm: { max: '480px' },
      // => @media (max-width: 480px) { ... }

      xssm: {
        max: '410px',
        // => @media (max-width: 410px) { ... }
      },
    },
    extend: {},
  },
  plugins: [],
};
