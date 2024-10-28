import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
import path from "path";
import { mergeDeepLeft } from "ramda";

import commonResolve from "@bigbinary/neeto-commons-frontend/configs/nanos/webpack/resolve.js";
import projectResolve from "../resolve.js";

const rootResolve = mergeDeepLeft(projectResolve, commonResolve);

const config = {
  staticDirs: ["./public"],

  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-console",
    "storybook-dark-mode",
  ],

  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(js|jsx|mjs|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    });

    // Add MDX loader configuration
    // config.module.rules.push({
    //   test: /\.mdx?$/,
    //   use: [
    //     {
    //       loader: '@mdx-js/loader',
    //       options: {}
    //     }
    //   ]
    // });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...rootResolve.alias,
          src: path.resolve(__dirname, "..", "src"),
          "@bigbinary/neetoui": path.resolve(__dirname, "..", "src"),
        },
        extensions: [
          ...(config.resolve.extensions || []),
          ".js",
          ".jsx",
          ".mdx",
          ".ts",
          ".tsx",
        ],
      },
      plugins: [
        ...config.plugins,
        new MonacoWebpackPlugin({
          languages: ["javascript"],
        }),
      ],
    };
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

export default config;
