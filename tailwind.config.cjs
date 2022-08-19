module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'fira': ['Fira Sans', 'Arial', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '830px',
      'lg': '1024px',
      'xl': '1150px',
    }
  },
  plugins: [],
}