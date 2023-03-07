const path = require("path");

module.exports = {
  alias: {
    lib: path.resolve(__dirname, "./lib"),
    atoms: path.resolve(__dirname, "./lib/atoms"),
    components: path.resolve(__dirname, "./lib/components"),
    constants: path.resolve(__dirname, "./lib/constants"),
    hooks: path.resolve(__dirname, "./lib/hooks"),
    utils: path.resolve(__dirname, "./lib/utils"),
  },
  extensions: [
    ".ts",
    ".mjs",
    ".js",
    ".jsx",
    ".sass",
    ".scss",
    ".css",
    ".module.sass",
    ".module.scss",
    ".module.css",
    ".png",
    ".svg",
    ".gif",
    ".jpeg",
    ".jpg",
  ],
};
