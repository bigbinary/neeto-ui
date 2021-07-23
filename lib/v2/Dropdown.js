import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import Button from "./Button";
import classnames from "classnames";
import { hyphenize } from "../common";

const DropdownV2 = ({
  buttonStyle,
  buttonProps,
  label,
  customTarget,
  children,
  className,
  autoWidth,
  icon,
  closeOnSelect = true,
  canEscapeKeyClose = true,
  disabled = false,
  position,
  ulProps,
  actionButtonProps,
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
      placement: position || "bottom",
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
    <>
      {customTarget ? (
        <Target />
      ) : (
        <Button
          className={className}
          style={buttonStyle}
          label={label}
          icon={icon || "ri-arrow-down-s-line"}
          iconPosition="right"
          disabled={disabled}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          ref={referenceRef}
          onClick={handleDropdownClick}
          {...buttonProps}
        />
      )}
      <div
        className={classnames(["nui-dropdown--container"])}
        data-cy={`${hyphenize(label)}-dropdown-container`}
        ref={popperRef}
        style={{ display: visible ? "block" : "none", ...styles.popper }}
        {...attributes.popper}
      >
        <ul
          {...ulProps}
          className={classnames([ulProps?.className], {
            "w-auto": autoWidth,
            "shadow-xs": actionButtonProps,
          })}
          style={{ ...styles.offset }}
        >
          {children}
        </ul>
        {actionButtonProps && (
          <Button
            fullWidth
            {...actionButtonProps}
            className={classnames([
              "rounded-none border-0",
              actionButtonProps.className,
            ])}
            data-cy={`${hyphenize(label)}-dropdown-action-button`}
          />
        )}
      </div>
    </>
  );
};

export default DropdownV2;
