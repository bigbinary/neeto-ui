import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Collapse from "./Collapse";
import Label from "./Label";

const Accordion = ({ children, defaultActiveKey = null, className = "" }) => {
  const [openTab, setOpenTab] = useState(defaultActiveKey);

  useEffect(() => {
    setOpenTab(defaultActiveKey);
  }, [defaultActiveKey]);

  return (
    <div className={className}>
      {React.Children.toArray(children).map((child, index) =>
        React.cloneElement(child, {
          id: index,
          key: index,
          isOpen: openTab === index,
          onClick: () => {
            if (openTab === index) {
              setOpenTab(null);
            } else {
              setOpenTab(index);
            }
            child.props.onClick && child.props.onClick();
          },
        })
      )}
    </div>
  );
};

const Item = ({
  id,
  title,
  isOpen = false,
  onClick,
  children,
  labelProps = {},
  iconProps = {},
}) => {
  return (
    <div className="nui-accordion__wrapper">
      <div
        tabIndex={0}
        role="button"
        onClick={onClick}
        id={`nui-accordion-item-${id}`}
        aria-disabled={isOpen}
        aria-expanded={isOpen}
        aria-controls={`nui-accordion-section-${id}`}
        className={classnames("nui-accordion__item", {
          "nui-accordion__item--open": isOpen,
        })}
        onKeyDown={(e) => {
          switch (e.key) {
            case " ":
            case "Enter":
              onClick();
              break;
            default:
          }
        }}
      >
        <Label {...labelProps}>{title}</Label>
        <i className="ri-arrow-down-s-line" {...iconProps}></i>
      </div>

      <Collapse
        role="region"
        open={isOpen}
        hidden={!isOpen}
        className="nui-accordion__section"
        id={`nui-accordion-section-${id}`}
        aria-labelledby={`nui-accordion-item-${id}`}
      >
        {children}
      </Collapse>
    </div>
  );
};

Accordion.Item = Item;

export default Accordion;
