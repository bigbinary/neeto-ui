import React, { useState } from "react";
import classnames from "classnames";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import { Down } from "@bigbinary/neeto-icons";

import Button from "../Button";
import { hyphenize } from "../../common";
import MenuItem from "./MenuItem";
import Divider from "./Divider";
import Menu from "./Menu";

const BTN_STYLES = {
  primary: "primary",
  secondary: "secondary",
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

const STRATEGY = {
  absolute: "absolute",
  fixed: "fixed",
};

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
};

const hideOnEsc = {
  name: "hideOnEsc",
  defaultValue: true,
  fn({ hide, props: { hideOnEsc, onClose } }) {
    function onKeyDown(event) {
      if (event.key.toLowerCase() === "escape" && hideOnEsc) {
        onClose();
        hide();
      }
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

const Dropdown = ({
  icon,
  label,
  isOpen,
  onClose = () => {},
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

  const isControlled = !(isOpen === undefined || isOpen === null);

  const controlledProps = isControlled
    ? {
      visible: isOpen,
      onClickOutside: onClose,
    }
    : {
      onClickOutside: () => {
        onClose();
        return closeOnOutsideClick;
      },
    };

  const {
    classNames: dropdownClassname,
    ...otherDropdownProps
  } = dropdownProps;

  // hideOnClick determines whether the dropdown should be hidden when the user clicks outside of the dropdown.
  // https://atomiks.github.io/tippyjs/v6/all-props/#hideonclick
  const hideOnClick = isControlled ? false : closeOnOutsideClick || "toggle";

  const close = () => {
    instance.hide();
    onClose();
  };

  return (
    <Tippy
      role="dropdown"
      onClose={onClose}
      trigger={TRIGGERS[trigger]}
      plugins={[hideOnEsc]}
      hideOnEsc={closeOnEsc}
      hideOnClick={hideOnClick}
      interactive
      placement={position || PLACEMENT.bottomEnd}
      arrow={false}
      offset={0}
      animation={false}
      theme="light"
      className={classnames("neeto-ui-dropdown", {
        [className]: className,
      })}
      duration={0}
      onCreate={(instance) => instance && setInstance(instance)}
      popperOptions={{
        strategy,
        modifiers: dropdownModifiers,
      }}
      maxWidth="none"
      onMount={() => {
        setMounted(true);
      }}
      onHidden={() => {
        setMounted(false);
      }}
      content={
        mounted ? (
          <div
            className={classnames("neeto-ui-dropdown__popup", {
              [dropdownClassname]: dropdownClassname,
            })}
            data-cy={`${hyphenize(label)}-dropdown-container`}
            onClick={closeOnSelect ? close : () => {}}
            {...otherDropdownProps}
          >
            {children}
          </div>
        ) : null
      }
      {...otherProps}
      {...controlledProps}
    >
      {customTarget ? (
        <span onClick={onClick}>
          {typeof customTarget === "function" ? customTarget() : customTarget}
        </span>
      ) : (
        <Button
          label={label}
          style={style ?? buttonStyle}
          size={size ?? buttonSize}
          icon={icon || Down}
          iconPosition="right"
          disabled={disabled || buttonProps?.disabled}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          onClick={onClick}
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
};

export default Dropdown;
