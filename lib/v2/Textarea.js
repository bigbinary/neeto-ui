import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import Label from "./Label";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";

const Textarea = (props) => {
  const {
    rows = 3,
    label,
    value,
    error,
    required,
    disabled,
    className,
    helpText = "",
    nakedTextarea = false,
    ...otherProps
  } = props;

  const id = useId(props.id);
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.minHeight = "22px";
    textareaRef.current.style.height = "auto";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);

  return (
    <div className={classnames(["nui-input__wrapper", className])}>
      {label && (
        <Label
          required={required}
          data-cy={`${hyphenize(label)}-label`}
          htmlFor={id}
        >
          {label}
        </Label>
      )}
      <div
        className={classnames("nui-input", "nui-input--textarea", {
          "nui-input--error": !!error,
          "nui-input--disabled": !!disabled,
          "nui-input--naked": !!nakedTextarea,
        })}
      >
        <textarea rows={rows} value={value} ref={textareaRef} {...otherProps} />
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-input-error`}
          className="nui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
      {helpText && (
        <p className="nui-input__help-text" id={helpTextId}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Textarea;
