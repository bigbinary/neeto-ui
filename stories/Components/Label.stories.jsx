import React from "react";

import { Help } from "neetoicons";

import Label from "components/Label";
import Tooltip from "components/Tooltip";

const description = `
\`import { Label } from "@bigbinary/neetoui";\`

\`Label\` is a descriptive element in a user interface that provides information
to identify and describe an associated form field, button, or component.
`;

const metadata = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  subcomponents: { Tooltip },
  argTypes: {
    children: {
      description: "To specify the content to be rendered inside the Label.",
      control: "text",
      table: { type: { summary: "node" } },
    },
    className: {
      description: "Provide external classnames to Label component.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    required: {
      description: "To specify whether to show the required asterisk.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    helpIconProps: {
      description: "Props for the help icon",
      control: "object",
      table: {
        type: {
          summary: "shape",
          detail: `{
  onClick: func,
  icon: oneOfType([element, func]),
  tooltipProps: shape(Tooltip.propTypes),
  popoverProps: shape({
    title: node,
    description: node,
    helpLinkProps: shape(Button.propTypes)
  }),
  className: string
}`,
        },
      },
    },
  },
};

const Template = ({ children, ...args }) => <Label {...args}>{children}</Label>;

const Default = Template.bind({});
Default.args = { children: "This is a default Label" };

const Required = Template.bind({});
Required.args = {
  children: "This is a required Label",
  required: true,
};

const WithHelpIconAndPopover = Template.bind({});
WithHelpIconAndPopover.args = {
  children: "This is a Label with a help icon",
  required: true,
  helpIconProps: {
    icon: Help,
    popoverProps: {
      title: "What is KB keywords?",
      description:
        "Keywords represent the key concepts of an article. These will be shown on the KB and will be used for SEO",
      helpLinkProps: { label: "KB", href: "https://google.com/kb" },
    },
  },
};
WithHelpIconAndPopover.storyName = "With help icon and Popover";

const WithHelpIconAndTooltip = Template.bind({});
WithHelpIconAndTooltip.args = {
  children: "This is a Label with a help icon",
  required: true,
  helpIconProps: {
    onClick: () => window.open("https://neetoui.onrender.com"),
    icon: Help,
    tooltipProps: { content: "Help icon tooltip", position: "auto" },
  },
};
WithHelpIconAndTooltip.storyName = "With help icon and Tooltip";

const CSSCustomization = args => <Label {...args} />;

CSSCustomization.storyName = "Label CSS Customization";

CSSCustomization.args = {
  children: "This is a custom label",
  className: "neetix-label",
};

const LabelCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Label\`
component.

\`\`\`css
--neeto-ui-label-font-size: var(--neeto-ui-text-sm);
--neeto-ui-label-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-label-line-height: 1;
--neeto-ui-label-color: rgb(var(--neeto-ui-black));

// Icon
--neeto-ui-label-icon-margin-left: 4px;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-label {
  --neeto-ui-label-font-size: var(--neeto-ui-text-base);
  --neeto-ui-label-font-weight: var(--neeto-ui-font-normal);
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: LabelCSSCustomization } },
};

export {
  Default,
  Required,
  WithHelpIconAndTooltip,
  WithHelpIconAndPopover,
  CSSCustomization,
};

export default metadata;
