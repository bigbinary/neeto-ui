import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
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
    <div className={classnames(["neeto-ui-input__wrapper", className])}>
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
        className={classnames("neeto-ui-input", "neeto-ui-input--textarea", {
          "neeto-ui-input--error": !!error,
          "neeto-ui-input--disabled": !!disabled,
          "neeto-ui-input--naked": !!nakedTextarea,
        })}
      >
        <textarea rows={rows} value={value} ref={textareaRef} {...otherProps} />
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-input-error`}
          className="neeto-ui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
      {helpText && (
        <p className="neeto-ui-input__help-text" id={helpTextId}>
          {helpText}
        </p>
      )}
    </div>
  );
};

Textarea.propTypes = {
  rows: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  helpText: PropTypes.string,
  nakedTextarea: PropTypes.bool,
};

export default Textarea;
