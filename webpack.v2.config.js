const HtmlWebPackPlugin = require("html-webpack-plugin");
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./lib/v2/index.js",
    layouts: "./lib/v2/layouts/index.js",
    formik: "./lib/v2/formik/index.js",
  },
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: "raw-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "example")],
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-classname-prefix-loader?prefix=tw",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "lib")],
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-classname-prefix-loader?prefix=v2",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.v2.config.js"),
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    path: __dirname + "/v2",
    filename: "[name].js",
    library: "neetoui",
    libraryTarget: "umd",
  },
  plugins: [new PeerDepsExternalsPlugin()],
};
