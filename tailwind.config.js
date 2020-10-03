const { colors } = require("tailwindcss/defaultTheme");

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
        "18": "4.5rem",
        "34": "8.25rem",
        "36": "8.5rem",
        "140": "35rem",
        "180": "45rem"
      },
      colors: {
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
      minWidth: {
        "5": "1.25rem",
        "10": "2.5rem"
      },
      minHeight: {
        "5": "1.25rem",
        "10": "2.5rem"
      },
      boxShadow: {
        "focus-purple": "0 0 0 3px rgba(84, 105, 212, 0.15)",
        "focus-red": "0 0 0 3px #FED7D7"
      },
      keyframes: {
        "highlight-row": {
          from: { backgroundColor: "#fcfca2" },
          to: { backgroundColor: "#fff" }
        }
      },
      animation: {
        "highlight-row": "highlight-row 2s ease-out",
        "spin-fast": "spin 0.6s linear infinite"
      },
      zIndex: {
        1: 1
      },
      opacity: {
        "10": ".1",
        "20": ".2"
      },
      fontSize: {
        tiny: ".375rem"
      }
    }
  },
  variants: {
    display: ["responsive", "group-hover"],
    borderColor: ["responsive", "hover", "focus", "focus-within"],
    boxShadow: ["responsive", "hover", "focus", "focus-within"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    color: ["responsive", "hover", "focus", "active"]
  },
  plugins: [require("@tailwindcss/ui")]
};
