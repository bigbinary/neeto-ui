module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: [
      "./lib/**/*.js",
      "./lib/**/**/*.js",
      "./lib/**/**/**/*.js",
      "./lib/*.js",
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    options: {
      safelist: [
        'bg-gray-100',
        'bg-red-100',
        'bg-yellow-100',
        'bg-green-100',
        'bg-blue-100',
        'bg-indigo-100',
        'bg-purple-100',
        'bg-pink-100',
        'text-gray-800',
        'text-red-800',
        'text-yellow-800',
        'text-green-800',
        'text-blue-800',
        'text-indigo-800',
        'text-purple-800',
        'text-pink-800',
      ]
    }
  },
  theme: {
    extend: {
      spacing: {
        1.5: "0.375rem",
        2.5: "0.625rem",
        4.5: "1.125rem",
        5: "1.25rem",
        10: "2.5rem",
        18: "4.5rem",
        36: "8.5rem",
        140: "35rem",
        180: "45rem",
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
          900: "#192040",
        },
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      },
      zIndex: {
        1: 1,
      },
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus"],
    boxShadow: ["responsive", "hover", "focus"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    color: ["responsive", "hover", "focus", "active"],
    margin: ["last"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
