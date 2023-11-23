import React, { forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Menu = forwardRef(({ children, className, ...otherProps }, ref) => (
  <ul
    {...{ ref }}
    className={classnames("neeto-ui-dropdown__popup-menu", className)}
    {...otherProps}
  >
    {children}
  </ul>
));

Menu.displayName = "Menu";

Menu.propTypes = {
  /**
   * To specify className to be applied to the Menu.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Menu.
   */
  children: PropTypes.node,
};

export default Menu;
