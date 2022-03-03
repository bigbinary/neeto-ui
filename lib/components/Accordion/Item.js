import React from "react";
import { Right } from "@bigbinary/neeto-icons";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import classnames from "classnames";

import Collapse from "./Collapse";

const Item = ({
  id,
  title,
  isOpen = false,
  onClick,
  children,
  className,
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
      <div
        {...titleProps}
        className={classnames(
          "neeto-ui-accordion__item-handle flex flex-grow-1 items-center",
          {
            "neeto-ui-text-gray-600": !isOpen,
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
          className="neeto-ui-accordion__item-toggle-icon flex-grow-0"
        >
          <Right size={16} color="#68737D" {...iconProps} />
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
  id: PropTypes.number,
  /**
   * Title of the Accordion
   */
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  /**
   * Props passed to Accordion title
   */
  titleProps: PropTypes.object,
  /**
   * Props passed to Accordion toggle icon
   */
  iconProps: PropTypes.object,
};

export default Item;
