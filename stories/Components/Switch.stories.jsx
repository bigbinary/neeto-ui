import React, { useState } from "react";

import Switch from "components/Switch";
import ToolTip from "components/Tooltip";

import SwitchCSSCustomization from "!raw-loader!./SwitchStoriesDocs/SwitchCSSCustomization.mdx";
import SwitchDocs from "!raw-loader!./SwitchStoriesDocs/SwitchDocs.mdx";

const metadata = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
    docs: { description: { component: SwitchDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=943%3A2135",
    },
  },
  argTypes: {
    onChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const Template = args => <Switch {...args} />;

const Default = Template.bind({});
Default.args = { checked: false };

const Checked = Template.bind({});
Checked.args = { checked: true };

const Controlled = args => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = e => {
    setIsChecked(e.target.checked);
  };

  return <Switch {...args} checked={isChecked} onChange={onChange} />;
};

const Disabled = Template.bind({});
Disabled.args = { disabled: true, checked: true };

const Label = args => (
  <div className="flex flex-col space-y-6">
    <Switch {...args} label="Switch label example" />
    <Switch
      {...args}
      label={
        <span className="neeto-ui-text-info-500 font-semibold">
          Custom label example
        </span>
      }
    />
  </div>
);

const TooltipExample = args => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = e => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex flex-col space-y-6">
      <ToolTip content="This is a tooltip" placement="right">
        <Switch {...args} checked={isChecked} onChange={onChange} />
      </ToolTip>
    </div>
  );
};

const CSSCustomization = args => <Switch {...args} />;

CSSCustomization.storyName = "Switch CSS Customization";

CSSCustomization.args = {
  label: "Custom Switch",
  checked: true,
  className: "neetix-switch",
};

CSSCustomization.parameters = {
  docs: { description: { story: SwitchCSSCustomization } },
};

export {
  Default,
  Checked,
  Controlled,
  Disabled,
  Label,
  TooltipExample,
  CSSCustomization,
};

export default metadata;
