import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import "styles/common";
import "styles/components/_action-dropdown";
import { noop } from "utils";

import Button from "./Button";
import Dropdown from "./Dropdown";

const BTN_STYLES = { primary: "primary", secondary: "secondary" };

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
      {...{ disabled, label, onClick }}
      data-testid="action-dropdown-btn"
      size={size ?? buttonSize}
      style={style ?? buttonStyle}
      {...buttonProps}
    />
    <Dropdown
      {...{ disabled }}
      buttonProps={{ size: size ?? buttonSize }}
      buttonStyle={style ?? buttonStyle}
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
   * To specify the style of the button to be rendered as the ActionDropdown target.
   */
  buttonStyle: PropTypes.oneOf(Object.values(BTN_STYLES)),
  /**
   * To specify the size of the ActionDropdown.
   */
  buttonSize: PropTypes.oneOf(Object.values(BTN_SIZES)),
  /**
   * To specify whether the ActionDropdown is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the action to be triggered on click of the button.
   */
  onClick: PropTypes.func,
  /**
   * To specify the props to be passed to the action button and Dropdown target button.
   */
  buttonProps: PropTypes.object,
  /**
   * To specify the props to be passed to the Dropdown target.
   */
  dropdownProps: PropTypes.object,
  /**
   * To provide external classnames to ActionDropdown target wrapper.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Dropdown.
   */
  children: PropTypes.node,
  /**
   * * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Removed
   * </div>
   * _Use `buttonStyle` prop instead._
   */
  style: PropTypes.oneOf(Object.values(BTN_STYLES)),
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Removed
   * </div>
   * _Use `buttonSize` prop instead._
   */
  size: PropTypes.oneOf(Object.values(BTN_SIZES)),
};

export default ActionDropdown;
