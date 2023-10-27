import React from "react";

import classnames from "classnames";
import { motion } from "framer-motion";
import { Right } from "neetoicons";
import PropTypes from "prop-types";

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
      aria-controls={`neeto-ui-accordion-section-${id}`}
      aria-disabled={isOpen}
      aria-expanded={isOpen}
      id={`neeto-ui-accordion-item-${id}`}
      role="button"
      tabIndex={0}
      className={classnames(
        "neeto-ui-accordion__item neeto-ui-flex neeto-ui-justify-between neeto-ui-items-center",
        { "neeto-ui-accordion__item--open": isOpen }
      )}
      onClick={onClick}
      onKeyDown={e => {
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
        className="neeto-ui-accordion__item-handle neeto-ui-flex neeto-ui-flex-grow neeto-ui-items-center neeto-ui-break-words"
      >
        {title}
      </div>
      <motion.div
        animate={isOpen ? "open" : "collapsed"}
        className="neeto-ui-accordion__item-toggle-icon neeto-ui-flex-grow-0"
        transition={{ duration: 0.3 }}
        variants={{ open: { rotate: 90 }, collapsed: { rotate: 0 } }}
      >
        <Right size={16} {...iconProps} />
      </motion.div>
    </div>
    <Collapse
      aria-labelledby={`neeto-ui-accordion-item-${id}`}
      className="neeto-ui-accordion__drop"
      id={`neeto-ui-accordion-section-${id}`}
      open={isOpen}
      role="region"
    >
      {children}
    </Collapse>
  </div>
);

Item.displayName = "Accordion.Item";

Item.propTypes = {
  /**
   * To specify a unique ID to the AccordionItem.
   */
  id: PropTypes.number,
  /**
   * To add title to the AccordionItem.
   */
  title: PropTypes.string,
  /**
   * To specify whether the Accordion item is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the action to be triggered on click of the AccordionItem.
   */
  onClick: PropTypes.func,
  /**
   * To specify the content to be rendered inside the AccordionItem.
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
