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
      source: {
        type: "code",
      }
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A6",
    },
  },
};

const listItems = ["Option 1", "Option 2", "Option 3"];

const Template = (args) => {
  return (
    <div className="h-40">
      <ActionDropdown {...args}>
        <ActionDropdown.Menu>
          {listItems.map((item, idx) => (
            <ActionDropdown.MenuItem key={idx}>{item}</ActionDropdown.MenuItem>
          ))}
          <ActionDropdown.Divider />
          <ActionDropdown.MenuItem style="danger">
            Delete
          </ActionDropdown.MenuItem>
        </ActionDropdown.Menu>
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
