import React, { useState } from "react";
import classnames from "classnames";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import { Down } from "@bigbinary/neeto-icons";

import Button from "./Button";
import { hyphenize } from "../common";

const DROPDOWN_BTN_STYLES = {
  primary: "primary",
  secondary: "secondary",
  text: "text",
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
  fn({ hide, props: { hideOnEsc } }) {
    function onKeyDown(event) {
      if (event.key.toLowerCase() === "escape" && hideOnEsc) {
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
  ulProps = {},
  position = PLACEMENT.bottomEnd,
  children,
  className,
  buttonStyle = DROPDOWN_BTN_STYLES.primary,
  buttonProps,
  customTarget,
  disabled = false,
  closeOnEsc = true,
  closeOnSelect = true,
  closeOnOutsideClick = true,
  dropdownModifiers = [],
  trigger = TRIGGERS.click,
  strategy = STRATEGY.absolute,
  ...otherProps
}) => {
  const [instance, setInstance] = useState(null);

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

  const { classNames: ulClassname, ...otherUlProps } = ulProps;

  const hideOnClick = isControlled ? false : closeOnOutsideClick || "toggle";

  const close = () => {
    instance.hide();
    onClose();
  };

  return (
    <Tippy
      role="dropdown"
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
      content={
        <ul
          className={classnames("neeto-ui-dropdown__popup", {
            [ulClassname]: ulClassname,
          })}
          data-cy={`${hyphenize(label)}-dropdown-container`}
          {...otherUlProps}
        >
          {React.Children.map(children, (child) => {
            return child
              ? React.cloneElement(child, {
                onClick: (event) => {
                  child.props?.onClick?.(event);
                  closeOnSelect && close();
                },
              })
              : null;
          })}
        </ul>
      }
      {...otherProps}
      {...controlledProps}
    >
      {customTarget ? (
        <div>
          {typeof customTarget === "function" ? customTarget() : customTarget}
        </div>
      ) : (
        <Button
          label={label}
          style={buttonStyle}
          icon={icon || Down}
          iconPosition="right"
          disabled={disabled || buttonProps?.disabled}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          {...buttonProps}
        />
      )}
    </Tippy>
  );
};

Dropdown.propTypes = {
  /**
   * To specify the icon to be rendered in the dropdown target.
   */
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * To specify the label for dropdown target button.
   */
  label: PropTypes.string,
  /**
   * To specify whether the dropdown is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the action to be triggered on closing the Dropdown.
   */
  onClose: PropTypes.func,
  /**
   * To specify the triggering action for dropdown.
   */
  trigger: PropTypes.oneOf(Object.keys(TRIGGERS)),
  /**
   * To specify the positioning strategy to use. By default, it is absolute, which in the simplest cases does not require repositioning of the dropdown.
   *
   * If your reference element is in a fixed container, use the fixed strategy
   */
  strategy: PropTypes.oneOf(Object.values(STRATEGY)),
  /**
   * To specify the classes to be passed to the dropdown menu.
   */
  ulProps: PropTypes.object,
  /**
   * To specify the position of the dropdown menu.
   */
  position: PropTypes.oneOf(Object.values(PLACEMENT)),
  /**
   * To specify the content to be rendered inside the Dropdown.
   */
  children: PropTypes.node,
  /**
   * To specify whether the dropdown menu width needs to be set to auto or not.
   */
  autoWidth: PropTypes.bool,
  /**
   * To provide external classnames to dropdown target wrapper.
   */
  className: PropTypes.string,
  /**
   * To specify the style of the button to be rendered as the dropdown target.
   */
  buttonStyle: PropTypes.oneOf(Object.values(DROPDOWN_BTN_STYLES)),
  /**
   * To specify the props to be passed to the dropdown target button.
   */
  buttonProps: PropTypes.object,
  /**
   * To provide a custom target to be rendered instead of the default button target.
   */
  customTarget: PropTypes.node,
  /**
   * To specify whether the dropdown is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify whether the dropdown should close on pressing esc key.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the dropdown should close on selecting an option.
   */
  closeOnSelect: PropTypes.bool,
  /**
   * To specify whether the dropdown should close on clicking outside the dropdown content.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * To provide custom modifiers to Dropdown component.
   */
  dropdownModifiers: PropTypes.array,
  /**
   * To specify whether the dropdown should be multilevel.
   */
  isMultiLevel: PropTypes.bool,
};

export default Dropdown;
