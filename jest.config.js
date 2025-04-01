const path = require("path");

module.exports = () => ({
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^@bigbinary/neetoui/(.*)$": path.resolve(__dirname, "src", "$1"),
    "^(@bigbinary/neeto-icons|neetoicons)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/icons/index.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/logos$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/logos/index.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/app-icons$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/app-icons/index.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/typeface-logos$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/typeface-logos/index.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/misc$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/misc/index.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/logos/(.*)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/logos/$2.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/app-icons/(.*)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/app-icons/$2.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/typeface-logos/(.*)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/typeface-logos/$2.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/misc/(.*)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/misc/$2.js"
    ),
    "^(@bigbinary/neeto-icons|neetoicons)/(.*)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-icons/dist/cjs/icons/$2.js"
    ),
    "^(@bigbinary/neeto-cist|neetocist)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-cist/index.mjs"
    ),
    "^(@bigbinary/neeto-cist|neetocist)/(.*)$": path.resolve(
      __dirname,
      "node_modules/@bigbinary/neeto-cist/$2.js"
    ),
    "^atoms/(.*)$": path.resolve(__dirname, "src/atoms", "$1"),
    "^components/(.*)$": path.resolve(__dirname, "src/components", "$1"),
    "^formikcomponents/(.*)$": path.resolve(__dirname, "src/formik", "$1"),
    "^layouts/(.*)$": path.resolve(__dirname, "src/layouts", "$1"),
    "^constants/(.*)$": path.resolve(__dirname, "src/constants", "$1"),
    "^hooks/(.*)$": path.resolve(__dirname, "src/hooks", "$1"),
    "^managers/(.*)$": path.resolve(__dirname, "src/hooks", "$1"),
    "^utils/(.*)$": path.resolve(__dirname, "src/utils", "$1"),
    "^src/(.*)$": path.resolve(__dirname, "src", "$1"),
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@babel|@bigbinary/neeto-icons|rc-picker|rc-util|@bigbinary/neeto-cist))",
  ],
  transform: { "^.+\\.m?jsx?$": "babel-jest" },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest-setup.js"],
  collectCoverageFrom: ["src/**/*.js"],
});
