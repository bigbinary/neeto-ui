import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Menu = ({ children, className, ...otherProps }) => (
  <ul
    className={classnames("neeto-ui-dropdown__popup-menu", className)}
    {...otherProps}
  >
    {children}
  </ul>
);

Menu.propTypes = {
  /**
   * To specify className to be applied to the menu.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the menu.
   */
  children: PropTypes.node,
};

export default Menu;
