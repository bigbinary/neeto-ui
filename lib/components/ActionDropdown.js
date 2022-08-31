import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Button from "./Button";
import Dropdown from "./Dropdown";

const noop = () => {};

const BTN_STYLES = {
  primary: "primary",
  secondary: "secondary",
};

const BTN_SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
};

const ActionDropdown = ({
  label = "",
  buttonStyle = BTN_STYLES.primary,
  buttonSize = BTN_SIZES.medium,
  disabled = false,
  onClick = noop,
  buttonProps: { style, size, ...buttonProps } = {},
  dropdownProps = {},
  className = "",
  children,
}) => (
  <div className={classnames(["neeto-ui-action-dropdown", className])}>
    <Button
      style={style ?? buttonStyle}
      data-testid="action-dropdown-btn"
      label={label}
      size={size ?? buttonSize}
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}
    />
    <Dropdown
      buttonStyle={style ?? buttonStyle}
      disabled={disabled}
      buttonProps={{ size: size ?? buttonSize }}
      {...dropdownProps}
    >
      {children}
    </Dropdown>
  </div>
);

ActionDropdown.Menu = Dropdown.Menu;
ActionDropdown.MenuItem = Dropdown.MenuItem;
ActionDropdown.Divider = Dropdown.Divider;

ActionDropdown.propTypes = {
  /**
   * To specify the text to be displayed inside the button.
   */
  label: PropTypes.string,
  /**
   * To specify the style of the button to be rendered as the action dropdown target.
   */
  buttonStyle: PropTypes.oneOf(Object.values(BTN_STYLES)),
  /**
   * To specify the size of the action dropdown.
   */
  buttonSize: PropTypes.oneOf(Object.values(BTN_SIZES)),
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
  /**
   * * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Deprecated
   * </div>
   * _Use `buttonStyle` prop instead._
   */
  style: PropTypes.oneOf(Object.values(BTN_STYLES)),
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Deprecated
   * </div>
   * _Use `buttonSize` prop instead._
   */
  size: PropTypes.oneOf(Object.values(BTN_SIZES)),
};

export default ActionDropdown;
