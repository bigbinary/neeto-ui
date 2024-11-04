import React from "react";

import { useDarkMode } from "storybook-dark-mode";

import ButtonCustomizationComp from "./ButtonCustomization";
import CustomizeNeetoUIComp from "./CustomizeNeetoUI";
import DarkModeComp from "./DarkMode";
import GlobalCustomizationComp from "./GlobalCustomization";
import ToggleDarkModeComp from "./ToggleDarkMode";

const description = `
neetoUI supports CSS variables for real-time customization and easier theming.
All the CSS variables are prefixed with neeto-ui to avoid conflicts with
third-party CSS.

<br />

## Root variables

Here are the variables we include that are accessible from any location where
neetoUI's CSS is loaded. They’re located in our \_root.scss file and included in
our compiled CSS file.

\`\`\`css
:root {
  --neeto-ui-black: 0, 0, 0;
  --neeto-ui-white: 255, 255, 255;
  --neeto-ui-gray-800: 18, 18, 18;
  --neeto-ui-gray-700: 47, 57, 65;
  --neeto-ui-gray-600: 104, 115, 125;
  --neeto-ui-gray-500: 135, 146, 157;
  --neeto-ui-gray-400: 194, 200, 204;
  --neeto-ui-gray-300: 216, 220, 222;
  --neeto-ui-gray-200: 233, 235, 237;
  --neeto-ui-gray-100: 248, 249, 249;
  --neeto-ui-primary-800: 45, 54, 212;
  --neeto-ui-primary-600: 54, 66, 223;
  --neeto-ui-primary-500: 69, 88, 249;
  --neeto-ui-primary-100: 235, 236, 254;
  --neeto-ui-error-800: 187, 18, 26;
  --neeto-ui-error-600: 201, 37, 45;
  --neeto-ui-error-500: 215, 55, 63;
  --neeto-ui-error-100: 254, 236, 240;
  --neeto-ui-success-800: 16, 113, 84;
  --neeto-ui-success-600: 18, 128, 92;
  --neeto-ui-success-500: 38, 142, 108;
  --neeto-ui-success-100: 225, 243, 238;
  --neeto-ui-warning-800: 189, 100, 13;
  --neeto-ui-warning-600: 203, 111, 16;
  --neeto-ui-warning-500: 218, 123, 17;
  --neeto-ui-warning-100: 251, 242, 225;
  --neeto-ui-info-800: 9, 90, 186;
  --neeto-ui-info-600: 13, 102, 208;
  --neeto-ui-info-500: 20, 115, 230;
  --neeto-ui-info-100: 226, 242, 255;
  --neeto-ui-shadow-xs: 0px 1px 4px -1px rgba(28, 48, 74, 0.12);
  --neeto-ui-shadow-sm: 0px 3px 12px -1px rgba(28, 52, 84, 0.12), 0px 2px
      4px -1px rgba(28, 55, 90, 0.08);
  --neeto-ui-shadow-md: 0px 8px 24px -4px rgba(28, 50, 79, 0.12), 0px 2px
      6px -1px rgba(28, 55, 90, 0.08);
  --neeto-ui-shadow-lg: 0 8px 24px rgba(140, 149, 159, 0.2);
  --neeto-ui-text-h1: 32px;
  --neeto-ui-text-h2: 24px;
  --neeto-ui-text-h3: 20px;
  --neeto-ui-text-h4: 16px;
  --neeto-ui-text-h5: 14px;
  --neeto-ui-text-h6: 12px;
  --neeto-ui-text-body1: 16px;
  --neeto-ui-text-body2: 14px;
  --neeto-ui-text-body3: 12px;
  --neeto-ui-text-nano: 10px;
  --neeto-ui-text-xxs: 10px;
  --neeto-ui-text-xs: 12px;
  --neeto-ui-text-sm: 14px;
  --neeto-ui-text-base: 16px;
  --neeto-ui-text-lg: 18px;
  --neeto-ui-text-xl: 20px;
  --neeto-ui-text-2xl: 24px;
  --neeto-ui-text-3xl: 32px;
  --neeto-ui-text-4xl: 48px;
  --neeto-ui-font-thin: 100;
  --neeto-ui-font-extralight: 200;
  --neeto-ui-font-light: 300;
  --neeto-ui-font-normal: 400;
  --neeto-ui-font-medium: 500;
  --neeto-ui-font-semibold: 600;
  --neeto-ui-font-bold: 700;
  --neeto-ui-font-extrabold: 800;
  --neeto-ui-font-black: 900;
  --neeto-ui-leading-none: 1;
  --neeto-ui-leading-tight: 1.25;
  --neeto-ui-leading-snug: 1.375;
  --neeto-ui-leading-normal: 1.5;
  --neeto-ui-leading-relaxed: 1.625;
  --neeto-ui-leading-loose: 2;
  --neeto-ui-text-transform-none: none;
  --neeto-ui-text-transform-capitalize: capitalize;
  --neeto-ui-text-transform-uppercase: uppercase;
  --neeto-ui-text-transform-lowercase: lowercase;
  --neeto-ui-text-transform-full-width: full-width;
  --neeto-ui-text-transform-inherit: inherit;
  --neeto-ui-text-transform-initial: initial;
  --neeto-ui-text-transform-revert: revert;
  --neeto-ui-text-transform-unset: unset;
  --neeto-ui-rounded-none: 0;
  --neeto-ui-rounded-sm: 3px;
  --neeto-ui-rounded: 5px;
  --neeto-ui-rounded-md: 6px;
  --neeto-ui-rounded-lg: 8px;
  --neeto-ui-rounded-xl: 12px;
  --neeto-ui-rounded-full: 999px;
  --neeto-ui-transition: all 0.3s linear;
  --neeto-ui-modal-z-index: 99999;
  --neeto-ui-pane-header-height: 78px;
  --neeto-ui-pane-footer-height: 80px;
  --neeto-ui-main-header-height: 80px;
  --neeto-ui-main-header-with-breadcrumbs-height: 94px;
  --neeto-ui-sub-header-height: 37px;
  --neeto-ui-sub-header-bottom-margin: 20px;
  --neeto-ui-pagination-block-height: 88px;
  --neeto-ui-table-header-height: 40px;
  --neeto-ui-surface-bg: 255, 255, 255;
  --neeto-ui-pastel-color-1: 229, 231, 235;
  --neeto-ui-pastel-color-2: 254, 202, 202;
  --neeto-ui-pastel-color-3: 253, 230, 138;
  --neeto-ui-pastel-color-4: 167, 243, 208;
  --neeto-ui-pastel-color-5: 191, 219, 254;
  --neeto-ui-pastel-color-6: 199, 210, 254;
  --neeto-ui-pastel-color-7: 221, 214, 254;
  --neeto-ui-pastel-color-8: 251, 207, 232;
}
\`\`\`

### Using CSS Variables

CSS variables offer similar flexibility to Sass’s variables, but without the
need for compilation before being served to the browser.

\`\`\`
a {
  color: rgb(var(--neeto-ui-primary-600));
}
\`\`\`

#### Adding transparency in color

\`\`\`
a {
  color: rgba(var(--neeto-ui-primary-600), 0.5);
}
\`\`\`

#### Using other CSS variables

\`\`\`
a {
   border-radius: var(--neeto-ui-rounded);
}
\`\`\`
`;

