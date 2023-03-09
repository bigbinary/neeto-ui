import React from "react";
import { Settings, Delete, MenuHorizontal } from "@bigbinary/neeto-icons";

import ActionDropdown from "../../lib/components/ActionDropdown";

export default {
  title: "Components/ActionDropdown",
  component: ActionDropdown,
  subcomponents: {
    "ActionDropdown.Menu": ActionDropdown.Menu,
    "ActionDropdown.MenuItem": ActionDropdown.MenuItem,
    "ActionDropdown.MenuItem.Button": ActionDropdown.MenuItem.Button,
    "ActionDropdown.Divider": ActionDropdown.Divider,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { ActionDropdown } from "@bigbinary/neetoui";`',
      },
      source: {
        type: "code",
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A6",
    },
  },
  argTypes: {
    onClick: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" }
      }
    },
  },
};

const listItems = ["Option 1", "Option 2", "Option 3"];

const Template = (args) => {
  const { Menu, MenuItem, Divider } = ActionDropdown;

  return (
    <div className="h-40">
      <ActionDropdown {...args}>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  buttonStyle: "primary",
  label: "Primary",
};

export const Styles = () => {
  const { Menu, MenuItem, Divider } = ActionDropdown;

  return (
    <div className="h-40 space-x-6">
      <ActionDropdown buttonStyle="primary" label="Primary">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
      <ActionDropdown buttonStyle="secondary" label="Secondary">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
      <ActionDropdown disabled label="Disabled">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

export const Sizes = () => {
  const { Menu, MenuItem, Divider } = ActionDropdown;

  return (
    <div className="h-40 space-x-6">
      <ActionDropdown buttonSize="small" label="Small">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
      <ActionDropdown label="Medium">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
      <ActionDropdown buttonSize="large" label="Large">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

export const CustomIcon = () => {
  const { Menu, MenuItem, Divider } = ActionDropdown;

  return (
    <div className="h-40">
      <ActionDropdown
        dropdownProps={{ icon: MenuHorizontal }}
        label="Custom icon"
      >
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger" prefix={<Delete size={20} />}>
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};
CustomIcon.storyName = "Custom icon";
