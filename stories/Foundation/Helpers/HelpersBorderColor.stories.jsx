import React from "react";

import { useDarkMode } from "storybook-dark-mode";

import BorderColorDisplay from "./BorderColorDisplay";

export const BorderColor = () => {
  const isDarkMode = useDarkMode();

  return <BorderColorDisplay {...{ isDarkMode }} />;
};

export default {
  title: "Foundation/Helpers/Border Color",
  tags: ["!autodocs"],
  defaultTheme: "light",
};
