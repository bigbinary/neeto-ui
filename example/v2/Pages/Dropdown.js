import React, { useState } from "react";
import { Dropdown } from "../../../lib/v2";
import Header from "../Header";

const Dropdowns = () => {
  const [loading, setLoading] = useState(false);
  const [dropdownOne, setDropdownOne] = useState(false);
  const [dropdownTwo, setDropdownTwo] = useState(false);
  const [dropdownThree, setDropdownThree] = useState(false);
  const [dropdownFour, setDropdownFour] = useState(false);
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
            // isOpen={dropdownOne}
            // buttonProps={{
            //   onClick: () => {
            //     setDropdownOne(!dropdownOne);
            //   },
            // }}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Secondary Dropdown"
            buttonStyle="secondary"
            closeOnOutsideClick={false}
            position="bottom"
            // isOpen={dropdownTwo}
            // buttonProps={{
            //   onClick: () => {
            //     setDropdownTwo(!dropdownTwo);
            //   },
            // }}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Text Dropdown"
            buttonStyle="text"
            closeOnOutsideClick={false}
            position="bottom-start"
            // isOpen={dropdownThree}
            // buttonProps={{
            //   onClick: () => {
            //     setDropdownThree(!dropdownThree);
            //   },
            // }}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </Dropdown>
          <Dropdown
            label="Dropdown with custom icon"
            icon="ri-send-plane-line"
            positon="bottom-end"
            // isOpen={dropdownFour}
            // buttonProps={{
            //   onClick: function () {
            //     console.log("four");
            //     setDropdownFour(!dropdownFour);
            //   },
            // }}
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
