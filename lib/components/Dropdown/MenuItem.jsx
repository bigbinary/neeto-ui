import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { ITEM_BTN_STYLES } from "./constants";

const MenuItem = ({
  children,
  className,
  isActive,
  style,
  ...otherProps
}) => {
  return (
    <li
      className={classnames("neeto-ui-dropdown__popup-menu-item", className)}
      {...otherProps}
    >
      <button
        className={classnames("neeto-ui-dropdown__popup-menu-item-btn", {
          "neeto-ui-dropdown__popup-menu-item-btn": isActive,
          "neeto-ui-dropdown__popup-menu-item-btn--style-danger":
          style === ITEM_BTN_STYLES.danger,
        })}
      >
        {children}
      </button>
    </li>
  );
};

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
