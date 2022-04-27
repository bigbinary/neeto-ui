module.exports = () => {
  return {
    verbose: true,
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@babel|react-router-nav-prompt|@bigbinary/neeto-icons|rc-picker|rc-util))",
    ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest-setup.js"],
    collectCoverageFrom: ["lib/**/*.js"],
  };
};
