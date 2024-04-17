const path = require("path");

module.exports = () => ({
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "styles/*": "identity-obj-proxy",
    "^@bigbinary/neetoui/(.*)$": path.resolve(__dirname, "src", "$1"),
    "neetoicons/logos": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/neeto-logos.js"
    ),
    "neetoicons/app-icons": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/app-icons.js"
    ),
    neetoicons: path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/neeto-icons.js"
    ),
    neetocist: path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-cist/index.cjs.js"
    ),
    "^atoms/(.*)$": path.resolve(__dirname, "src/atoms", "$1"),
    "^components/(.*)$": path.resolve(__dirname, "src/components", "$1"),
    "^formikcomponents/(.*)$": path.resolve(__dirname, "src/formik", "$1"),
    "^layouts/(.*)$": path.resolve(__dirname, "src/layouts", "$1"),
    "^constants/(.*)$": path.resolve(__dirname, "src/constants", "$1"),
    "^hooks/(.*)$": path.resolve(__dirname, "src/hooks", "$1"),
    "^managers/(.*)$": path.resolve(__dirname, "src/hooks", "$1"),
    "^utils/(.*)$": path.resolve(__dirname, "src/utils", "$1"),
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@babel|@bigbinary/neeto-icons|rc-picker|rc-util))",
    "^.+\\.scss$", // Ignore SCSS files by default
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest-setup.js"],
  collectCoverageFrom: ["src/**/*.js"],
});
