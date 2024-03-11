import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import svgr from "@svgr/rollup";
import styles from "rollup-plugin-styles";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { mergeDeepLeft } from "ramda";
import copy from "rollup-plugin-copy";
import packageJson from "./package.json";
import path from "path";

const commonResolve = require("@bigbinary/neeto-commons-frontend/configs/nanos/webpack/resolve.js");
const projectResolve = require("./resolve.js");
const { alias: aliasEntries } = mergeDeepLeft(projectResolve, commonResolve);

const config = args => {
  const destination = args.app
    ? path.resolve(__dirname, args.app, "node_modules", packageJson.name)
    : __dirname;

  const plugins = [
    peerDepsExternal(),
    alias({ entries: aliasEntries }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    svgr(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    resolve({
      preferBuiltins: true,
      extensions: [".js", ".jsx", ".svg"],
      moduleDirectories: ["node_modules"],
    }),
    commonjs({ include: /\**node_modules\**/ }),
    json(),
  ];

  const formats = ["esm", "cjs"];

  const getOutputFileName = (name, format) =>
    format === "esm" ? `${name}.js` : `${name}.cjs.js`;

  return [
    {
      input: "./src/components/index.js",
      output: formats.map(format => ({
        file: path.resolve(destination, getOutputFileName("index", format)),
        format,
        sourcemap: true,
        assetFileNames: "[name][extname]",
      })),
      external: ["@bigbinary/neetoui/managers"],
      plugins: [
        ...plugins,
        styles({
          extensions: [".css", ".scss", ".min.css"],
          mode: ["extract", "index.css"],
        }),
        args.app &&
          copy({
            targets: [
              { src: "package.json", dest: destination },
              { src: "index.d.ts", dest: destination },
              { src: "formik.d.ts", dest: destination },
              { src: "managers.d.ts", dest: destination },
            ],
          }),
      ].filter(Boolean),
    },
    {
      input: "./src/components/layouts/index.js",
      output: formats.map(format => ({
        file: path.resolve(destination, getOutputFileName("layouts", format)),
        format,
        sourcemap: true,
      })),
      plugins,
    },
    {
      input: "./src/components/formik/index.js",
      output: formats.map(format => ({
        file: getOutputFileName("formik", format),
        format,
        sourcemap: true,
      })),
      external: ["@bigbinary/neetoui/managers"],
      plugins,
    },
    {
      input: "./src/managers/index.js",
      output: formats.map(format => ({
        file: path.resolve(destination, getOutputFileName("managers", format)),
        format,
        sourcemap: true,
      })),
      plugins,
    },
  ];
};

export default config;
