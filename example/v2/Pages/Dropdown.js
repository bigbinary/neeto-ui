import React, { useState } from "react";
import { Dropdown } from "../../../lib/v2";
import Header from "../Header";

const Dropdowns = () => {
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setLoading(!loading);
  };
  const listItems = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="w-full">
      <Header title="Dropdowns" />
      <div className="flex flex-row flex-wrap items-center justify-between h-32 p-4">
        <Dropdown
          label="Primary Dropdown"
          buttonStyle="primary"
          className="ml-3"
          position="bottom-end"
          closeOnSelect
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Dropdown>
        <Dropdown
          label="Secondary Dropdown"
          buttonStyle="secondary"
          className="ml-3"
          position="bottom-end"
          closeOnSelect
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Dropdown>
        <Dropdown
          label="Text Dropdown"
          buttonStyle="text"
          className="ml-3"
          position="bottom-end"
          closeOnSelect
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Dropdown>
        <Dropdown
          label="Dropdown with custom icon"
          buttonStyle="primary"
          className="ml-3"
          position="bottom-end"
          icon="ri-send-plane-line"
          closeOnSelect
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Dropdown>
        <Dropdown
          label="Dropdown with Action Button"
          actionButtonProps={{
            label: "Add New Item",
            style: "seconary",
            icon: "ri-add-line",
            onClick: () => alert("You clicked on action button in dropdown"),
          }}
          buttonStyle="secondary"
          className="ml-3"
          position="bottom-end"
          closeOnSelect
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default Dropdowns;
