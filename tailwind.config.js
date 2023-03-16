module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: [
      "./src/**/*.js",
      "./src/**/**/*.js",
      "./src/**/**/**/*.js",
      "./src/*.js",
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};
