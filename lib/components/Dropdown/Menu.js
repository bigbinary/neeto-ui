import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Menu = ({ children, className, ...otherProps }) => (
  <li
    className={classnames("neeto-ui-dropdown__popup-menu-wrapper", className)}
  >
    <ul className="neeto-ui-dropdown__popup-menu" {...otherProps}>
      {children}
    </ul>
  </li>
);

Menu.propTypes = {
  /**
   * To specify className to be applied to the Menu List.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Menu List.
   */
  children: PropTypes.node,
};

export default Menu;
