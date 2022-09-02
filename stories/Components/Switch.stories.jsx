import React from "react";

import Switch from "../../lib/components/Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Switch } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = (args) => (
  <div className="p-4">
    <Switch {...args} />
  </div>
);

export const CheckedState = Template.bind({});
CheckedState.args = {
  checked: true,
};

export const UncheckedState = Template.bind({});
UncheckedState.args = {
  checked: false,
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Switch Label Example",
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: <span className="neeto-ui-text-info">Custom Label Example</span>,
};

export const WithChangeListner = Template.bind({});
WithChangeListner.args = {
  onChange: (e) => alert("Callback invoked"),
};
