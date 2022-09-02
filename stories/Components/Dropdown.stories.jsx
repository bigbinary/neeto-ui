/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import { Settings, Delete, Search } from "@bigbinary/neeto-icons";

import { Button, Dropdown, Tag, Input, Typography } from "../../lib/components";

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
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A6",
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    ...DEPRECATED_PROPS,
  },
};

export const Default = (args) => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];
  return (
    <div className="h-40">
      <Dropdown label="Dropdown" {...args}>
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
      <div className="flex space-x-3">
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
      <Dropdown label="Prefix and Suffix" position="bottom-end">
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
    <div className="flex items-start h-80">
      <Dropdown label="Dropdown" isMultiLevel>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            position="right-start"
            customTarget={<MenuItem.Button>Another dropdown</MenuItem.Button>}
            onClick={(e) => e.stopPropagation()}
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
MultiDropdownWithClickTrigger.storyName = "Multi dropdown with click trigger";

export const MultiDropdownWithHoverTrigger = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex items-start h-80">
      <Dropdown label="Dropdown" isMultiLevel>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            trigger="hover"
            position="right-start"
            customTarget={<MenuItem.Button>Another dropdown</MenuItem.Button>}
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
MultiDropdownWithHoverTrigger.storyName = "Multi dropdown with hover trigger";

export const ControlledDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];
  return (
    <div className="flex flex-col items-start space-y-6 h-60">
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
        <div className="flex p-2 gap-2 flex-col">
          <Input prefix={<Search />} placeholder="Search Members" />
          <Typography style="body2" mb="mb-0">Results</Typography>
          <Menu className="gap-1 flex flex-col">
            {members.map((item, idx) => (
              <MenuItem.Button key={idx} className="neeto-ui-rounded">{item}</MenuItem.Button>
            ))}
          </Menu>
        </div>
      </Dropdown>
    </div>
  );
};
