import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classnames from "classnames";

import MenuItem from "./MenuItem";

const ITEM_BTN_STYLES = {
  default: "default",
  danger: "danger",
};

const BUTTON_TYPES = { button: "button", reset: "reset", submit: "submit" };

const MenuItemButton = ({
  children,
  className,
  isActive,
  style,
  prefix,
  suffix,
  type = BUTTON_TYPES.button,
  to = "",
  href = "",
  ...otherProps
}) => {
  let Parent, elementSpecificProps;
  if (to) {
    Parent = Link;
    elementSpecificProps = { to };
  } else if (href) {
    Parent = "a";
    elementSpecificProps = { href };
  } else {
    Parent = "button";
    elementSpecificProps = {
      type,
    };
  }
  return (
    <MenuItem>
      <Parent
        className={classnames(
          "neeto-ui-dropdown__popup-menu-item-btn",
          className,
          {
            "neeto-ui-dropdown__popup-menu-item-btn": isActive,
            "neeto-ui-dropdown__popup-menu-item-btn--style-danger":
              style === ITEM_BTN_STYLES.danger,
          }
        )}
        {...otherProps}
        {...elementSpecificProps}
      >
        {prefix && (
          <div className="neeto-ui-dropdown__popup-menu-item-btn__prefix">
            {prefix}
          </div>
        )}
        {children}
        {suffix && (
          <div className="neeto-ui-dropdown__popup-menu-item-btn__suffix">
            {suffix}
          </div>
        )}
      </Parent>
    </MenuItem>
  );
};

MenuItemButton.propTypes = {
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
  /**
   * To specify an internal route to which the Button points to.
   */
  to: PropTypes.string,
  /**
   * To specify an external link to which the Button points to.
   */
  href: PropTypes.string,
  /**
   * To specify the content to be added at the end of the input field.
   */
  suffix: PropTypes.node,
  /**
   * To specify the content to be added at the beginning of the input field.
   */
  prefix: PropTypes.node,
  /**
   * To specify the type of Button.
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
};

export default MenuItemButton;
