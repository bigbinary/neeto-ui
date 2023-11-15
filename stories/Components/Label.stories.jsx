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
};

const Template = ({ children, ...args }) => <Label {...args}>{children}</Label>;

const Default = Template.bind({});
Default.args = { children: "This is a default Label" };

const Required = Template.bind({});
Required.args = {
  children: "This is a required Label",
  required: true,
};

const WithHelpIcon = Template.bind({});
WithHelpIcon.args = {
  children: "This is a Label with a help icon",
  required: true,
  helpIconProps: {
    onClick: () => window.open("https://neetoui.onrender.com"),
    icon: Help,
    tooltipProps: { content: "Help icon tooltip", position: "auto" },
  },
};
WithHelpIcon.storyName = "With help icon";

const CSSCustomization = args => <Label {...args} />;

CSSCustomization.storyName = "Label CSS Customization";

CSSCustomization.args = {
  children: "This is a custom label",
  className: "neetix-label",
};

CSSCustomization.parameters = {
  docs: { description: { story: LabelCSSCustomization } },
};

export { Default, Required, WithHelpIcon, CSSCustomization };

export default metadata;
