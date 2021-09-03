const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        allison: ["Allison", "cursive"],
        lobster: ["Lobster", "cursive"],
      },
      colors: {
        noir: {
          100: "#262626",
          500: "#0c0c0c",
          900: "#000000",
        },
        coolgrayplus: {
          100: "#0f1523",
          200: "#0d131f",
          300: "#0b101b",
          400: "#0a0e17",
          500: "#080c13",
          600: "#06090f",
          700: "#05070b",
          800: "#030407",
          900: "#010203",
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
