import React, { useState } from "react";
import { Settings } from "@bigbinary/neeto-icons";

import Dropdown from "../../lib/components/Dropdown";
import { Button } from "../../lib/components";
import { icons } from "../constants";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: {
    "Dropdown.Menu": Dropdown.Menu,
    "Dropdown.MenuItem": Dropdown.MenuItem,
    "Dropdown.Divider": Dropdown.Divider,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Dropdown } from "@bigbinary/neetoui";`',
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
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
  },
};

const listItems = ["Action", "Another action", "Something else here"];

export const DropdownStory = (args) => {
  const { Menu, MenuItem, Divider } = Dropdown;
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
DropdownStory.storyName = "DropDown";
DropdownStory.args = {
  buttonProps: {
    size: "large",
  },
};

export const PrimaryDropdown = () => {
  const [dropdownOne, setDropdownOne] = useState(false);
  const { Menu, MenuItem, Divider } = Dropdown;
  return (
    <div className="h-40">
      <Dropdown
        label="Primary Dropdown"
        buttonStyle="primary"
        position="bottom-end"
        isOpen={dropdownOne}
        onClose={() => {
          setDropdownOne(false);
        }}
        buttonProps={{
          onClick: () => {
            setDropdownOne(!dropdownOne);
          },
        }}
        closeOnSelect={false}
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

export const SecondaryDropdown = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  return (
    <div className="h-40">
      <Dropdown
        label="Secondary Dropdown"
        buttonStyle="secondary"
        position="bottom-end"
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

export const TextDropdown = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  return (
    <div className="h-40">
      <Dropdown label="Text Dropdown" buttonStyle="text" position="bottom-end">
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

export const CustomIcon = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  return (
    <div className="h-40">
      <Dropdown
        label="Dropdown with custom icon"
        icon={Settings}
        position="bottom-end"
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

export const MultiDropdownWithClickTrigger = () => {
  const {
    Menu, MenuItem, Divider
  } = Dropdown;

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
            customTarget={<li>Another Dropdown</li>}
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

export const MultiDropdownWithHoverTrigger = () => {
  const {
    Menu, MenuItem, Divider
  } = Dropdown;

  return (
    <div className="flex items-start h-80">
      <Dropdown position="bottom" label="Dropdown" isMultiLevel>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            position="right-start"
            trigger="hover"
            customTarget={<li>Another Dropdown</li>}
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

export const ControlledDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    Menu, MenuItem, Divider
  } = Dropdown;
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

export const TextDropdownOld = () => {
  return (
    <div className="h-40">
      <Dropdown label="Text Dropdown" buttonStyle="text" position="bottom-end">
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </Dropdown>
    </div>
  );
};

TextDropdownOld.storyName = "DropDown with list items (li)";