const metadata = {
  title: "Customize/CSS Variables",
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
};

const GlobalCustomization = () => {
  const isDarkMode = useDarkMode();

  return <GlobalCustomizationComp {...{ isDarkMode }} />;
};
GlobalCustomization.storyName = "Theming";
GlobalCustomization.parameters = {
  docs: {
    description: {
      story:
        "By default, all neetoUI components inherit values from the default theme. You may need to customise the theme to match your brand identity or visual style.",
    },
  },
};

const ButtonCustomizationDescription = `
With neetoUI v6, we have taken the customization options to the next level. You
can now customize each component to your liking. Be it padding, font size,
border-radius, etc. you can customize each aspect of a component and make it
your own. You can find the CSS variables used by a component and an example of
how to override it in their respective stories.

##### Eg: Button Customization

By default, neetoUI provides
[three predefined solid button variants](/docs/components-button--styles).
However, you have the flexibility to create custom buttons using CSS variables.
To do so, just find the
[CSS variables used by the button component](/docs/components-button--docs#button-css-customization)
and override it.`;

const ButtonCustomization = () => {
  const isDarkMode = useDarkMode();

  return <ButtonCustomizationComp {...{ isDarkMode }} />;
};
ButtonCustomization.storyName = "Component Customization";
ButtonCustomization.parameters = {
  docs: { description: { story: ButtonCustomizationDescription } },
};

const CustomizeNeetoUI = () => {
  const isDarkMode = useDarkMode();

  return <CustomizeNeetoUIComp {...{ isDarkMode }} />;
};
CustomizeNeetoUI.storyName = "Customize neetoUI";
CustomizeNeetoUI.parameters = {
  docs: {
    description: {
      story:
        "You can also create custom classes overriding the CSS variables and use that as well.",
    },
  },
};

const DarkMode = () => {
  const isDarkMode = useDarkMode();

  return <DarkModeComp {...{ isDarkMode }} />;
};

DarkMode.parameters = {
  docs: { description: { story: "neetoUI supports dark mode." } },
};

const ToggleDarkMode = () => {
  const isDarkMode = useDarkMode();

  return <ToggleDarkModeComp {...{ isDarkMode }} />;
};

const ToggleDarkModeDescription = `
To enable the dark mode for the product, apply the

<code>neeto-ui-theme--dark</code> class to the <code>body</code> tag.

<br />
<br />

#### Toggling dark mode in Storybook

\`storybook-dark-mode\` addon is used to toggle between dark and light mode in
Storybook.
`;
ToggleDarkMode.storyName = "Toggling dark mode in a neeto product";
ToggleDarkMode.parameters = {
  docs: { description: { story: ToggleDarkModeDescription } },
};

export {
  GlobalCustomization,
  ButtonCustomization,
  CustomizeNeetoUI,
  DarkMode,
  ToggleDarkMode,
};

export default metadata;
