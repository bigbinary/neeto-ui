import React from "react";

import { useDarkMode } from "storybook-dark-mode";

import ColorDisplay from "./ColorDisplay";

export default {
  title: "Foundation/Helpers/Color",
  tags: ["!autodocs"],
  defaultTheme: "light",
};

export const Color = () => {
  const isDarkMode = useDarkMode();

  return <ColorDisplay {...{ isDarkMode }} />;
};
