module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:json/recommended",
    // uncomment the following lines to enable eslint-rules
    // "./.eslint-rules/imports/order",
    // "./.eslint-rules/overrides",
    // "./.eslint-rules/imports/enforced",
    // "./.eslint-rules/react",
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
    JSX: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // babel-eslint is deprecated now. This is the latest package.
  parser: "@babel/eslint-parser",
  plugins: ["react"],
  rules: {
    indent: [
      "error",
      2,
      {
        ignoredNodes: ["TemplateLiteral"],
      },
    ],
    semi: ["error", "always"],
    "no-console": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/display-name": 0,
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
