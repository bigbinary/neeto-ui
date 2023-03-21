const path = require("path");

module.exports = {
  alias: {
    atoms: path.resolve(__dirname, "./src/atoms"),
    constants: path.resolve(__dirname, "./src/constants"),
    managers: path.resolve(__dirname, "./src/managers"),
  },
};
