const defaultConfig = require("@bigbinary/neeto-commons-frontend/configs/nanos/eslint/index.js");
const { mergeDeepLeft } = require("ramda");

module.exports = mergeDeepLeft(
  {
    rules: {
      "@bigbinary/neeto/neetocommons-tips": "off",
      "@bigbinary/neeto/no-blacklisted-imports": "off",
      "@bigbinary/neeto/no-dangling-constants": "off",
      "@bigbinary/neeto/prefix-neeto-ui-import-alias": "off",
      "@bigbinary/neeto/use-webpack-alias": "off",
    },
  },
  defaultConfig
);
