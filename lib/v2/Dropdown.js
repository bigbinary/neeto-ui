import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import Button from "./Button";
import { Down } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import { hyphenize } from "../common";
import { useHotkeys } from "react-hotkeys-hook";
import { useOnClickOutside } from "../utils";
// import { popper } from "@popperjs/core";
import Portal from "../atoms/Portal";

const noop = () => {};

const Dropdown = ({
  icon,
  label,
  isOpen = false,
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
  closeOnSelect = true,
  closeOnEsc = true,
  closeOnOutsideClick = true,
  ...otherProps
}) => {
  const Target = customTarget;

  const [visible, setVisibility] = useState(isOpen || false);

  const [referenceRef, setReferenceRef] = useState(null);
  const [popperRef, setPopperRef] = useState(null);

  console.log(referenceRef);
  console.log(popperRef);

  const { styles, attributes } = usePopper(referenceRef, popperRef, {
    placement: position || "bottom-end",
    // modifiers: [
    //   {
    //     name: "offset",
    //     // enabled: true,
    //     options: {
    //       offset: [0, 0],
    //     },
    //   },
    // ],
  });

  const onPopupClose = () => {
    if (isOpen) onClose();
    else {
      setVisibility(false);
      onClose();
    }
  };

  if (closeOnEsc) useHotkeys("esc", onPopupClose);

  if (closeOnOutsideClick) useOnClickOutside(popperRef, onPopupClose);

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    setVisibility(isOpen);
  }, [isOpen]);

  const handleDocumentClick = (event) => {
    // console.log("ref", referenceRef);
    // console.log("event", event.target);
    if (referenceRef.contains(event.target)) {
      return;
    }
    closeOnSelect && setVisibility(false);
  };

  const handleDropdownClick = (event) => {
    setVisibility(!visible);
  };

  return (
    <div
      className={classnames("nui-dropdown__wrapper", {
        "nui-dropdown__wrapper--auto-width": autoWidth,
        [className]: className,
      })}
    >
      {customTarget ? (
        <Target />
      ) : (
        <Button
          label={label}
          ref={setReferenceRef}
          style={buttonStyle}
          icon={icon || Down}
          iconPosition="right"
          disabled={disabled || buttonProps?.disabled}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          onClick={isOpen ? buttonProps.onClick : handleDropdownClick}
          {...buttonProps}
        />
      )}
      {visible && (
        <Portal>
          <ul
            className={"nui-dropdown__popup"}
            ref={setPopperRef}
            data-cy={`${hyphenize(label)}-dropdown-container`}
            aria-labelledby="dropdownMenuButton"
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
        </Portal>
      )}
    </div>
  );
};

export default Dropdown;
