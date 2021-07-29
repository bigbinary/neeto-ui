import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import Button from "./Button";
import { Down } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import { hyphenize } from "../common";

const Dropdown = ({
  icon,
  label,
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
  canEscapeKeyClose = true,
  ...otherProps
}) => {
  const Target = customTarget;

  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: position || "bottom-end",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 0],
          },
        },
      ],
    }
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    canEscapeKeyClose &&
      document.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      canEscapeKeyClose &&
        document.removeEventListener("keydown", handleEscapeClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    if (referenceRef.current.contains(event.target)) {
      return;
    }
    closeOnSelect && setVisibility(false);
  };

  const handleDropdownClick = (event) => {
    setVisibility(!visible);
  };

  const handleEscapeClick = (event) => {
    if (event.key === "Escape") {
      const isNotCombinedKey = !(
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      );
      if (isNotCombinedKey) {
        setVisibility(false);
      }
    }
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
          ref={referenceRef}
          style={buttonStyle}
          icon={icon || Down}
          iconPosition="right"
          disabled={disabled}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          onClick={handleDropdownClick}
          {...buttonProps}
        />
      )}
      <ul
        ref={popperRef}
        data-cy={`${hyphenize(label)}-dropdown-container`}
        {...ulProps}
        {...attributes.popper}
        style={{
          display: visible ? "block" : "none",
          ...styles.popper,
          ...styles.offset,
        }}
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
