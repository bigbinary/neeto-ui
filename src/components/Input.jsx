import React, { useState, forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { replace } from "ramda";

import { useId } from "hooks";
import { hyphenize } from "utils";
import "styles/common";
import "styles/components/_input";

import Label from "./Label";

const SIZES = { small: "small", medium: "medium", large: "large" };

const Input = forwardRef(
  (
    {
      size = SIZES.medium,
      type = "text",
      label = "",
      error = "",
      suffix = null,
      prefix = null,
      disabled = false,
      helpText = "",
      className = "",
      nakedInput = false,
      contentSize = null,
      required = false,
      maxLength,
      unlimitedChars = false,
      labelProps,
      rejectCharsRegex,
      onBlur,
      disableTrimOnBlur = false,
      ...otherProps
    },
    ref
  ) => {
    const [valueInternal, setValueInternal] = useState(otherProps.value);
    const id = useId(otherProps.id);

    const errorId = `error_${id}`;
    const helpTextId = `helpText_${id}`;

    const value = otherProps.value ?? valueInternal ?? "";

    const valueLength = value?.toString().length || 0;
    const isCharacterLimitVisible = valueLength >= maxLength * 0.85;
    const maxLengthError = unlimitedChars && valueLength > maxLength;

    const onChange = e => {
      if (!otherProps.onChange || !otherProps.value) {
        setValueInternal(e.target.value);
      }
      otherProps.onChange?.(e);
    };

    const isMaxLengthPresent = !!maxLength || maxLength === 0;

    const handleRegexChange = e => {
      const globalRegex = new RegExp(rejectCharsRegex, "g");
      e.target.value = replace(globalRegex, "", e.target.value);
      onChange(e);
    };

    const handleChange = rejectCharsRegex ? handleRegexChange : onChange;

    const handleTrimmedChangeOnBlur = e => {
      if (disableTrimOnBlur || typeof value !== "string") return;

      const trimmedValue = value.trim();
      if (value === trimmedValue) return;

      e.target.value = trimmedValue;
      handleChange(e);
    };

    const handleOnBlur = e => {
      handleTrimmedChangeOnBlur(e);
      onBlur?.(e);
    };

    return (
      <div className={classnames(["neeto-ui-input__wrapper", className])}>
        <div className="neeto-ui-input__label-wrapper">
          {label && (
            <Label
              {...{ required }}
              data-cy={`${hyphenize(label)}-input-label`}
              htmlFor={id}
              {...labelProps}
            >
              {label}
            </Label>
          )}
          {isCharacterLimitVisible && (
            <p
              className={classnames("neeto-ui-input__max-length", {
                "neeto-ui-input__max-length--error": maxLengthError,
              })}
            >
              {valueLength}/{maxLength}
            </p>
          )}
        </div>
        <div
          className={classnames("neeto-ui-input", {
            "neeto-ui-input--naked": !!nakedInput,
            "neeto-ui-input--error": !!error,
            "neeto-ui-input--disabled": !!disabled,
            "neeto-ui-input--small": size === "small",
            "neeto-ui-input--medium": size === "medium",
            "neeto-ui-input--large": size === "large",
          })}
        >
          {prefix && <div className="neeto-ui-input__prefix">{prefix}</div>}
          <input
            aria-invalid={!!error}
            data-cy={`${hyphenize(label)}-input-field`}
            size={contentSize}
            aria-describedby={classnames({
              [errorId]: !!error,
              [helpTextId]: helpText,
            })}
            {...{
              disabled,
              id,
              ref,
              required,
              type,
              ...(isMaxLengthPresent && !unlimitedChars && { maxLength }),
              ...otherProps,
              value,
            }}
            onBlur={handleOnBlur}
            onChange={handleChange}
          />
          {suffix && <div className="neeto-ui-input__suffix">{suffix}</div>}
        </div>
        {!!error && (
          <p
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(label)}-input-error`}
            id={errorId}
          >
            {error}
          </p>
        )}
        {helpText && (
          <p
            className="neeto-ui-input__help-text"
            data-cy={`${hyphenize(label)}-input-help`}
            id={helpTextId}
          >
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  /**
   * To specify a unique ID to the Input component.
   */
  id: PropTypes.string,
  /**
   * To specify the size of Input.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify the type of Input field.
   */
  type: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To specify a maximum character limit to the Input. Charater limit is visible only if the Input value is greater than or equal to 85% of the maximum character limit.
   */
  maxLength: PropTypes.number,
  /**
   * To be used along with maxLength prop. When set to true the character limit will not be enforced and character count will be shown in error state if the character limit is exceeded.
   */
  unlimitedChars: PropTypes.bool,
  /**
   * To specify the text to be displayed above the Input.
   */
  label: PropTypes.string,
  /**
   * To specify the error message to be shown in the Input field.
   */
  error: PropTypes.string,
  /**
   * To specify the content to be added at the end of the Input field.
   */
  suffix: PropTypes.node,
  /**
   * To specify the content to be added at the beginning of the Input field.
   */
  prefix: PropTypes.node,
  /**
   * To specify whether the Input field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the text that appears below the Input field.
   */
  helpText: PropTypes.string,
  /**
   * To specify external classNames that can be provided as overrides to the main wrapper.
   */
  className: PropTypes.string,
  /**
   * To create an Input field without any borders.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the value to be passed as size attribute to the Input field.
   */
  contentSize: PropTypes.number,
  /**
   * To specify whether the Input field is required or not.
   */
  required: PropTypes.bool,
  /**
   * To specify a regex to be matched against the user input. Any character that matches it
   * cannot be input by the user. It will also prevent such characters from being pasted into the input.
   */
  rejectCharsRegex: PropTypes.instanceOf(RegExp),
  /**
   * To disable leading and trailing white spaces onBlur.
   */
  disableTrimOnBlur: PropTypes.bool,
};

export default Input;
