import React, {useState} from "react";

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
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=943%3A2135",
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

export const WithChangeListener = () => {
  const [isChecked , setIsChecked] = useState(false);
  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <Switch onChange={onChange} checked={isChecked} />
  );
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Switch Label Example",
  checked: false,
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: <span className="neeto-ui-text-info-500">Custom Label Example</span>,
  checked: false,
};
