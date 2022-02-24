const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      gold: "#ef9d10f",
      darkBlue: "#3b4d61",
      brown: "#322514",
      blue: colors.blue,
      slate: colors.slate,
      red: colors.red,
      rose: colors.rose,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1020px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "2xlx": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xlx: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lgx: { max: "1020px" },
      // => @media (max-width: 1023px) { ... }

      mdx: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      smx: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
