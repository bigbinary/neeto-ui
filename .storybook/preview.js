import "./style.scss";
import "../lib/styles/index.scss";
import { addParameters } from "@storybook/react";
import WhatsNew from "../WHATS_NEW.md";

addParameters({
  whatsNewSource: WhatsNew,
});

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Formik",
        "Foundation",
        ["Colors", "Typography", "Iconography", "Helpers"],
        "Components",
        "Overlays",
        "Layouts",
      ],
    },
  },
};
