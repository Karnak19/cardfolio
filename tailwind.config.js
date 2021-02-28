module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      height: { '100v': '100vh' },
      width: { '100v': '100vw' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
