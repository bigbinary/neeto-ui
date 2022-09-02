import React from "react";
import { Help } from "@bigbinary/neeto-icons";

import Label from "../../lib/components/Label";
import Tooltip from "../../lib/components/Tooltip";

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

export const Basic = Template.bind({});
Basic.args = {
  children: "This is a basic label",
};

export const Required = Template.bind({});
Required.args = {
  children: "This is a required label",
  required: true,
};

export const WithHelpIcon = Template.bind({});
WithHelpIcon.args = {
  children: "This is a label with a help icon",
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
