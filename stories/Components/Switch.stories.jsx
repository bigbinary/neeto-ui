import React, { useState } from "react";

import Switch from "components/Switch";
import ToolTip from "components/Tooltip";

const description = `
\`import { Switch } from "@bigbinary/neetoui";\`

\`Switch\` allows users to alternate between two states, typically on and off,
with a single action.

\`Switch\` differs from \`Checkbox\` in that it immediately alters the state upon
toggling, whereas \`Checkbox\` is typically employed for state marking, often
requiring interaction with a submit operation.
`;

const metadata = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=943%3A2135",
    },
  },
  argTypes: {
    label: {
      description: "Text to be displayed above the component",
      control: "text",
      table: { type: { summary: "string" } },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    required: {
      description: "To specify whether to show the required asterisk.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    className: {
      description: "Provide external classnames to spinner component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    error: {
      description: "To specify the error message to be shown.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    checked: {
      description: "Checks whether the Switch is checked or not",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    disabled: {
      description: "To disable the component",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    children: {
      description:
        "To specify the children label to be rendered inside the Checkbox.",
      control: "text",
      table: { type: { summary: "string" } },
    },
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

  return <Switch {...{ ...args, onChange }} checked={isChecked} />;
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
        <Switch {...{ ...args, onChange }} checked={isChecked} />
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

const SwitchCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Switch\`
component.

\`\`\`css
// Wrapper
--neeto-ui-switch-wrapper-width: fit-content;

// Switch Item
--neeto-ui-switch-item-width: 44px;
--neeto-ui-switch-item-height: 24px;
--neeto-ui-switch-item-border-width: 2px;
--neeto-ui-switch-item-border-color: transparent;
--neeto-ui-switch-item-border-radius: 20px;
--neeto-ui-switch-item-bg-color: rgb(var(--neeto-ui-gray-300));
--neeto-ui-switch-item-opacity: 1;

// Switch
--neeto-ui-switch-width: 20px;
--neeto-ui-switch-height: 20px;
--neeto-ui-switch-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-switch-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-switch-transform: translateX(0);
--neeto-ui-switch-border-radius: 16px;
--neeto-ui-switch-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

// Checked
--neeto-ui-switch-item-checked-bg-color: rgb(var(--neeto-ui-success-500));
--neeto-ui-switch-checked-color: rgb(var(--neeto-ui-success-500));
--neeto-ui-switch-checked-transform: translateX(20px);

// Margin
--neeto-ui-switch-label-margin: 12px;

// Focus Within
--neeto-ui-switch-focus-within-box-shadow: 0 0 0 3px rgb(var(--neeto-ui-gray-200));

// Focus Visible
--neeto-ui-switch-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-switch-focus-visible-outline-offset: 1px;
--neeto-ui-switch-focus-visible-box-shadow: none;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-radio {
  --neeto-ui-switch-item-checked-bg-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-switch-checked-color: rgb(var(--neeto-ui-primary-500));
}
\`\`\`

#### Output
`;

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
