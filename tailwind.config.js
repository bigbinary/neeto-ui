module.exports = {
  prefix: "tw-",
  purge: {
    enabled: process.env.TAILWIND_ENV === "production" ? true : false,
    content: [
      "./lib/**/*.js",
      "./lib/**/**/*.js",
      "./lib/**/**/**/*.js",
      "./lib/*.js",
      "./example/**/*.js",
      "./example/**/**/*.js",
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    options: {
      safelist: ["tw-flex", "tw-space-x-6", "tw-gap-8", "tw-p-4"],
    },
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
        orange: {
          100: "#FFEDD5",
          800: "#9A3412",
        },
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      },
      zIndex: {
        1: 1,
      },
      screens: {
        sm: "768px",
        md: "991px",
      },
    },
  },
  variants: {
    borderColor: ["hover"],
    boxShadow: ["hover"],
    backgroundColor: ["hover", "active"],
    color: ["hover", "active"],
    margin: ["last"],
    outline: ["focus"],
  },
};
