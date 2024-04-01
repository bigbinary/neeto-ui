import { readdirSync, existsSync, lstatSync } from "fs";
import path from "path";

const doesFileExist = filePath =>
  existsSync(filePath) && lstatSync(filePath).isFile();

const getOutputName = file =>
  file.isDirectory() ? file.name : file.name.split(".")[0];

const getAllFilesInsideComponents = basePath => {
  const componentsPath = path.resolve(__dirname, basePath);

  return readdirSync(componentsPath, { withFileTypes: true })
    .filter(file => getOutputName(file) !== "index")
    .map(file => {
      const isDirectory = file.isDirectory();
      const outputName = isDirectory ? file.name : file.name.split(".")[0];

      let inputPath = `${componentsPath}/${file.name}`;
      if (isDirectory) {
        inputPath = `${componentsPath}/${file.name}/index.jsx`;
        if (!doesFileExist(inputPath)) {
          inputPath = `${componentsPath}/${file.name}/index.js`;
        }
      }

      return { inputPath, outputName };
    });
};

const input = {
  index: "./src/components/index.js",
  formik: "./src/formik/index.js",
  layouts: "./src/layouts/index.js",
  managers: "./src/managers/index.js",
};

["components", "formik", "layouts", "managers"].forEach(group => {
  const components = getAllFilesInsideComponents(`src/${group}`);
  components.forEach(({ inputPath, outputName }) => {
    input[outputName] = inputPath;
  });
});

export default input;
