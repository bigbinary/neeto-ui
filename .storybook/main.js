const path = require("path");
const { mergeDeepLeft } = require("ramda");

const commonResolve = require("@bigbinary/neeto-commons-frontend/configs/nanos/webpack/resolve.js");
const projectResolve = require("../resolve.js");
const rootResolve = mergeDeepLeft(projectResolve, commonResolve);

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
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...rootResolve.alias,
      "@bigbinary/neetoui": path.resolve(__dirname, "..", "src"),
    };

    return config;
  },
};
