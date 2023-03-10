/* eslint-disable no-empty-pattern */
import React, { useState } from "react";

import Switch from "../../lib/components/Switch";
import ToolTip from "../../lib/components/Tooltip";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "`import { Switch } from \"@bigbinary/neetoui\";`"
      }
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=943%3A2135"
    }
  },
  argTypes: {
    onChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" }
      }
    }
  }
};

const Template = (args) => (
  <div className="p-4">
    <Switch {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  checked: false
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true
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
  checked: true
};

export const Label = ({}) => (
  <div className="flex flex-col space-y-6">
    <Switch label="Switch label example" />
    <Switch
      label={
        <span className="font-semibold neeto-ui-text-info-500">
          Custom label example
        </span>
      }
    />
  </div>
);

export const TooltipExample = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="flex flex-col space-y-6">
      <ToolTip placement="left" sticky content="This is a tooltip">
        <Switch onChange={onChange} checked={isChecked} />
      </ToolTip>
    </div>);

};


