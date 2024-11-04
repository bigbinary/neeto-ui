import React from "react";

import ProgressBar from "components/ProgressBar";

const description = `
\`import { ProgressBar } from "@bigbinary/neetoui";\`

\`ProgressBar\` allows users to visualize the progress of a task or a process.
`;

const metadata = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    progressPercentage: {
      description:
        "To specify the value to be used as the width of the progress bar.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    progressValue: {
      description:
        "To specify the progress value to be displayed on the progress bar as text.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    className: {
      description:
        "To specify external classnames as overrides to the ProgressBar component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
  },
};

const Default = args => <ProgressBar {...args} />;

Default.args = { progressPercentage: 50, progressValue: "50%", className: "" };

const CSSCustomization = args => (
  <div className="neetix-progress-bar">
    <ProgressBar {...args} />
  </div>
);

CSSCustomization.storyName = "ProgressBar CSS Customization";

CSSCustomization.args = {
  progressPercentage: 50,
  progressValue: "50%",
  className: "",
};

const ProgressBarCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`ProgressBar\`
component.

\`\`\`css
--progress-bar-background: rgb(var(--neeto-ui-gray-200));
--progress-bar-color: rgb(var(--neeto-ui-primary-600));
--progress-value-text-color: rgb(var(--neeto-ui-primary-100));
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-progress-bar {
  --progress-bar-background: rgb(var(--neeto-ui-success-100));
  --progress-bar-color: rgb(var(--neeto-ui-success-600));
  --progress-value-text-color: rgb(var(--neeto-ui-primary-100));
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: ProgressBarCSSCustomization } },
};

export { Default, CSSCustomization };

export default metadata;
