import React from "react";

import Spinner from "components/Spinner";

const description = `
\`import { Spinner } from "@bigbinary/neetoui";\`

\`Spinner\` displays an animated graphic to indicate that a task is in progress or
loading, providing feedback to the user about ongoing background activity.
`;

const metadata = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    theme: {
      description: "To specify the theme of the Spinner.",
      control: "radio",
      options: Object.values({ dark: "dark", light: "light" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "{}" },
      },
    },
    size: {
      description: "To set the size of the spinner",
      control: "radio",
      options: Object.values({ small: "small", medium: "medium" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    className: {
      description: "Provide external classnames to Spinner component.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "dark" },
      },
    },
  },
};

const Template = args => (
  <div className="flex h-20 w-20 items-center justify-center">
    <Spinner {...args} />
  </div>
);

const Default = Template.bind({});

const LightTheme = args => (
  <div className="neeto-ui-bg-black flex h-20 w-20 items-center justify-center">
    <Spinner {...args} theme="light" />
  </div>
);
LightTheme.storyName = "Light theme";

const SizeCutomization = args => (
  <div className="flex items-center gap-8">
    <div className="flex h-20 w-20 items-center justify-center">
      <Spinner {...args} size="small" />
    </div>
    <div className="flex h-20 w-20 items-center justify-center">
      <Spinner {...args} size="medium" />
    </div>
  </div>
);
SizeCutomization.storyName = "Size Cutomization";

const CSSCustomization = args => (
  <div className="flex h-20 w-20 items-center justify-center">
    <Spinner {...args} />
  </div>
);

CSSCustomization.storyName = "Spinner CSS Customization";

CSSCustomization.args = { className: "neetix-spinner" };

const SpinnerCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Spinner\`
component.

\`\`\`css
--neeto-ui-spinner-size: 20px;
--neeto-ui-spinner-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-spinner-border-width: 3px;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-spinner {
  --neeto-ui-spinner-size: 32px;
  --neeto-ui-spinner-color: rgb(var(--neeto-ui-primary-500));
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: SpinnerCSSCustomization } },
};

export { Default, LightTheme, SizeCutomization, CSSCustomization };

export default metadata;
