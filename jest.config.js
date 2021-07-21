module.exports = () => {
  return {
    verbose: true,
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@babel|react-router-nav-prompt))",
    ],
    testEnvironment: "jsdom",
  };
};
