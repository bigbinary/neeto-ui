import React from "react";

import { Help } from "neetoicons";

import Label from "components/Label";
import Tooltip from "components/Tooltip";

import LabelCSSCustomization from "!raw-loader!./LabelStoriesDocs/LabelCSSCustomization.mdx";
import LabelDocs from "!raw-loader!./LabelStoriesDocs/LabelDocs.mdx";

const metadata = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: { description: { component: LabelDocs } },
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
