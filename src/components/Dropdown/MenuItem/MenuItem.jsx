import React from "react";

import classnames from "classnames";
import { isPresent } from "neetocist";
import PropTypes from "prop-types";

import Tooltip from "components/Tooltip";

const MenuItem = ({ children, className, tooltipProps, ...otherProps }) => {
  const renderMenuItem = () => (
    <li
      className={classnames("neeto-ui-dropdown__popup-menu-item", className)}
      {...otherProps}
    >
      {children}
    </li>
  );

  if (isPresent(tooltipProps)) {
    return <Tooltip {...tooltipProps}>{renderMenuItem()}</Tooltip>;
  }

  return renderMenuItem();
};

MenuItem.propTypes = {
  /**
   * To specify className to be applied to the MenuItem.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the MenuItem.
   */
  children: PropTypes.node,
  /**
   * To specify the active state of the MenuItem.
   */
  isActive: PropTypes.bool,
  /**
   * To specify the props to be passed to the tooltip.
   */
  tooltipProps: PropTypes.object,
};

export default MenuItem;
