module.exports = {
  rules: {
    // auto-fixable: Enforce a convention in module import order - we enforce https://www.bigbinary.com/react-best-practices/sort-import-statements
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        warnOnUnassignedImports: true,
        // Ignore react imports so that they're always ordered to the top of the file.
        pathGroupsExcludedImportTypes: ["react", "react-native"],
      },
    ],
  },
};
