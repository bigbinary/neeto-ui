import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Button from "./Button";
import Dropdown from "./Dropdown";

const noop = () => {};

const ACTION_DROPDOWN_BTN_STYLES = {
  primary: "primary",
  secondary: "secondary",
};

const ACTION_DROPDOWN_SIZES = { large: "large", default: "default" };

const ITEM_BTN_STYLES = {
  default: "default",
  danger: "danger",
};

const Menu = ({ children, ...otherProps }) => {
  return (
    <li className="neeto-ui-dropdown__popup-menu-wrapper">
      <ul className="neeto-ui-dropdown__popup-menu" {...otherProps}>
        {children}
      </ul>
    </li>
  );
};

const MenuItem = ({ children, isActive, style, ...otherProps }) => {
  return (
    <li className="neeto-ui-dropdown__popup-menu-item" {...otherProps}>
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

const Divider = ({ ...otherProps }) => {
  return <li className="neeto-ui-dropdown__popup-divider" {...otherProps} />;
};

const ActionDropdown = ({
  label = "",
  style = "primary",
  size = "default",
  disabled = false,
  onClick = noop,
  buttonProps: { style: buttonStyle, size: buttonSize, ...buttonProps } = {},
  dropdownProps = {},
  className = "",
  children,
}) => (
  <div className={classnames(["neeto-ui-action-dropdown", className])}>
    <Button
      style={buttonStyle ?? style}
      data-testid="action-dropdown-btn"
      label={label}
      size={buttonSize ?? size}
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}
    />
    <Dropdown
      buttonStyle={buttonStyle ?? style}
      disabled={disabled}
      buttonProps={{ size: buttonSize ?? size }}
      {...dropdownProps}
    >
      {children}
    </Dropdown>
  </div>
);

ActionDropdown.Menu = Menu;
ActionDropdown.MenuItem = MenuItem;
ActionDropdown.Divider = Divider;

ActionDropdown.propTypes = {
  /**
   * To specify the text to be displayed inside the button.
   */
  label: PropTypes.string,
  /**
   * To specify the style of the button to be rendered as the action dropdown target.
   */
  style: PropTypes.oneOf(Object.values(ACTION_DROPDOWN_BTN_STYLES)),
  /**
   * To specify the size of the action dropdown.
   */
  size: PropTypes.oneOf(Object.values(ACTION_DROPDOWN_SIZES)),
  /**
   * To specify whether the action dropdown is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the action to be triggered on click of the button.
   */
  onClick: PropTypes.func,
  /**
   * To specify the props to be passed to the action button and dropdown target button.
   */
  buttonProps: PropTypes.object,
  /**
   * To specify the props to be passed to the dropdown target.
   */
  dropdownProps: PropTypes.object,
  /**
   * To provide external classnames to action dropdown target wrapper.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Dropdown.
   */
  children: PropTypes.node,
};

export default ActionDropdown;
