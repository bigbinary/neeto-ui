import path from "path";

import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import svgr from "@svgr/rollup";
import { mergeDeepLeft } from "ramda";
import cleaner from "rollup-plugin-cleaner";
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import styles from "rollup-plugin-styles";

import packageJson from "./package.json";

const commonResolve = require("@bigbinary/neeto-commons-frontend/configs/nanos/webpack/resolve.js");
const projectResolve = require("./resolve.js");

const { alias: aliasEntries } = mergeDeepLeft(projectResolve, commonResolve);

const config = args => {
  const destination = args.app
    ? path.resolve(__dirname, args.app, "node_modules", packageJson.name)
    : __dirname;

  const plugins = [
    cleaner({
      targets: [path.resolve(__dirname, `${destination}dist/`)],
    }),
    peerDepsExternal(),
    alias({ entries: aliasEntries }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    svgr(),
    babel({ exclude: "node_modules/**", babelHelpers: "runtime" }),
    resolve({
      preferBuiltins: true,
      extensions: [".js", ".jsx", ".svg"],
      moduleDirectories: ["node_modules"],
    }),
    commonjs({ include: /\**node_modules\**/ }),
    json(),
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
  ];

  const input = {
    index: "./src/components/index.js",
    layouts: "./src/components/layouts/index.js",
    formik: "./src/components/formik/index.js",
    managers: "./src/managers/index.js",
  };

  return {
    input,
    output: ["esm", "cjs"].map(format => ({
      dir: path.resolve(destination, `dist/${format === "cjs" ? "cjs/" : ""}`),
      format,
      sourcemap: true,
      exports: "auto",
      assetFileNames: "[name][extname]",
    })),
    plugins,
  };
};

export default config;
