const defaultConfig = require("@bigbinary/neeto-commons-frontend/configs/babel.js");
const { mergeDeepLeft } = require("ramda");

module.exports = api => {
  const commonConfig = defaultConfig(api);
  const projectConfig = {
    plugins: [
      ...commonConfig.plugins,
      ["import", { libraryName: "antd", libraryDirectory: "lib" }],
    ],
  };

  return mergeDeepLeft(projectConfig, commonConfig);
};
