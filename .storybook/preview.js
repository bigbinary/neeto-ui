import "./style.scss";
import "../lib/styles/index.scss";
import { themes } from '@storybook/theming';

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
        ["Welcome","Get Started","Formik", "Changelog"],
        "Foundation",
        ["Colors", "Typography", "Iconography", "Helpers"],
        "Components",
        "Molecules",
        "Overlays",
        "Layouts",
      ],
    },
  },
};
