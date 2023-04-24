import React from "react";
import { Help } from "neetoicons";

import Label from "components/Label";
import Tooltip from "components/Tooltip";

export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Label } from "@bigbinary/neetoui";`',
      },
    },
  },
  subcomponents: { Tooltip },
};

const Template = ({ children, ...args }) => <Label {...args}>{children}</Label>;

export const Default = Template.bind({});
Default.args = {
  children: "This is a default Label",
};

export const Required = Template.bind({});
Required.args = {
  children: "This is a required Label",
  required: true,
};

export const WithHelpIcon = Template.bind({});
WithHelpIcon.args = {
  children: "This is a Label with a help icon",
  required: true,
  helpIconProps: {
    onClick: () => window.open("https://neetoui.onrender.com"),
    icon: Help,
    tooltipProps: {
      content: "Help icon tooltip",
      position: "auto",
    },
  },
};
WithHelpIcon.storyName = "With help icon";
