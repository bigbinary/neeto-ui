import React from "react";
import { BrowserRouter } from "react-router-dom";

import Label from "../lib/components/Label";
import Button from "../lib/components/Button";

export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Label } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
  subcomponents: { Button }
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

export const WithHelpIcon = (args) => (
  <BrowserRouter>
    <Label {...args} />
  </BrowserRouter>
);
WithHelpIcon.args = {
  children: "This is a label with a help icon",
  helpIconProps: {
    href: "https://github.com/bigbinary/neeto-ui",
    tooltipProps: {
      content: "Help icon tooltip",
      position: "bottom"
    }
  },
};
