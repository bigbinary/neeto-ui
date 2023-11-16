const defaultConfig = require("@bigbinary/neeto-commons-frontend/configs/nanos/eslint/index.js");
const { mergeDeepLeft } = require("ramda");

module.exports = mergeDeepLeft(
  {
    extends: [...defaultConfig.extends, "plugin:storybook/recommended"],
    rules: {
      "@bigbinary/neeto/neetocommons-tips": "off",
      "@bigbinary/neeto/no-blacklisted-imports": "off",
      "@bigbinary/neeto/no-dangling-constants": "off",
      "@bigbinary/neeto/prefix-neeto-ui-import-alias": "off",
      "@bigbinary/neeto/no-missing-localization": "off",
      "import/extensions": [
        "error",
        "never",
        { pattern: { mdx: "always" } },
      ]
    },
  },
  defaultConfig
);
