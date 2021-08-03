import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import Button from "./Button";
import { Down } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import { hyphenize } from "../common";
import { useHotkeys } from "react-hotkeys-hook";
import mergeRefs from "merge-refs";

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
  ...otherProps
}) => {
  const Target = customTarget;
  const isControlled = !(isOpen === undefined || isOpen === null);

  const [visible, setVisibility] = useState(false);
  const [reference, setReference] = useState(null);
  const [popper, setPopper] = useState(null);
  const popperRef = useRef(null);
  const dropdownRef = useRef(null);

  const { styles, attributes } = usePopper(reference, popper, {
    placement: position || "bottom-end",
    modifiers: dropdownModifiers,
  });

  const handleButtonClick = () => {
    setVisibility(!visible);
  };

  if (!isControlled) {
    buttonProps = {
      onClick: () => {
        handleButtonClick();
      },
    };
  }

  const onPopupClose = () => {
    if (!isControlled) setVisibility(false);
    onClose();
  };

  if (closeOnEsc) useHotkeys("esc", onPopupClose);

  const handleClick = (event) => {
    const isPopupClick =
      popperRef.current && popperRef.current.contains(event.target);
    const isDropdownClick =
      dropdownRef.current && dropdownRef.current.contains(event.target);
    if (isDropdownClick || isPopupClick) {
      if (isPopupClick && closeOnSelect) {
        onPopupClose();
      }
      return;
    }
    closeOnOutsideClick && onPopupClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    isControlled && setVisibility(isOpen);
  }, [isOpen]);

  return (
    <div
      className={classnames("nui-dropdown__wrapper", {
        "nui-dropdown__wrapper--auto-width": autoWidth,
        [className]: className,
      })}
      ref={dropdownRef}
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
          ref={mergeRefs(popperRef, setPopper)}
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
  );
};

export default Dropdown;
