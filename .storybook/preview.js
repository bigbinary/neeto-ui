import "./style.scss";
import "../lib/styles/index.scss";

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
        ["Welcome", "Formik", "Changelog"],
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
