const path = require("path");

module.exports = {
  staticDirs: ["./public"],
  core: {
    builder: "webpack5",
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-postcss",
    "@storybook/addon-docs",
    "storybook-addon-designs",
    "@storybook/addon-console",
    "storybook-dark-mode",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@bigbinary/neetoui": path.resolve(__dirname, ".."),
    };

    return config;
  },
};
