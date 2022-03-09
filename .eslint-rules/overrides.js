module.exports = {
  // Currently we are using this section for excluding certain files from certain rules.
  overrides: [
    {
      files: [".eslintrc.js", "*.json"],
      rules: {
        "import/order": "off",
        "react-hooks/rules-of-hooks": "off",
      },
    },
  ],
};
