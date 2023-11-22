import React, { forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import MenuItem from "./MenuItem";

const ITEM_BTN_STYLES = { default: "default", danger: "danger" };

const BUTTON_TYPES = { button: "button", reset: "reset", submit: "submit" };

const MenuItemButton = forwardRef(
  (
    {
      children,
      className,
      isActive,
      isDisabled,
      style = ITEM_BTN_STYLES.default,
      prefix,
      suffix,
      type = BUTTON_TYPES.button,
      to = "",
      href = "",
      ...otherProps
    },
    ref
  ) => {
    let Parent, elementSpecificProps;
    if (to) {
      Parent = Link;
      elementSpecificProps = { to };
    } else if (href) {
      Parent = "a";
      elementSpecificProps = { href };
    } else {
      Parent = "button";
      elementSpecificProps = { type };
    }

    return (
      <MenuItem>
        <Parent
          disabled={isDisabled}
          className={classnames(
            "neeto-ui-dropdown__popup-menu-item-btn",
            className,
            {
              "neeto-ui-dropdown__popup-menu-item-btn--active": isActive,
              "neeto-ui-dropdown__popup-menu-item-btn--disabled": isDisabled,
              "neeto-ui-dropdown__popup-menu-item-btn--style-danger":
                style === ITEM_BTN_STYLES.danger,
            }
          )}
          {...{ ref, ...otherProps, ...elementSpecificProps }}
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
  }
);

MenuItemButton.displayName = "MenuItemButton";

MenuItemButton.propTypes = {
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
   * To specify whether the MenuItem is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * To specify an internal route to which the button points to.
   */
  to: PropTypes.string,
  /**
   * To specify an external link to which the button points to.
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
   * To specify the type of button.
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  /**
   * To specify the style of button.
   */
  style: PropTypes.oneOf(Object.values(ITEM_BTN_STYLES)),
};

export default MenuItemButton;
