import React from "react";

import Checkbox from "../lib/components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Checkbox } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  id: "checkbox_name",
  label: "This is a Checkbox",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox_name",
  label: "This Checkbox is disabled",
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  id: "checkbox_name",
  label: "This Checkbox is required",
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "checkbox_name",
  label: "Checkbox with error",
  error: "Error message",
};
