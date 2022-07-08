import React, { useState } from "react";
import { Settings } from "@bigbinary/neeto-icons";

import Dropdown from "../../lib/components/Dropdown";
import { Button } from "../../lib/components";
import { icons } from "../constants";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Dropdown } from "@bigbinary/neetoui";`',
      },
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

export const PrimaryDropdown = (args) => {
  const [dropdownOne, setDropdownOne] = useState(false);

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
        <Dropdown.Menu>
          {listItems.map((item, idx) => (
            <Dropdown.MenuItem key={idx}>{item}</Dropdown.MenuItem>
          ))}
          <Dropdown.Divider />
          <Dropdown.MenuItem style="danger">Delete</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const SecondaryDropdown = (args) => {
  return (
    <div className="h-40">
      <Dropdown
        label="Secondary Dropdown"
        buttonStyle="secondary"
        position="bottom-end"
      >
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </Dropdown>
    </div>
  );
};

export const TextDropdown = (args) => {
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

export const CustomIcon = (args) => {
  return (
    <div className="h-40">
      <Dropdown
        label="Dropdown with custom icon"
        icon={Settings}
        position="bottom-end"
      >
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </Dropdown>
    </div>
  );
};

export const DropdownStory = (args) => {
  return (
    <div className="h-40">
      <Dropdown label="Dropdown" position="bottom-end" {...args}>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
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

export const MultiDropdownWithClickTrigger = () => {
  return (
    <div className="flex h-80 items-start">
      <Dropdown position="bottom" label="Dropdown" isMultiLevel>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <Dropdown
          position="right-start"
          customTarget={<li>Another Dropdown</li>}
          onClick={(e) => e.stopPropagation()}
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Dropdown>
      </Dropdown>
    </div>
  );
};

export const MultiDropdownWithHoverTrigger = () => {
  return (
    <div className="flex h-80 items-start">
      <Dropdown position="bottom" label="Dropdown" isMultiLevel>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <Dropdown
          position="right-start"
          trigger="hover"
          customTarget={<li>Another Dropdown</li>}
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Dropdown>
      </Dropdown>
    </div>
  );
};

export const ControlledDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-start space-y-6 h-40">
      <div className="flex items-center space-x-4">
        <Button label="Open Dropdown" style="secondary" onClick={() => setIsOpen(true)} />
        <Button label="Close Dropdown" style="secondary" onClick={() => setIsOpen(false)} />
      </div>
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        label="Controlled Dropdown"
      >
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </Dropdown>
    </div>
  );
};
