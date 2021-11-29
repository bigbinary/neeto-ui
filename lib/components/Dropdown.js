import React, { useState, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { usePopper } from "react-popper";
import { Down } from "@bigbinary/neeto-icons";
import { useHotkeys } from "react-hotkeys-hook";
import OutsideClickHandler from "react-outside-click-handler";

import Button from "./Button";
import { hyphenize } from "../common";

const noop = () => {};
const DROPDOWN_BTN_STYLES = {
  primary: "primary",
  secondary: "secondary",
  text: "text",
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
  label,
  isOpen,
  onClose = noop,
  ulProps,
  position,
  children,
  autoWidth,
  className,
  buttonStyle = "primary",
  buttonProps,
  customTarget,
  disabled = false,
  closeOnEsc = true,
  closeOnSelect = true,
  closeOnOutsideClick = true,
  dropdownModifiers = [],
  trigger = TRIGGERS.click,
  ...otherProps
}) => {
  const Target = customTarget;
  const isControlled = !(isOpen === undefined || isOpen === null);

  const [visible, setVisibility] = useState(false);
  const [reference, setReference] = useState(null);
  const [popper, setPopper] = useState(null);

  const { styles, attributes } = usePopper(reference, popper, {
    placement: position || "bottom-end",
    modifiers: dropdownModifiers,
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

  const hoverHandlers = trigger === TRIGGERS.hover ? {
    onMouseEnter: () => !visible && setVisibility(true),
    onMouseLeave: () => visible && setVisibility(false),
  } : {};

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
          [className]: className,
        })}
        {...otherProps}
        {...hoverHandlers}
      >
        {customTarget ? (
          <div ref={setReference} onClick={handleButtonClick}>
            <Target />
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
            className="neeto-ui-dropdown__popup"
            ref={setPopper}
            onClick={handlePopperClick}
            data-cy={`${hyphenize(label)}-dropdown-container`}
            {...ulProps}
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
  icon: PropTypes.string,
  /**
   * To specify the label for dropdown target button.
   */
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  /**
   * To specify the triggerring aciton for dropdown.
   */
  trigger: PropTypes.oneOf(Object.values(TRIGGERS)),
  /**
   * To specify the classes to be passed to the dropdown menu.
   */
  ulProps: PropTypes.object,
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
   * To specify the classes to be passed to the dropdown target wrapper.
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
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the dropdown should close on selecting an option.
   */
  closeOnSelect: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  dropdownModifiers: PropTypes.array,
};

export default Dropdown;
