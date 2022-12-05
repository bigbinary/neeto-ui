import "./style.scss";
import "../lib/styles/index.scss";
import { themes } from "@storybook/theming";
import neetoTheme from "./neetoTheme";

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
        ["Colors", "Typography", "Iconography", "Helpers", "Language"],
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
          "DatePicker",
          "TimePicker",
          "Kbd",
        ],
        "Molecules",
        "Overlays",
        [
          "Alert",
          "Modal",
          "Pane",
          "Toastr",
          "Tooltip",
          "Popover"
        ],
        "Layouts",
        "Customize",
        "Migration-Guide",
      ],
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, ...neetoTheme },
    // Override the default light theme
    light: { ...themes.normal, ...neetoTheme },
    current: "light",
    darkClass: "neeto-ui-theme--dark",
    lightClass: "neeto-ui-theme--light",
    classTarget: "body",
    stylePreview: true,
  },
};
