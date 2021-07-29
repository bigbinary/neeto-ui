import React, { useState } from "react";
import { Dropdown } from "../../../lib/v2";
import Header from "../Header";

const Dropdowns = () => {
  const [loading, setLoading] = useState(false);
  const listItems = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="w-full">
      <Header title="Dropdowns" />
      <div className="p-6 space-y-6">
        <div className="flex flex-row flex-wrap items-center justify-start p-4 space-x-6 border border-indigo-500 border-dashed">
          <Dropdown
            label="Primary Dropdown"
            buttonStyle="primary"
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Secondary Dropdown"
            buttonStyle="secondary"
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Text Dropdown"
            buttonStyle="text"
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Dropdown with custom icon"
            icon="ri-send-plane-line"
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
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
