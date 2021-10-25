import React, { useState, useEffect } from "react";
import { Right } from "@bigbinary/neeto-icons";
import { motion } from "framer-motion";
import classnames from "classnames";
import PropTypes from "prop-types";

import Collapse from "./Collapse";

const ACCORDION_STYLES = {
  primary: "primary",
  secondary: "secondary",
};

const Accordion = ({
  children,
  defaultActiveKey = null,
  padded = false,
  style = "primary",
  className = "",
}) => {
  const [openTab, setOpenTab] = useState(defaultActiveKey);

  useEffect(() => {
    setOpenTab(defaultActiveKey);
  }, [defaultActiveKey]);

  return (
    <div
      className={classnames({
        "p-6": padded,
        "neeto-ui-bg-gray-100": style === ACCORDION_STYLES.secondary,
        [className]: className,
      })}
    >
      {React.Children.map(children, (child, index) => {
        const isSingleOrLastChild =
          !children.length || index === children.length - 1;
        return React.cloneElement(child, {
          id: index,
          key: index,
          isOpen: openTab === index,
          className: classnames(child.props.className, {
            "neeto-ui-accordion__wrapper--last-item": isSingleOrLastChild,
          }),
          onClick: () => {
            if (openTab === index) {
              setOpenTab(null);
            } else {
              setOpenTab(index);
            }
            child.props.onClick && child.props.onClick();
          },
        });
      })}
    </div>
  );
};

export const Item = ({
  id,
  title,
  isOpen = false,
  onClick,
  children,
  className,
  titleProps = {},
  iconProps = {},
}) => {
  return (
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
};

Accordion.defaultProps = {
  padded: false,
  style: "primary"
};

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

Accordion.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOf(Object.values(ACCORDION_STYLES)),
  /**
   * Add padding to the Accordion container
   */
  padded: PropTypes.bool,
  /**
   * Index of the Accordion item to be opened initially
   */
  defaultActiveKey: PropTypes.number,
  /**
   * Custom class applied to Accordion container
   */
  className: PropTypes.string,
};

Accordion.Item = Item;

export default Accordion;
