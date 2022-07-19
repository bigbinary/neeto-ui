import React, { useState } from "react";
import { Settings } from "@bigbinary/neeto-icons";

import Dropdown from "../../lib/components/Dropdown/";
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
  return (
    <div className="h-40">
      <Dropdown label="Dropdown" {...args}>
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
DropdownStory.storyName = "DropDown";
DropdownStory.args = {
  buttonProps: {
    size: "large",
  },
};

export const PrimaryDropdown = () => {
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

export const SecondaryDropdown = () => {
  return (
    <div className="h-40">
      <Dropdown
        label="Secondary Dropdown"
        buttonStyle="secondary"
        position="bottom-end"
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

export const TextDropdown = () => {
  return (
    <div className="h-40">
      <Dropdown label="Text Dropdown" buttonStyle="text" position="bottom-end">
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

export const CustomIcon = () => {
  return (
    <div className="h-40">
      <Dropdown
        label="Dropdown with custom icon"
        icon={Settings}
        position="bottom-end"
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

export const MultiDropdownWithClickTrigger = () => {
  return (
    <div className="flex h-80 items-start">
      <Dropdown label="Dropdown" isMultiLevel>
        <Dropdown.Menu>
          {listItems.map((item, idx) => (
            <Dropdown.MenuItem key={idx}>{item}</Dropdown.MenuItem>
          ))}
          <Dropdown.Divider />
          <Dropdown
            position="right-start"
            customTarget={<li>Another Dropdown</li>}
            onClick={(e) => e.stopPropagation()}
          >
            <Dropdown.Menu>
              {listItems.map((item, idx) => (
                <Dropdown.MenuItem key={idx}>{item}</Dropdown.MenuItem>
              ))}
              <Dropdown.Divider />
              <Dropdown.MenuItem style="danger">Delete</Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const MultiDropdownWithHoverTrigger = () => {
  return (
    <div className="flex h-80 items-start">
      <Dropdown position="bottom" label="Dropdown" isMultiLevel>
        <Dropdown.Menu>
          {listItems.map((item, idx) => (
            <Dropdown.MenuItem key={idx}>{item}</Dropdown.MenuItem>
          ))}
          <Dropdown.Divider />
          <Dropdown
            position="right-start"
            trigger="hover"
            customTarget={<li>Another Dropdown</li>}
          >
            <Dropdown.Menu>
              {listItems.map((item, idx) => (
                <Dropdown.MenuItem key={idx}>{item}</Dropdown.MenuItem>
              ))}
              <Dropdown.Divider />
              <Dropdown.MenuItem style="danger">Delete</Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const ControlledDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
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
