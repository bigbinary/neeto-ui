import React, { useState, useEffect, forwardRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Label from "./Label";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";
import Typography from "./Typography";
import { useSyncedRef } from "../utils";

const Textarea = forwardRef((props, ref) => {
  const {
    rows = 3,
    disabled = false,
    required = false,
    nakedTextarea = false,
    helpText = "",
    error = "",
    label = "",
    className = "",
    ...otherProps
  } = props;
  const { maxLength } = props;

  const [valueInternal, setValueInternal] = useState("");
  const onChangeInternal = (e) => setValueInternal(e.target.value);

  const value = props.value ?? valueInternal ?? "";
  const onChange = props.onChange ?? onChangeInternal;

  const id = useId(props.id);
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;
  const textareaRef = useSyncedRef(ref);

  const valueLength = value?.toString().length || 0;

  useEffect(() => {
    textareaRef.current.style.minHeight = "22px";
    textareaRef.current.style.height = "auto";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);

  return (
    <div className={classnames(["neeto-ui-input__wrapper", className])}>
      <div className="neeto-ui-input__label-wrapper">
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-label`}
            htmlFor={id}
          >
            {label}
          </Label>
        )}
        {maxLength && (
          <Typography className="neeto-ui-input__max-length" style="body3">
            {valueLength} / {maxLength}
          </Typography>
        )}
      </div>
      <div
        className={classnames("neeto-ui-input", "neeto-ui-input--textarea", {
          "neeto-ui-input--error": !!error,
          "neeto-ui-input--disabled": !!disabled,
          "neeto-ui-input--naked": !!nakedTextarea,
        })}
      >
        <textarea
          rows={rows}
          ref={textareaRef}
          disabled={disabled}
          {...otherProps}
          value={value}
          onChange={onChange}
        />
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
});

Textarea.propTypes = {
  /**
   * To specify the row height of the textarea.
   */
  rows: PropTypes.number,
  /**
   * To specify the label shown above the textarea.
   */
  label: PropTypes.string,
  /**
   * To provide the value of the textarea.
   */
  value: PropTypes.string,
  /**
   * To provide the error message shown below the textarea.
   */
  error: PropTypes.string,
  /**
   * To provide the placeholder text for the textarea.
   */
  placeholder: PropTypes.string,
  /**
   * To specify whether the textarea is required.
   */
  required: PropTypes.bool,
  /**
   * To specify whether the textarea is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To provide additional classnames to the textarea.
   */
  className: PropTypes.string,
  /**
   * To specify the text that appears below the textarea.
   */
  helpText: PropTypes.string,
  /**
   * To create a textarea without any borders.
   */
  nakedTextarea: PropTypes.bool,
  /**
   * To specify a maximum character limit to the textarea.
   */
  maxLength: PropTypes.number,
};

export default Textarea;
