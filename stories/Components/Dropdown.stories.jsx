import React, { useState } from "react";
import { Settings } from "@bigbinary/neeto-icons";

import Dropdown from "../../lib/components/Dropdown";

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
};

const listItems = ["Option 1", "Option 2", "Option 3"];

export const PrimaryDropdown = (args) => {
  const [dropdownOne, setDropdownOne] = useState(false);

  return (
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
      closeOnOutsideClick={false}
    >
      {listItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </Dropdown>
  );
};

export const SecondaryDropdown = (args) => {
  return (
    <Dropdown
      label="Secondary Dropdown"
      buttonStyle="secondary"
      position="bottom-end"
    >
      {listItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </Dropdown>
  );
};

export const TextDropdown = (args) => {
  return (
    <Dropdown label="Text Dropdown" buttonStyle="text" position="bottom-end">
      {listItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </Dropdown>
  );
};

export const CustomIcon = (args) => {
  return (
    <Dropdown
      label="Dropdown with custom icon"
      icon={Settings}
      position="bottom-end"
    >
      {listItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </Dropdown>
  );
};

export const DropdownStory = (args) => {
  return (
    <Dropdown label="Dropdown" position="bottom-end" {...args}>
      {listItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </Dropdown>
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
    <div className="flex">
      <Dropdown position="bottom" label="Dropdown" isMultiLevel>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <Dropdown
          position="right-start"
          customTarget={() => <li>Another Dropdown</li>}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          <Dropdown
            position="right-start"
            customTarget={() => <li>Third Dropdown</li>}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
        </Dropdown>
      </Dropdown>
    </div>
  );
};

export const MultiDropdownWithHoverTrigger = () => {
  return (
    <div className="flex">
      <Dropdown position="bottom" label="Dropdown" isMultiLevel>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <Dropdown
          position="right-start"
          trigger="hover"
          customTarget={() => <li>Another Dropdown</li>}
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          <Dropdown
            position="right-start"
            trigger="hover"
            customTarget={() => <li>Third Dropdown</li>}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
        </Dropdown>
      </Dropdown>
    </div>
  );
};
