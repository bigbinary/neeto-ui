/* eslint-disable no-undef */
const path = require("path");

module.exports = () => {
  return {
    verbose: true,
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
      "^@bigbinary/neetoui/(.*)$": path.resolve(__dirname, "src", "$1"),
      "@bigbinary/neeto-icons/logos": path.resolve(
        __dirname,
        "node_modules/@bigbinary/neeto-icons/dist/neeto-logos.js"
      ),
      "@bigbinary/neeto-icons/app-icons": path.resolve(
        __dirname,
        "node_modules/@bigbinary/neeto-icons/dist/app-icons.js"
      ),
      "^atoms/(.*)$": path.resolve(__dirname, "src/atoms", "$1"),
      "^components/(.*)$": path.resolve(__dirname, "src/components", "$1"),
      "^constants/(.*)$": path.resolve(__dirname, "src/constants", "$1"),
      "^hooks/(.*)$": path.resolve(__dirname, "src/hooks", "$1"),
      "^managers/(.*)$": path.resolve(__dirname, "src/hooks", "$1"),
      "^utils/(.*)$": path.resolve(__dirname, "src/utils", "$1"),
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@babel|@bigbinary/neeto-icons|rc-picker|rc-util))",
    ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest-setup.js"],
    collectCoverageFrom: ["src/**/*.js"],
  };
};
