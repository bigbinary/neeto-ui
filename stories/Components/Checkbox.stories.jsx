import React from "react";

import Checkbox from "components/Checkbox";

import CheckboxStoriesDocs from "!raw-loader!./CheckboxStoriesDocs.mdx";

const metadata = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: { description: { component: CheckboxStoriesDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A4",
    },
  },
};

const Template = args => <Checkbox {...args} />;

const Checked = Template.bind({});
Checked.args = {
  id: "checkbox_name",
  label: "This is a checkbox",
  checked: true,
  onChange: () => {},
};

const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox_name_disabled",
  label: "This checkbox is disabled",
  disabled: true,
};

const Required = Template.bind({});
Required.args = {
  id: "checkbox_name_required",
  label: "This checkbox is required",
  required: true,
};

const Error = Template.bind({});
Error.args = {
  id: "checkbox_name_error",
  label: "Checkbox with error",
  error: "Error message",
};

export { Checked, Disabled, Required, Error };

export default metadata;
