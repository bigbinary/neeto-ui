const path = require("path");

module.exports = {
  alias: {
    src: path.resolve(__dirname, "./src"),
    atoms: path.resolve(__dirname, "./src/atoms"),
    components: path.resolve(__dirname, "./src/components"),
    constants: path.resolve(__dirname, "./src/constants"),
    hooks: path.resolve(__dirname, "./src/hooks"),
    managers: path.resolve(__dirname, "./src/managers"),
    utils: path.resolve(__dirname, "./src/utils"),
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
