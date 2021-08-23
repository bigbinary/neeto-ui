module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:json/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    logger: true,
    module: true,
    process: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
    "no-console": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/display-name": 0,
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
