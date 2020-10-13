const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    nitroui: "./lib/index.js",
    formik: "./lib/components/formik/index.js",
    layouts: "./lib/layouts/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
    output: {
    path: __dirname,
    filename: '[name].js',
    library: 'nitroui',
    libraryTarget:'umd'
  },
};