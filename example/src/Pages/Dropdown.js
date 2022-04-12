import React, { useState } from "react";
import { Keyboard } from "@bigbinary/neeto-icons";

import Header from "../Header";
import { Dropdown } from "../../../lib/components";

const Dropdowns = () => {
  const [dropdownOne, setDropdownOne] = useState(false);
  const listItems = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="w-full">
      <Header title="Dropdowns" />
      <div className="p-6 space-y-6">
        <div className="flex flex-row flex-wrap items-center justify-start p-4 space-x-6 border border-indigo-500 border-dashed">
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
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Secondary Dropdown"
            buttonStyle="secondary"
            position="bottom"
            closeOnOutsideClick={false}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Text Dropdown"
            buttonStyle="text"
            position="bottom-end"
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Dropdown with custom icon"
            icon={Keyboard}
            positon="bottom-end"
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
