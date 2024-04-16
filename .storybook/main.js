const path = require("path");
const { mergeDeepLeft } = require("ramda");

const commonResolve = require("@bigbinary/neeto-commons-frontend/configs/nanos/webpack/resolve.js");
const projectResolve = require("../resolve.js");
const rootResolve = mergeDeepLeft(projectResolve, commonResolve);

module.exports = {
  staticDirs: ["./public"],

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
    config.resolve = {
      extensions: [".js", ".jsx", ".svg", ".scss"],
      alias: {
        ...config.resolve.alias,
        ...rootResolve.alias,
        "@bigbinary/neetoui": path.resolve(__dirname, "..", "src"),
      },
    };

    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
