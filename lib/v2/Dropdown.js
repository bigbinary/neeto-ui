import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import Button from "./Button";
import { Down } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import { hyphenize } from "../common";
import { useHotkeys } from "react-hotkeys-hook";
import { useOnClickOutside } from "../utils";
import { popper } from "@popperjs/core";
import Portal from "../atoms/Portal";
import mergeRefs from "merge-refs";

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
  closeOnEsc = true,
  closeOnSelect = true,
  closeOnOutsideClick = true,
  ...otherProps
}) => {
  const Target = customTarget;

  const [visible, setVisibility] = useState(isOpen || false);

  const [reference, setReference] = useState(null);
  const [popper, setPopper] = useState(null);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(reference, popper, {
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
      console.log("ELSEEEEE");
      setVisibility(false);
      onClose();
    }
  };

  if (closeOnEsc) useHotkeys("esc", onPopupClose);

  const handleTargetClick = (event) => {
    setVisibility(!visible);
  };

  const handleClick = (event) => {
    // Do nothing if clicking ref's element or descendent elements
    if (!popperRef.current || popperRef.current.contains(event.target)) {
      if (closeOnSelect) setVisibility(false);
      else return;
    }
    closeOnOutsideClick && setVisibility(false);
  };

  // const onPopperClick = () => {
  //   visible && setVisibility(false);
  // };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    setVisibility(isOpen);
  }, [isOpen]);

  console.log("1", popper);
  console.log("2", popperRef);
  console.log("3", popperRef.current);

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
          ref={setReference}
          style={buttonStyle}
          icon={icon || Down}
          iconPosition="right"
          disabled={disabled || buttonProps?.disabled}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          onClick={isOpen ? buttonProps.onClick : handleTargetClick}
          {...buttonProps}
        />
      )}
      {visible && (
        // <Portal>
        <ul
          className={"nui-dropdown__popup"}
          ref={mergeRefs(setPopper, popperRef)}
          data-cy={`${hyphenize(label)}-dropdown-container`}
          aria-labelledby="dropdownMenuButton"
          // onClick={ulProps?.onClick || onPopperClick}
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
        // </Portal>
      )}
    </div>
  );
};

export default Dropdown;
