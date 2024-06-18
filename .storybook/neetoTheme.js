import { create } from "@storybook/theming";
import neetoLogo from "./neetoLogo.svg";

export default create({
  base: "dark",

  colorPrimary: "#008068",
  colorSecondary: "#008068",

  // UI
  appBg: "#000000",
  appContentBg: "#1e202e",
  appBorderColor: "#121212",
  appBorderRadius: 30,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  // Text colors
  // textColor: 'white',
  // textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "#333647",

  // Form colors
  inputBg: "transparent",
  inputBorder: "silver",
  inputTextColor: "white",
  inputBorderRadius: 4,

  brandTitle: "neeto",
  brandUrl: "https://neeto.com/",
  brandImage: neetoLogo,
});
