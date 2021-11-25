const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./lib/components/index.js",
    layouts: "./lib/components/layouts/index.js",
    formik: "./lib/components/formik/index.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: "raw-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "lib")],
        use: [
          {
            loader: "babel-loader",
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
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
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
};
