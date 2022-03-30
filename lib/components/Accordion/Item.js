import React from "react";
import { Right } from "@bigbinary/neeto-icons";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import classnames from "classnames";

import Collapse from "./Collapse";

const Item = ({
  id,
  title = "",
  isOpen = false,
  onClick = () => {},
  children,
  className = "",
  titleProps = {},
  iconProps = {},
}) => (
  <div
    className={classnames("neeto-ui-accordion__wrapper", {
      [className]: className,
    })}
  >
    <div
      tabIndex={0}
      role="button"
      onClick={onClick}
      id={`neeto-ui-accordion-item-${id}`}
      aria-disabled={isOpen}
      aria-expanded={isOpen}
      aria-controls={`neeto-ui-accordion-section-${id}`}
      className={classnames(
        "neeto-ui-accordion__item neeto-ui-flex neeto-ui-justify-between neeto-ui-items-center",
        {
          "neeto-ui-accordion__item--open": isOpen,
        }
      )}
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
      <div
        {...titleProps}
        className={classnames(
          "neeto-ui-accordion__item-handle neeto-ui-flex neeto-ui-flex-grow neeto-ui-items-center neeto-ui-break-words",
          {
            "neeto-ui-text-gray-700": !isOpen,
            "neeto-ui-text-gray-800": isOpen,
          }
        )}
      >
        {title}
      </div>
      {
        <motion.div
          variants={{ open: { rotate: 90 }, collapsed: { rotate: 0 } }}
          animate={isOpen ? "open" : "collapsed"}
          transition={{ duration: 0.3 }}
          className="neeto-ui-accordion__item-toggle-icon neeto-ui-flex-grow-0"
        >
          <Right
            size={16}
            className={classnames({
              "neeto-ui-text-gray-700": !isOpen,
              "neeto-ui-text-gray-800": isOpen,
            })}
            {...iconProps}
          />
        </motion.div>
      }
    </div>

    <Collapse
      role="region"
      open={isOpen}
      className="neeto-ui-accordion__drop"
      id={`neeto-ui-accordion-section-${id}`}
      aria-labelledby={`neeto-ui-accordion-item-${id}`}
    >
      {children}
    </Collapse>
  </div>
);

Item.displayName = "Accordion.Item";

Item.propTypes = {
  /**
   * To specify a unique ID to the Accordion item.
   */
  id: PropTypes.number,
  /**
   * To add Title to the Accordion item.
   */
  title: PropTypes.string,
  /**
   * To specify whether the Accordion item is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the action to be triggered on click of the Accordion item.
   */
  onClick: PropTypes.func,
  /**
   * To specify the content to be rendered inside the Accordion item.
   */
  children: PropTypes.node,
  /**
   * To pass props to Accordion title.
   */
  titleProps: PropTypes.object,
  /**
   * To pass props to Accordion toggle icon.
   */
  iconProps: PropTypes.object,
  /**
   * To provide external classnames to Accordion item.
   */
  className: PropTypes.string,
};

export default Item;
