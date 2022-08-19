/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nylarge: ["NY-ExtraLarge", "sans-serif"],
        nymedium: ["NY-Medium", "sans-serif"],
        nysmall: ["NY-Small", "sans-serif"],
        sfmono: ["SF-Mono", "serif"],
        sfprod: ["SF-Prodisplay", "serif"],
        sfproth: ["SFProText-Heavy", "serif"],
        sfprotr: ["SFProText-Regular", "serif"],
        zeit: ["Zeit-Light", "sans-serif"],
      }
    },
  },
  plugins: [],
}
