/* eslint-disable no-undef */
const path = require("path");

module.exports = () => {
  return {
    verbose: true,
    moduleDirectories: ["node_modules", "lib"],
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
      "^@bigbinary/neetoui/(.*)$": path.resolve(__dirname, "lib", "$1"),
      "@bigbinary/neeto-icons/logos": path.resolve(
        __dirname,
        "node_modules/@bigbinary/neeto-icons/dist/neeto-logos.js"
      ),
      "@bigbinary/neeto-icons/app-icons": path.resolve(
        __dirname,
        "node_modules/@bigbinary/neeto-icons/dist/app-icons.js"
      ),
      "^atoms/(.*)$": path.resolve(__dirname, "lib/atoms", "$1"),
      "^components/(.*)$": path.resolve(__dirname, "lib/components", "$1"),
      "^constants/(.*)$": path.resolve(__dirname, "lib/constants", "$1"),
      "^hooks/(.*)$": path.resolve(__dirname, "lib/hooks", "$1"),
      "^utils/(.*)$": path.resolve(__dirname, "lib/utils", "$1"),
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@babel|react-router-nav-prompt|@bigbinary/neeto-icons|rc-picker|rc-util))",
    ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest-setup.js"],
    collectCoverageFrom: ["lib/**/*.js"],
  };
};
