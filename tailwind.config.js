const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  purge: [],
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
      spacing: {
        "1.5": "0.375rem",
        "2.5": "0.625rem",
      },
      colors: {
        ...colors,
        purple: {
          50: "#F6F8FD",
          100: "#EEF0FB",
          200: "#D4DAF4",
          300: "#BBC3EE",
          400: "#8796E1",
          500: "#5469D4",
          600: "#4C5FBF",
          700: "#323F7F",
          800: "#262F5F",
          900: "#192040"
        }
      },
      boxShadow: {
        "xs": '0 0 0 1px rgba(0, 0, 0, 0.05)',
        "focus-purple": "0 0 0 3px rgba(84, 105, 212, 0.15)",
        "focus-red": "0 0 0 3px #FED7D7"
      },
      zIndex: {
        1: 1
      },
    }
  },
  variants: {
    display: ["responsive", "group-hover"],
    borderColor: ["responsive", "hover", "focus", "focus-within"],
    boxShadow: ["responsive", "hover", "focus", "focus-within"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    color: ["responsive", "hover", "focus", "active"]
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
};
