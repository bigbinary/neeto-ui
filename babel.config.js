module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    env: {
      test: {
        plugins: [
          "@babel/plugin-transform-runtime"
        ]
      }
    }
  };
};
