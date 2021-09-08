module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
    require("cssnano"),
    require("postcss-prefixer")({
      prefix: "v2-",
      ignore: [
        /tw-/,
        /Toastify/,
        /tippy-box/,
        /tippy-arrow/,
        /tippy-content/,
        /tippy-svg-arrow/,
      ],
    }),
  ],
};
