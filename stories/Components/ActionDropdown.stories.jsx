import React from "react";

import ActionDropdown from "../../lib/components/ActionDropdown";

export default {
  title: "Components/ActionDropdown",
  component: ActionDropdown,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { ActionDropdown } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const listItems = ["Option 1", "Option 2", "Option 3"];

const Template = (args) => {
  return (
    <div className="h-40">
      <ActionDropdown {...args}>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ActionDropdown>
    </div>
  );
};

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {
  style: "primary",
  label: "Primary",
};

export const SecondaryDropdown = Template.bind({});
SecondaryDropdown.args = {
  style: "secondary",
  label: "Secondary",
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  label: "Disabled",
  disabled: true,
};

export const LargePrimaryDropdown = Template.bind({});
LargePrimaryDropdown.args = {
  size: "large",
  style: "primary",
  label: "Large Primary",
};

export const LargeSecondaryDropdown = Template.bind({});
LargeSecondaryDropdown.args = {
  size: "large",
  style: "secondary",
  label: "Large Secondary",
};

export const LargeDisabledDropdown = Template.bind({});
LargeDisabledDropdown.args = {
  size: "large",
  label: "Disabled",
  disabled: true,
};
