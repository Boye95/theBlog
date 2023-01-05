/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      ham: { max: "900px" },
      // => @media (max-width: 900px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      lexical: { max: "600px" },
      // => @media (max-width: 600px) { ... }

      xs: { max: "400px" },
      // => @media (max-width: 400px) { ... }
    },
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
      },
      // backgroundImage: {
      //   moon: "url('/src/assets/moon.jpg')",
      //   sun: "url('/src/assets/sun.jpg')",
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
};


