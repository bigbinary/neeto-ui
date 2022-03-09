import React, { useState, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { usePopper } from "react-popper";
import { Down } from "@bigbinary/neeto-icons";
import { useHotkeys } from "react-hotkeys-hook";
import OutsideClickHandler from "react-outside-click-handler";

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
  hover: "hover",
};

const Dropdown = ({
  icon,
  label = "",
  isOpen,
  onClose = () => {},
  ulProps = {},
  position = PLACEMENT.bottomEnd,
  children,
  autoWidth = false,
  className = "",
  buttonStyle = DROPDOWN_BTN_STYLES.primary,
  buttonProps = {},
  customTarget,
  disabled = false,
  closeOnEsc = true,
  closeOnSelect = true,
  closeOnOutsideClick = true,
  dropdownModifiers = [],
  trigger = TRIGGERS.click,
  strategy = STRATEGY.absolute,
  isMultiLevel = false,
  ...otherProps
}) => {
  const [visible, setVisibility] = useState(false);
  const [reference, setReference] = useState(null);
  const [popper, setPopper] = useState(null);

  const isControlled = !(isOpen === undefined || isOpen === null);

  const { classNames: ulClassname, ...otherUlProps } = ulProps;

  const { styles, attributes } = usePopper(reference, popper, {
    placement: position,
    modifiers: dropdownModifiers,
    strategy: strategy,
  });

  const onPopupClose = () => {
    if (!isControlled) setVisibility(false);
    onClose();
  };

  const handlePopperClick = () => {
    closeOnSelect && onPopupClose();
  };

  const handleButtonClick = () => {
    setVisibility(!visible);
  };

  closeOnEsc && useHotkeys("esc", onPopupClose);

  if (!isControlled) {
    buttonProps = {
      ...buttonProps,
      onClick: () => {
        handleButtonClick();
      },
    };
  }

  const hoverHandlers =
    trigger === TRIGGERS.hover
      ? {
        onMouseEnter: () => !visible && setVisibility(true),
        onMouseLeave: () => visible && setVisibility(false),
      }
      : {};

  useEffect(() => {
    isControlled && setVisibility(isOpen);
  }, [isOpen]);

  return (
    <OutsideClickHandler
      useCapture={true}
      onOutsideClick={() => {
        closeOnOutsideClick && onPopupClose();
      }}
    >
      <div
        className={classnames("neeto-ui-dropdown__wrapper", {
          "neeto-ui-dropdown__wrapper--auto-width": autoWidth,
          "neeto-ui-dropdown__wrapper--multilevel": isMultiLevel,
          [className]: className,
        })}
        {...otherProps}
        {...hoverHandlers}
      >
        {customTarget ? (
          <div ref={setReference} onClick={handleButtonClick}>
            {typeof customTarget === "function" ? customTarget() : customTarget}
          </div>
        ) : (
          <Button
            label={label}
            ref={setReference}
            style={buttonStyle}
            icon={icon || Down}
            iconPosition="right"
            disabled={disabled || buttonProps?.disabled}
            data-cy={`${hyphenize(label)}-dropdown-icon`}
            {...buttonProps}
          />
        )}
        {visible && (
          <ul
            className={classnames("neeto-ui-dropdown__popup", {
              [ulClassname]: ulClassname,
            })}
            ref={setPopper}
            onClick={handlePopperClick}
            data-cy={`${hyphenize(label)}-dropdown-container`}
            {...otherUlProps}
            style={{
              display: "block",
              ...styles.offset,
              ...styles.popper,
            }}
            {...attributes.popper}
          >
            {children}
          </ul>
        )}
      </div>
    </OutsideClickHandler>
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
  trigger: PropTypes.oneOf(Object.values(TRIGGERS)),
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
  isMultiLevel: PropTypes.bool,
};

export default Dropdown;
