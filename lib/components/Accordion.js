import React, { useState } from "react";
import classnames from "classnames";
import Collapse from "./Collapse";
import Label from "./Label";

const Accordion = ({ children, defaultActiveKey = null, className = "" }) => {
  const [openTab, setOpenTab] = useState(defaultActiveKey);
  return (
    <div className={className}>
      {React.Children.toArray(children).map((child, index) =>
        React.cloneElement(child, {
          onClick: () => {
            if (openTab === index) {
              setOpenTab(null);
            } else {
              setOpenTab(index);
            }
            child.props.onClick && child.props.onClick();
          },
          isOpen: openTab === index,
          key: index,
        })
      )}
    </div>
  );
};

const Item = ({ title, isOpen = false, onClick, children }) => {
  return (
    <div className="border-b">
      <div
        className="flex justify-between py-5 cursor-pointer"
        onClick={onClick}
      >
        <Label className="font-medium">{title}</Label>
        <i
          className={classnames(
            ["transform ri-arrow-down-s-line ease-in-out duration-300"],
            {
              "-rotate-180": isOpen,
            }
          )}
        ></i>
      </div>

      <Collapse className="mb-6" open={isOpen}>
        {children}
      </Collapse>
    </div>
  );
};

Accordion.Item = Item;

export default Accordion;
