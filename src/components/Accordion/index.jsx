import React, { useState, useEffect } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";

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
  ...otherProps
}) => {
  const [openTab, setOpenTab] = useState(defaultActiveKey);

  useEffect(() => {
    setOpenTab(defaultActiveKey);
  }, [defaultActiveKey]);

  return (
    <div
      className={classnames("neeto-ui-accordions-outer-wrapper", {
        "neeto-ui-accordions-outer-wrapper--padded": padded,
        "neeto-ui-accordions-outer-wrapper--secondary":
          style === ACCORDION_STYLES.secondary,
        [className]: className,
      })}
      {...otherProps}
    >
      {React.Children.map(children, (child, index) => {
        const isSingleOrLastChild =
          isEmpty(children) || index === children.length - 1;

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
