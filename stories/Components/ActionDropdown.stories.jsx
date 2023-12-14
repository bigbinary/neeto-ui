import React from "react";

import { Settings, Delete, MenuHorizontal } from "neetoicons";

import ActionDropdown from "components/ActionDropdown";

import ActionDropdownCSSCustomization from "!raw-loader!./ActionDropdownStoriesDocs/ActionDropdownCSSCustomization.mdx";
import ActionDropdownDocs from "!raw-loader!./ActionDropdownStoriesDocs/ActionDropdownDocs.mdx";

const listItems = ["Option 1", "Option 2", "Option 3"];

const metadata = {
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
    docs: { description: { component: ActionDropdownDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A6",
    },
  },
  argTypes: {
    onClick: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const Template = args => {
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
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

const Default = Template.bind({});

Default.args = { buttonStyle: "primary", label: "Primary" };

const Styles = args => {
  const { Menu, MenuItem, Divider } = ActionDropdown;

  return (
    <div className="h-40 space-x-6">
      <ActionDropdown {...args} buttonStyle="primary" label="Primary">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
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
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
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
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

const Sizes = args => {
  const { Menu, MenuItem, Divider } = ActionDropdown;

  return (
    <div className="h-40 space-x-6">
      <ActionDropdown {...args} buttonSize="small" label="Small">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx} prefix={<Settings size={20} />}>
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
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
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
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
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

const CustomIcon = args => {
  const { Menu, MenuItem, Divider } = ActionDropdown;

  return (
    <div className="h-40">
      <ActionDropdown
        {...args}
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
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

CustomIcon.storyName = "Custom icon";

const CSSCustomization = args => {
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
          <MenuItem.Button prefix={<Delete size={20} />} style="danger">
            Delete
          </MenuItem.Button>
        </Menu>
      </ActionDropdown>
    </div>
  );
};

CSSCustomization.storyName = "ActionDropdown CSS Customization";

CSSCustomization.args = {
  label: "Custom ActionDropdown",
  className: "neetix-actiondropdown",
  buttonProps: { className: "neetix-button--primary" },
  dropdownProps: { buttonProps: { className: "neetix-button--primary" } },
};

CSSCustomization.parameters = {
  docs: { description: { story: ActionDropdownCSSCustomization } },
};

export { Default, Styles, Sizes, CustomIcon, CSSCustomization };

export default metadata;
