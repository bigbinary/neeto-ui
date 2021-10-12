const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./lib/components/index.js",
    layouts: "./lib/components/layouts/index.js",
    formik: "./lib/components/formik/index.js",
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
        include: [path.resolve(__dirname, "lib")],
        use: [
          {
            loader: "babel-loader",
          }
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
  plugins: [new PeerDepsExternalsPlugin()],
};
