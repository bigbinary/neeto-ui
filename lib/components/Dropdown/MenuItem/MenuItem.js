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
   * To specify className to be applied to the Menu Item.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Menu Item.
   */
  children: PropTypes.node,
  /**
   * To specify the active state of the Menu Item.
   */
  isActive: PropTypes.bool,
};

export default MenuItem;
