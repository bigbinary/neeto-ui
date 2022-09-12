import "./style.scss";
import "../lib/styles/index.scss";
import { themes } from "@storybook/theming";

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
        "Welcome",
        "Getting started",
        "Formik",
        "Changelog",
        "Older versions",
        "Foundation",
        ["Colors", "Typography", "Iconography", "Helpers"],
        "Components",
        [
          "Button",
          "Checkbox",
          "Radio",
          "Switch",
          "Input",
          "Textarea",
          "Label",
          "Select",
          "Email Input",
          "Dropdown",
          "ActionDropdown",
          "Date and Time",
          "Tag",
          "Tab",
          "Accordion",
          "Avatar",
          "Callout",
          "Table",
          "Pagination",
          "ColorPicker",
          "Spinner",
          "PageLoader",
        ],
        "Molecules",
        "Overlays",
        "Layouts",
        "Customize",
        "Migration-Guide",
      ],
    },
  },
};
