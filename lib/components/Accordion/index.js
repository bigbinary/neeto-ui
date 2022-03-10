import React, { useState, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Item from "./Item";

const ACCORDION_STYLES = {
  primary: "primary",
  secondary: "secondary",
};

const Accordion = ({
  children,
  defaultActiveKey = null,
  padded = false,
  style = ACCORDION_STYLES.primary,
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
            setOpenTab(openTab === index ? null : index);
            child.props.onClick && child.props.onClick();
          },
        });
      })}
    </div>
  );
};

Accordion.propTypes = {
  /**
   * To specify the content to be rendered inside the Accordion.
   */
  children: PropTypes.node,
  /**
   * To set the style of the Accordion.
   */
  style: PropTypes.oneOf(Object.values(ACCORDION_STYLES)),
  /**
   * To add padding to the Accordion container.
   */
  padded: PropTypes.bool,
  /**
   * Index of the Accordion item to be opened initially.
   */
  defaultActiveKey: PropTypes.number,
  /**
   * To provide external classnames to Accordion container.
   */
  className: PropTypes.string,
};

Accordion.Item = Item;

export default Accordion;
