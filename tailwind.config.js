module.exports = {
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
      safelist: ["flex", "space-x-6", "gap-8", "p-4"],
    },
  },
};
