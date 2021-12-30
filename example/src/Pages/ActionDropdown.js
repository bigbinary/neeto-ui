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
            label="Primary ActionDropdown"
            style="primary"
            onClick={() => handleClick("Clicked primary ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            label="Secondary ActionDropdown"
            style="secondary"
            onClick={() => handleClick("Clicked secondary ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            label="Text ActionDropdown"
            style="text"
            onClick={() => handleClick("Clicked text ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            label="Disabled ActionDropdown"
            disabled
            onClick={() => handleClick("Clicked disabled ActionDropdown")}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ActionDropdown>
          <ActionDropdown
            label="Large ActionDropdown"
            size="large"
            onClick={() => handleClick("Clicked large ActionDropdown")}
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
