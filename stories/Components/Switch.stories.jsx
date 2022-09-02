/* eslint-disable no-empty-pattern */
import React, { useState } from "react";

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
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=943%3A2135",
    },
  },
};

const Template = (args) => (
  <div className="p-4">
    <Switch {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Controlled = ({}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return <Switch onChange={onChange} checked={isChecked} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: true,
};

export const Label = ({}) => (
  <div className="flex flex-col space-y-6">
    <Switch label="Switch Label Example" />
    <Switch
      label={
        <span className="font-semibold neeto-ui-text-info-500">
          Custom Label Example
        </span>
      }
    />
  </div>
);
