const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    colors: {
      teal: colors.teal,
      blue: colors.blue,
      gray: colors.gray,
      white: colors.white,
      pink: colors.pink,
      black: colors.black,
      yellow: colors.yellow,
    },
  },
};
