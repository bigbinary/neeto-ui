import React, { useState, useEffect, forwardRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Label from "./Label";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";
import Typography from "./Typography";
import { useSyncedRef } from "../utils";

const SIZES = { small: "small", medium: "medium", large: "large" };

const Textarea = forwardRef(
  (
    {
      size = SIZES.medium,
      rows = 3,
      disabled = false,
      required = false,
      nakedTextarea = false,
      helpText = "",
      error = "",
      label = "",
      className = "",
      maxLength,
      labelProps,
      ...otherProps
    },
    ref
  ) => {
    const [valueInternal, setValueInternal] = useState("");
    const onChangeInternal = (e) => setValueInternal(e.target.value);

    const value = otherProps.value ?? valueInternal ?? "";
    const onChange = otherProps.onChange ?? onChangeInternal;

    const id = useId(otherProps.id);
    const errorId = `error_${id}`;
    const helpTextId = `helpText_${id}`;
    const textareaRef = useSyncedRef(ref);

    const valueLength = value?.toString().length || 0;
    const isCharacterLimitVisible = valueLength >= maxLength * 0.9;
    const maxLengthError = !!maxLength && valueLength > maxLength;

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
              {...labelProps}
            >
              {label}
            </Label>
          )}
          {isCharacterLimitVisible && (
            <Typography
              className={classnames("neeto-ui-input__max-length", {
                "neeto-ui-input__max-length--error": maxLengthError,
              })}
              style="body2"
            >
              {valueLength}/{maxLength}
            </Typography>
          )}
        </div>
        <div
          className={classnames("neeto-ui-input", "neeto-ui-input--textarea", {
            "neeto-ui-input--error": !!error,
            "neeto-ui-input--disabled": !!disabled,
            "neeto-ui-input--naked": !!nakedTextarea,
            "neeto-ui-input--small": size === "small",
            "neeto-ui-input--medium": size === "medium",
            "neeto-ui-input--large": size === "large",
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
          <Typography
            style="body3"
            data-cy={`${hyphenize(label)}-input-error`}
            className="neeto-ui-input__error"
            id={errorId}
          >
            {error}
          </Typography>
        )}
        {helpText && (
          <Typography
            style="body3"
            className="neeto-ui-input__help-text"
            id={helpTextId}
          >
            {helpText}
          </Typography>
        )}
      </div>
    );
  }
);

Textarea.propTypes = {
  /**
   * To specify the row height of the Textarea.
   */
  rows: PropTypes.number,
  /**
   * To specify the size of Textarea.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify the label shown above the Textarea.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To provide the value of the Textarea.
   */
  value: PropTypes.string,
  /**
   * To provide the error message shown below the Textarea.
   */
  error: PropTypes.string,
  /**
   * To provide the placeholder text for the Textarea.
   */
  placeholder: PropTypes.string,
  /**
   * To specify whether the Textarea is required.
   */
  required: PropTypes.bool,
  /**
   * To specify whether the Textarea is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To provide additional classnames to the Textarea.
   */
  className: PropTypes.string,
  /**
   * To specify the text that appears below the Textarea.
   */
  helpText: PropTypes.string,
  /**
   * To create a Textarea without any borders.
   */
  nakedTextarea: PropTypes.bool,
  /**
   * To specify a maximum character limit to the Textarea.
   */
  maxLength: PropTypes.number,
};

export default Textarea;
