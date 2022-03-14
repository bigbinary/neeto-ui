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

const ActionDropdown = ({
  label = "",
  style = "primary",
  size = "default",
  disabled = false,
  onClick = noop,
  buttonProps = {},
  dropdownProps = {},
  className = "",
  children,
}) => (
  <div className={classnames(["neeto-ui-action-dropdown", className])}>
    <Button
      style={style}
      data-testid="action-dropdown-btn"
      label={label}
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}
    />
    <Dropdown
      buttonStyle={style}
      disabled={disabled}
      buttonProps={{ size: size, ...buttonProps }}
      {...dropdownProps}
    >
      {children}
    </Dropdown>
  </div>
);

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
