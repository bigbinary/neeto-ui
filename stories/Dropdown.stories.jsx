import React, { useState } from "react";
import { Down } from "@bigbinary/neeto-icons";

import Dropdown from "../lib/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
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
    <Dropdown
      label="Text Dropdown"
      buttonStyle="text"
      position="bottom-end"
    >
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
      icon="ri-send-plane-line"
      position="bottom-end"
    >
      {listItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </Dropdown>
  );
};
