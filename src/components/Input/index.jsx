import React, { useState, forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import { useId } from "hooks";
import { hyphenize } from "utils";

import {
  enforceDecimalPrecision,
  formatWithPrecision,
  formatWithRejectCharsRegex,
  getTrimmedValue,
} from "./utils";

import Label from "../Label";

const SIZES = { small: "small", medium: "medium", large: "large" };

const Input = forwardRef(
  (
    {
      size = SIZES.medium,
      type = "text",
      label = "",
      dataCy = "",
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
      precision = -1,
      ...otherProps
    },
    ref
  ) => {
    const [valueInternal, setValueInternal] = useState(otherProps.value);
    const id = useId(otherProps.id);

    const errorId = `error_${id}`;
    const helpTextId = `helpText_${id}`;

    const value =
      formatWithPrecision(otherProps.value, precision) ?? valueInternal ?? "";

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

    const handleChange = e => {
      if (type === "file") {
        onChange(e);

        return;
      }

      let formattedValue = formatWithRejectCharsRegex(
        e.target.value,
        rejectCharsRegex
      );

      formattedValue = enforceDecimalPrecision(formattedValue, precision);

      if (type === "number") {
        onChange({ target: { value: formattedValue } });
      } else {
        e.target.value = formattedValue;
        onChange(e);
      }
    };

    const handleOnBlur = e => {
      if (type === "file") {
        onBlur?.(e);

        return;
      }

      const trimmedValue = getTrimmedValue(value, disableTrimOnBlur);
      const formattedValue = formatWithPrecision(trimmedValue, precision);

      if (formattedValue !== value) {
        e.target.value = formattedValue;
        handleChange(e);
      }

      onBlur?.(e);
    };

    const handleOnWheel = e => {
      if (type === "number") e.target.blur();
    };

    const dataCyLabel =
      typeof label === "string" ? hyphenize(label) : hyphenize(dataCy);

    return (
      <div className={classnames(["neeto-ui-input__wrapper", className])}>
        <div className="neeto-ui-input__label-wrapper">
          {label && (
            <Label
              {...{ required }}
              data-cy={`${dataCyLabel}-input-label`}
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
          data-cy={`${dataCyLabel}-input`}
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
            data-cy={`${dataCyLabel}-input-field`}
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
            onWheel={handleOnWheel}
          />
          {suffix && <div className="neeto-ui-input__suffix">{suffix}</div>}
        </div>
        {!!error && (
          <p
            className="neeto-ui-input__error"
            data-cy={`${dataCyLabel}-input-error`}
            id={errorId}
          >
            {error}
          </p>
        )}
        {helpText && (
          <p
            className="neeto-ui-input__help-text"
            data-cy={`${dataCyLabel}-input-help`}
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
   * To specify how many decimal places to show in the input.
   *
   * For example, if precision is 2:
   * 10 will be shown as "10.00"
   * 10.1 will be shown as "10.10"
   * 9.758 will be rounded and shown as "9.76"
   */
  precision: PropTypes.number,
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
