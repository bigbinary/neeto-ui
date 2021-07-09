module.exports = async () => {
  return {
    verbose: true,
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
  };
};
