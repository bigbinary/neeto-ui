import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import "styles/common";
import "styles/components/_tab";

import Item from "./Item";

const SIZES = { large: "large", small: "small" };

const Tab = ({
  size = SIZES.small,
  noUnderline = false,
  children,
  className = "",
  ...otherProps
}) => (
  <div
    data-cy="tab-container"
    className={classnames(
      {
        "neeto-ui-tab__wrapper neeto-ui-flex": true,
        "neeto-ui-tab__wrapper--size-large": size === SIZES.large,
        "neeto-ui-tab__wrapper--size-small": size === SIZES.small,
        "neeto-ui-tab__wrapper--underline-none": noUnderline,
      },
      [className]
    )}
    {...otherProps}
  >
    {children}
  </div>
);

Tab.propTypes = {
  /**
   * To hide the underline
   */
  noUnderline: PropTypes.bool,
  /**
   * Set the size of the Tabs.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To add content inside the Tab
   */
  children: PropTypes.node,
  /**
   * Extra classes can be provided to the Tab
   */
  className: PropTypes.string,
};

Tab.Item = Item;

export default Tab;
