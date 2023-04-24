/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import { Settings, Delete, Search } from "neetoicons";

import { Button, Dropdown, Tag, Input, Typography } from "components";

import { icons } from "../constants";
import DropdownStoriesDocs from "!raw-loader!./DropdownStoriesDocs.mdx";

const DEPRECATED_PROPS = {
  ulProps: {
    control: false,
    table: { type: { summary: null } },
  },
};

export default {
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
    docs: {
      description: { component: DropdownStoriesDocs },
      source: {
        type: "code",
      },
    },
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

export const Default = args => {
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

export const TriggerStyles = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];
  return (
    <div className="h-40">
      <div className="flex space-x-3">
        <Dropdown buttonStyle="primary" label="Primary Dropdown">
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

export const TriggerSizes = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];
  return (
    <div className="h-40">
      <div className="flex items-center space-x-3">
        <Dropdown buttonSize="small" label="Small">
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

export const TriggerWithCustomIcon = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];
  return (
    <div className="h-40">
      <Dropdown label="Dropdown with custom icon" icon={Settings}>
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

export const WithPrefixAndSuffix = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];
  return (
    <div className="h-40">
      <Dropdown label="Prefix and suffix" position="bottom-end">
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
            style="danger"
            prefix={<Delete size={20} />}
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

export const MultiDropdownWithClickTrigger = ({}) => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-80 items-start">
      <Dropdown label="Dropdown" isMultiLevel>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            position="right-start"
            customTarget={<MenuItem.Button>Another Dropdown</MenuItem.Button>}
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

export const MultiDropdownWithHoverTrigger = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-80 items-start">
      <Dropdown label="Dropdown" isMultiLevel>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            trigger="hover"
            position="right-start"
            customTarget={<MenuItem.Button>Another Dropdown</MenuItem.Button>}
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

export const ControlledDropdown = () => {
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
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        label="Controlled Dropdown"
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

export const CustomTarget = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown customTarget={<Tag label="Click me" style="success" />}>
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

export const CustomDropdown = () => {
  const { Menu, MenuItem } = Dropdown;
  const members = ["Oliver Smith", "Jack Smith"];
  return (
    <div className="h-56">
      <Dropdown closeOnSelect={false} label="Custom Dropdown">
        <div className="flex flex-col gap-y-1 rounded-md p-2">
          <Input prefix={<Search />} placeholder="Search members" />
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
