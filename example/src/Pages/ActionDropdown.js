import React from "react";

import Header from "../Header";
import { ActionDropdown, Toastr } from "../../../lib/components";

const ActionDropdowns = () => {
  const listItems = ["Option 1", "Option 2", "Option 3"];

  const handleClick = (message) => {
    Toastr.info(message);
  };

  return (
    <div className="w-full">
      <Header title="ActionDropdowns" />
      <div className="p-6 space-y-6">
        <div className="flex flex-row flex-wrap items-center justify-start p-4 space-x-6 border border-indigo-500 border-dashed">
          <ActionDropdown
            label="Primary"
            style="primary"
            onClick={() => handleClick("Clicked Primary ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            label="Secondary"
            style="secondary"
            onClick={() => handleClick("Clicked Secondary ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            label="Disabled"
            onClick={() => handleClick("Clicked Disabled ActionDropdown")}
            disabled
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            size="large"
            label="Primary Large"
            onClick={() => handleClick("Clicked Primary Large ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            size="large"
            style="secondary"
            label="Secondary Large"
            onClick={() => handleClick("Clicked Secondary Large ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            size="large"
            label="Disabled Large"
            onClick={() => handleClick("Clicked Disabled Large ActionDropdown")}
            disabled
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
        </div>
      </div>
    </div>
  );
};

export default ActionDropdowns;
