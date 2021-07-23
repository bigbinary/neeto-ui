const HtmlWebPackPlugin = require("html-webpack-plugin");
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");

module.exports = {
  entry: {
    neetoui: "./lib/index.js",
    formik: "./lib/components/formik/index.js",
    layouts: "./lib/layouts/index.js",
    v2: "./lib/v2/index.js",
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
        use: {
          loader: "babel-loader",
        },
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
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    path: __dirname,
    filename: "[name].js",
    library: "neetoui",
    libraryTarget: "umd",
  },
  plugins: [new PeerDepsExternalsPlugin()],
};
