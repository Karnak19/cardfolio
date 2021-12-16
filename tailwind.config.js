module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: { '100v': '100vh' },
      width: { '100v': '100vw' },
      spacing: {
        30: '7.5rem',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
