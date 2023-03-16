import React from "react";

import Checkbox from "components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Checkbox } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A4",
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  id: "checkbox_name",
  label: "This is a checkbox",
  checked: true,
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox_name_disabled",
  label: "This checkbox is disabled",
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  id: "checkbox_name_required",
  label: "This checkbox is required",
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "checkbox_name_error",
  label: "Checkbox with error",
  error: "Error message",
};
