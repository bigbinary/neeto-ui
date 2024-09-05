import React, { useState } from "react";

import Tippy from "@tippyjs/react";
import classnames from "classnames";
import { Down } from "neetoicons";
import PropTypes from "prop-types";
import { isNil } from "ramda";

import Button from "components/Button";
import { hyphenize, noop } from "utils";

import Divider from "./Divider";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const BTN_STYLES = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  danger: "danger",
  danger_text: "danger-text",
  text: "text",
  link: "link",
};

const BTN_SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
};

const STRATEGY = { absolute: "absolute", fixed: "fixed" };

const PLACEMENT = {
  auto: "auto",
  autoStart: "auto-start",
  autoEnd: "auto-end",
  top: "top",
  topStart: "top-start",
  topEnd: "top-end",
  bottom: "bottom",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
  right: "right",
  rightStart: "right-start",
  rightEnd: "right-end",
  left: "left",
  leftStart: "left-start",
  leftEnd: "left-end",
};

const TRIGGERS = {
  click: "click",
  hover: "mouseenter focus",
  all: "mouseenter focus click",
  manual: "manual",
};

const hideOnEsc = {
  name: "hideOnEsc",
  defaultValue: true,
  fn({ hide, props: { hideOnEsc } }) {
    function onKeyDown(event) {
      if (event.key?.toLowerCase() === "escape" && hideOnEsc) hide();
    }

    return {
      onShow() {
        document.addEventListener("keydown", onKeyDown);
      },
      onHide() {
        document.removeEventListener("keydown", onKeyDown);
      },
    };
  },
};

const plugins = [hideOnEsc];

const Dropdown = ({
  icon,
  label,
  isOpen,
  onClose = noop,
  dropdownProps = {},
  position = PLACEMENT.bottomEnd,
  children,
  className,
  buttonStyle = BTN_STYLES.primary,
  buttonSize = BTN_SIZES.medium,
  buttonProps: { style, size, ...buttonProps } = {},
  customTarget,
  disabled = false,
  closeOnEsc = true,
  closeOnSelect = true,
  closeOnOutsideClick = true,
  dropdownModifiers = [],
  trigger = TRIGGERS.click,
  strategy = STRATEGY.absolute,
  onClick,
  ...otherProps
}) => {
  const [instance, setInstance] = useState(null);
  const [mounted, setMounted] = useState(false);

  const isControlled = !isNil(isOpen);

  const controlledProps = isControlled
    ? { visible: isOpen }
    : { onClickOutside: () => closeOnOutsideClick };

  const {
    classNames: dropdownClassnames,
    className: dropdownClassName,
    ...otherDropdownProps
  } = dropdownProps;

  const close = () => instance.hide();

  return (
    <Tippy
      interactive
      animation={false}
      arrow={false}
      duration={0}
      // hideOnClick determines whether the dropdown should be hidden when the user clicks outside of the dropdown.
      // https://atomiks.github.io/tippyjs/v6/all-props/#hideonclick
      hideOnClick={isControlled ? undefined : closeOnOutsideClick || "toggle"}
      hideOnEsc={closeOnEsc}
      maxWidth="none"
      offset={0}
      placement={position || PLACEMENT.bottomEnd}
      popperOptions={{ strategy, modifiers: dropdownModifiers }}
      role="dropdown"
      theme="light"
      trigger={isControlled ? undefined : TRIGGERS[trigger]}
      className={classnames("neeto-ui-dropdown", {
        [className]: className,
      })}
      content={
        mounted ? (
          <div
            data-cy={`${hyphenize(label)}-dropdown-container`}
            className={classnames("neeto-ui-dropdown__popup", {
              [dropdownClassName]: dropdownClassName,
              [dropdownClassnames]: dropdownClassnames,
            })}
            onClick={closeOnSelect ? close : noop}
            {...otherDropdownProps}
          >
            {children}
          </div>
        ) : null
      }
      onCreate={instance => instance && setInstance(instance)}
      onMount={() => setMounted(true)}
      onHidden={() => {
        onClose();
        setMounted(false);
      }}
      {...{ disabled, plugins, ...otherProps, ...controlledProps }}
    >
      {customTarget ? (
        <span
          {...{ onClick }}
          className={classnames({ "neeto-ui-cursor-not-allowed": disabled })}
        >
          {typeof customTarget === "function" ? customTarget() : customTarget}
        </span>
      ) : (
        <Button
          {...{ label, onClick }}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          disabled={disabled || buttonProps?.disabled}
          icon={icon || Down}
          iconPosition="right"
          size={size ?? buttonSize}
          style={style ?? buttonStyle}
          {...buttonProps}
        />
      )}
    </Tippy>
  );
};

Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.Divider = Divider;

Dropdown.propTypes = {
  /**
   * To specify the icon to be rendered in the Dropdown target.
   */
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * To specify the label for Dropdown target button.
   */
  label: PropTypes.string,
  /**
   * To specify whether the Dropdown is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the action to be triggered on closing the Dropdown.
   */
  onClose: PropTypes.func,
  /**
   * To specify the triggering action for Dropdown.
   */
  trigger: PropTypes.oneOf(Object.keys(TRIGGERS)),
  /**
   * To specify the positioning strategy to use. By default, it is absolute, which in the simplest cases does not require repositioning of the Dropdown.
   *
   * If your reference element is in a fixed container, use the fixed strategy
   */
  strategy: PropTypes.oneOf(Object.values(STRATEGY)),
  /**
   * To specify the classes to be passed to the Dropdown menu.
   */
  dropdownProps: PropTypes.object,
  /**
   * To specify the position of the Dropdown menu.
   */
  position: PropTypes.oneOf(Object.values(PLACEMENT)),
  /**
   * To specify the content to be rendered inside the Dropdown.
   */
  children: PropTypes.node,
  /**
   * To specify whether the Dropdown menu width needs to be set to auto or not.
   */
  autoWidth: PropTypes.bool,
  /**
   * To provide external classnames to Dropdown target wrapper.
   */
  className: PropTypes.string,
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-success mb-2">
   * New
   * </div>
   * To specify the size of the button to be rendered as the Dropdown target.
   */
  buttonSize: PropTypes.oneOf(Object.values(BTN_SIZES)),
  /**
   * To specify the style of the button to be rendered as the Dropdown target.
   */
  buttonStyle: PropTypes.oneOf(Object.values(BTN_STYLES)),
  /**
   * To specify the props to be passed to the Dropdown target button.
   */
  buttonProps: PropTypes.object,
  /**
   * To provide a custom target to be rendered instead of the default button target.
   */
  customTarget: PropTypes.node,
  /**
   * To specify whether the Dropdown is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify whether the Dropdown should close on pressing esc key.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the Dropdown should close on selecting an option.
   */
  closeOnSelect: PropTypes.bool,
  /**
   * To specify whether the Dropdown should close on clicking outside the Dropdown content. (will not have any effect if the component is controlled.)
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * To provide custom modifiers to Dropdown component.
   */
  dropdownModifiers: PropTypes.array,
  /**
   * To specify whether the Dropdown should be multilevel.
   */
  isMultiLevel: PropTypes.bool,
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Removed
   * </div>
   * _Use `dropdownProps` props instead._
   *
   */
  ulProps: PropTypes.object,
  /**
   * To specify the action that should be triggered when clicking outside of the controlled dropdown component.
   */
  onClickOutside: PropTypes.func,
};

export default Dropdown;
