import React, { useState } from "react";

import { Settings, Delete, Search } from "neetoicons";

import { Button, Dropdown, Tag, Input, Typography } from "components";

import { icons } from "../constants";

// eslint-disable-next-line import/extensions
import DropdownStoriesDocs from "!raw-loader!./DropdownStoriesDocs.mdx";

const DEPRECATED_PROPS = {
  ulProps: {
    control: false,
    table: { type: { summary: null } },
  },
};

const metadata = {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: {
    "Dropdown.Menu": Dropdown.Menu,
    "Dropdown.MenuItem": Dropdown.MenuItem,
    "Dropdown.MenuItem.Button": Dropdown.MenuItem.Button,
    "Dropdown.Divider": Dropdown.Divider,
  },
  parameters: {
    layout: "padded",
    docs: { description: { component: DropdownStoriesDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A6",
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    onClose: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
    ...DEPRECATED_PROPS,
  },
};

const Default = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown label="Dropdown" {...args}>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <MenuItem.Button isActive>Active</MenuItem.Button>
          <MenuItem.Button isDisabled>Disabled</MenuItem.Button>
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

const TriggerStyles = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <div className="flex space-x-3">
        <Dropdown {...args} buttonStyle="primary" label="Primary Dropdown">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown buttonStyle="secondary" label="Secondary Dropdown">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown buttonStyle="text" label="Text Dropdown">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};
TriggerStyles.storyName = "Trigger styles";

const TriggerSizes = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <div className="flex items-center space-x-3">
        <Dropdown {...args} buttonSize="small" label="Small">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown label="Medium">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown buttonSize="large" label="Large">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};
TriggerSizes.storyName = "Trigger sizes";

const TriggerWithCustomIcon = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown {...args} icon={Settings} label="Dropdown with custom icon">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
TriggerWithCustomIcon.storyName = "Trigger with custom icon";

const WithPrefixAndSuffix = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown {...args} label="Prefix and suffix" position="bottom-end">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button
              key={idx}
              prefix={<Settings size={20} />}
              suffix={<Settings size={20} />}
            >
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button
            prefix={<Delete size={20} />}
            style="danger"
            suffix={<Settings size={20} />}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
WithPrefixAndSuffix.storyName = "With prefix and suffix";

const MultiDropdownWithClickTrigger = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-80 items-start">
      <Dropdown {...args} isMultiLevel label="Dropdown">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            customTarget={<MenuItem.Button>Another Dropdown</MenuItem.Button>}
            position="right-start"
            onClick={e => e.stopPropagation()}
          >
            <Menu>
              {listItems.map((item, idx) => (
                <MenuItem.Button key={idx}>{item}</MenuItem.Button>
              ))}
              <Divider />
              <MenuItem.Button style="danger">Delete</MenuItem.Button>
            </Menu>
          </Dropdown>
        </Menu>
      </Dropdown>
    </div>
  );
};
MultiDropdownWithClickTrigger.storyName = "Multi Dropdown with click trigger";

const MultiDropdownWithHoverTrigger = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-80 items-start">
      <Dropdown {...args} isMultiLevel label="Dropdown">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            customTarget={<MenuItem.Button>Another Dropdown</MenuItem.Button>}
            position="right-start"
            trigger="hover"
          >
            <Menu>
              {listItems.map((item, idx) => (
                <MenuItem.Button key={idx}>{item}</MenuItem.Button>
              ))}
              <Divider />
              <MenuItem.Button style="danger">Delete</MenuItem.Button>
            </Menu>
          </Dropdown>
        </Menu>
      </Dropdown>
    </div>
  );
};
MultiDropdownWithHoverTrigger.storyName = "Multi Dropdown with hover trigger";

const ControlledDropdown = args => {
  const [isOpen, setIsOpen] = useState(false);

  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-60 flex-col items-start space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          label="Open Dropdown"
          style="secondary"
          onClick={() => setIsOpen(true)}
        />
        <Button
          label="Close Dropdown"
          style="secondary"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <Dropdown
        {...args}
        isOpen={isOpen}
        label="Controlled Dropdown"
        onClose={() => setIsOpen(false)}
      >
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
ControlledDropdown.storyName = "Controlled Dropdown";

const CustomTarget = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown
        {...args}
        customTarget={<Tag label="Click me" style="success" />}
      >
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
CustomTarget.storyName = "Custom target";

const CustomDropdown = args => {
  const { Menu, MenuItem } = Dropdown;
  const members = ["Oliver Smith", "Jack Smith"];

  return (
    <div className="h-56">
      <Dropdown {...args} closeOnSelect={false} label="Custom Dropdown">
        <div className="flex flex-col gap-y-1 rounded-md p-2">
          <Input placeholder="Search members" prefix={<Search />} />
          <Typography style="body3">Results</Typography>
          <Menu className="flex flex-col gap-y-1">
            {members.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
          </Menu>
        </div>
      </Dropdown>
    </div>
  );
};

CustomDropdown.storyName = "Custom Dropdown";

export {
  Default,
  TriggerStyles,
  TriggerSizes,
  TriggerWithCustomIcon,
  WithPrefixAndSuffix,
  MultiDropdownWithClickTrigger,
  MultiDropdownWithHoverTrigger,
  ControlledDropdown,
  CustomTarget,
  CustomDropdown,
};

export default metadata;
