import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import svgr from "@svgr/rollup";
import styles from "rollup-plugin-styles";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

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

export default [
  {
    input: "./lib/components/index.js",
    output: {
      file: "index.js",
      format: "esm",
      sourcemap: false,
      assetFileNames: "[name][extname]",
    },
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
    input: "./lib/components/layouts/index.js",
    output: {
      file: "layouts.js",
      format: "esm",
      sourcemap: false,
    },
    plugins,
  },
  {
    input: "./lib/components/formik/index.js",
    output: {
      file: "formik.js",
      format: "esm",
      sourcemap: false,
    },
    external: ["@bigbinary/neetoui/managers"],
    plugins,
  },
  {
    input: "./lib/managers/index.js",
    output: {
      file: "managers.js",
      format: "esm",
      sourcemap: false,
    },
    plugins,
  },
];
