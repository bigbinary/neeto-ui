import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

const MenuItem = ({ children, className, ...otherProps }) => (
  <li
    className={classnames("neeto-ui-dropdown__popup-menu-item", className)}
    {...otherProps}
  >
    {children}
  </li>
);

MenuItem.propTypes = {
  /**
   * To specify className to be applied to the menu item.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the menu item.
   */
  children: PropTypes.node,
  /**
   * To specify the active state of the menu item.
   */
  isActive: PropTypes.bool,
};

export default MenuItem;
