/* eslint-disable no-undef */
const path = require("path");

module.exports = () => {
  return {
    verbose: true,
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
      "^@bigbinary/neetoui/(.*)$": path.resolve(__dirname, "$1"),
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@babel|react-router-nav-prompt|@bigbinary/neeto-icons|rc-picker|rc-util))",
    ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest-setup.js"],
    collectCoverageFrom: ["lib/**/*.js"],
  };
};
