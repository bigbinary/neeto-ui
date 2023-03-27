import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";
import svgr from "@svgr/rollup";
import styles from "rollup-plugin-styles";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const plugins = [
  peerDepsExternal(),
  alias({ entries: require("./resolve.js").alias }),
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
    preventAssignment: true,
  }),
  svgr(),
  babel({
    exclude: "node_modules/**",
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      process.env.NODE_ENV === "production" && [
        "babel-plugin-transform-react-remove-prop-types",
        { removeImport: true },
      ],
      "@babel/plugin-transform-runtime",
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "lib",
        },
      ],
    ].filter((item) => !!item),
    babelHelpers: "runtime",
  }),
  resolve({
    preferBuiltins: true,
    extensions: [".js", ".jsx", ".svg"],
    moduleDirectories: ["node_modules"],
  }),
  commonjs({ include: /\**node_modules\**/ }),
  json(),
  terser({ compress: { evaluate: false } }),
];

const formats = ["esm", "cjs"];

const getOutputFileName = (name, format) =>
  format === "esm" ? `${name}.js` : `${name}.cjs.js`;

export default [
  {
    input: "./src/components/index.js",
    output: formats.map((format) => ({
      file: getOutputFileName("index", format),
      format,
      sourcemap: false,
      assetFileNames: "[name][extname]",
    })),
    external: ["@bigbinary/neetoui/managers"],
    plugins: [
      ...plugins,
      styles({
        extensions: [".css", ".scss", ".min.css"],
        mode: ["extract", "index.css"],
      }),
    ],
  },
  {
    input: "./src/components/layouts/index.js",
    output: formats.map((format) => ({
      file: getOutputFileName("layouts", format),
      format,
      sourcemap: false,
    })),
    plugins,
  },
  {
    input: "./src/components/formik/index.js",
    output: formats.map((format) => ({
      file: getOutputFileName("formik", format),
      format,
      sourcemap: false,
    })),
    external: ["@bigbinary/neetoui/managers"],
    plugins,
  },
  {
    input: "./src/managers/index.js",
    output: formats.map((format) => ({
      file: getOutputFileName("managers", format),
      format,
      sourcemap: false,
    })),
    plugins,
  },
];
