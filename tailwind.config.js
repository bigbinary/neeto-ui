module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: [
      "./lib/**/*.js",
      "./lib/**/**/*.js",
      "./lib/**/**/**/*.js",
      "./lib/*.js",
      "./example/**/*.js",
      "./example/**/**/*.js",
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};
