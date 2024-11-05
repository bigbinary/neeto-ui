import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
import path from "path";
import { mergeDeepLeft } from "ramda";

import commonResolve from "@bigbinary/neeto-commons-frontend/configs/nanos/webpack/resolve.js";
import projectResolve from "../resolve.js";

import remarkGfm from "remark-gfm";

const { alias } = mergeDeepLeft(projectResolve, commonResolve);

const config = {
  staticDirs: ["./public"],

  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  // typescript: {
  //   skipCompiler: true,
  // },

  // typescript: {
  //   reactDocgen: 'react-docgen-typescript',
  //   // reactDocgenTypescriptOptions: {
  //   //   propFilter: {
  //   //     skipPropsWithName: ['children', ...eventProps, ...ariaProps],
  //   //     skipPropsWithoutDoc: true
  //   //   },
  //   //   shouldExtractLiteralValuesFromEnum: true,
  //   //   shouldRemoveUndefinedFromOptional: true
  //   // }
  // },

  addons: [
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-docs",
    "storybook-dark-mode",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     mdxPluginOptions: {
    //       mdxCompileOptions: {
    //         remarkPlugins: [remarkGfm],
    //       },
    //     },
    //   },
    // },
  ],

  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
      // src: path.resolve(__dirname, "..", "src"),
      // "@bigbinary/neetoui": path.resolve(__dirname, "..", "src"),
      "@bigbinary/neetoui": path.resolve(__dirname, "../src/components"),
    };

    // config.resolve.extensions = [
    //   ".js",
    //   ".jsx",
    //   ".mdx",
    //   ".ts",
    //   ".tsx"
    // ];

    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve("crypto-browserify"),
      fs: false,
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      tty: require.resolve("tty-browserify"),
      zlib: require.resolve("browserify-zlib"),
    };

    config.module.rules.find(
      rule => rule.test && rule.test.test(".svg")
    ).exclude = /^(?!.*\.storybook\/).*\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      exclude: __dirname,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });

    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@bigbinary\/neeto-commons-frontend\/initializers/,
      use: { loader: "babel-loader", options: { plugins: ["preval"] } },
    });

    config.module.rules.push({
      test: /\.(js|jsx|mjs|ts|tsx)$/,
      exclude: /node_modules/,
      use: { loader: "babel-loader" },
    });

    // config.resolve.extensions.push(".svg");

    config.plugins = [
      ...config.plugins,
      new MonacoWebpackPlugin({
        languages: ["javascript"],
      }),
    ];

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

export default config;
