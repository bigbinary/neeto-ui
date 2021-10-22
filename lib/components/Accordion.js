import React, { useState, useEffect } from "react";
import { Right } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import { motion } from "framer-motion";

import Collapse from "./Collapse";
import Label from "./Label";

const Accordion = ({ children, defaultActiveKey = null, className = "" }) => {
  const [openTab, setOpenTab] = useState(defaultActiveKey);

  useEffect(() => {
    setOpenTab(defaultActiveKey);
  }, [defaultActiveKey]);

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) =>
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
    <div className="neeto-ui-accordion__wrapper">
      <div
        tabIndex={0}
        role="button"
        onClick={onClick}
        id={`neeto-ui-accordion-item-${id}`}
        aria-disabled={isOpen}
        aria-expanded={isOpen}
        aria-controls={`neeto-ui-accordion-section-${id}`}
        className={classnames("neeto-ui-accordion__item", {
          "neeto-ui-accordion__item--open": isOpen,
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
        {
          <motion.div
            variants={{ open: { rotate: 90 }, collapsed: { rotate: 0 } }}
            animate={isOpen ? "open" : "collapsed"}
            transition={{ duration: 0.3 }}
          >
            <Right size={16} color="#68737D" {...iconProps} />
          </motion.div>
        }
      </div>

      <Collapse
        role="region"
        open={isOpen}
        className="neeto-ui-accordion__section"
        id={`neeto-ui-accordion-section-${id}`}
        aria-labelledby={`neeto-ui-accordion-item-${id}`}
      >
        {children}
      </Collapse>
    </div>
  );
};

Accordion.Item = Item;

export default Accordion;
