import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { usePopper } from "react-popper";
import { Down } from "@bigbinary/neeto-icons";
import { useHotkeys } from "react-hotkeys-hook";
import OutsideClickHandler from "react-outside-click-handler";

import Button from "./Button";
import { hyphenize } from "../common";

const noop = () => {};

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
      onClick: () => {
        handleButtonClick();
      },
    };
  }

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
        className={classnames("nui-dropdown__wrapper", {
          "nui-dropdown__wrapper--auto-width": autoWidth,
          [className]: className,
        })}
      >
        {customTarget ? (
          <div ref={setReference}>
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
            className="nui-dropdown__popup"
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

export default Dropdown;
