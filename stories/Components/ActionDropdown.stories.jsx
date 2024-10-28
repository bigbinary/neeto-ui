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
    label: {
      description: "To specify the text to be displayed inside the button.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    buttonStyle: {
      description:
        "To specify the style of the button to be rendered as the ActionDropdown target.",
      control: "radio",
      options: Object.values({ primary: "primary", secondary: "secondary" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    buttonSize: {
      description: "To specify the size of the ActionDropdown.",
      control: "radio",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    disabled: {
      description: "To specify whether the ActionDropdown is disabled or not.",
      control: "boolean",
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    nClick: {
      description:
        "To specify the action to be triggered on click of the button.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    buttonProps: {
      description:
        "To specify the props to be passed to the action button and Dropdown target button.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    dropdownProps: {
      description: "To specify the props to be passed to the Dropdown target.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    portalProps: {
      description: "To specify the props to be passed to the Dropdown portal.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    className: {
      description:
        "To provide external classnames to ActionDropdown target wrapper.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    children: {
      description: "To specify the content to be rendered inside the Dropdown.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    style: {
      description: "Use `buttonStyle` prop instead.",
      control: "select",
      options: Object.values({ primary: "primary", secondary: "secondary" }),
      table: { type: { summary: "string" }, category: "Removed" },
    },
    size: {
      description: "Use `buttonSize` prop instead.",
      control: "select",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: { type: { summary: "string" }, category: "Removed" },
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

const PortalCustomClassName = args => {
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

PortalCustomClassName.storyName =
  "ActionDropdown with custom classname for the dropdown menu";

PortalCustomClassName.args = {
  label: "Custom ActionDropdown",
  portalProps: { classNames: "neeto-ui__action-menu" },
};

export {
  Default,
  Styles,
  Sizes,
  CustomIcon,
  CSSCustomization,
  PortalCustomClassName,
};

export default metadata;
