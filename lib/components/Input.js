import React, { useState, forwardRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";

import { hyphenize } from "../common";
import Label from "./Label";
import Typography from "./Typography";

const INPUT_SIZES = ["small", "large"];

const Input = forwardRef((props, ref) => {
  const {
    size = "small",
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
    ...otherProps
  } = props;

  const [valueInternal, setValueInternal] = useState(props.value);
  const id = useId(props.id);

  const onChangeInternal = (e) => setValueInternal(e.target.value);

  const value = props.value ?? valueInternal ?? "";
  const onChange = props.onChange || onChangeInternal;

  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;

  const valueLength = value?.toString().length || 0;
  const { maxLength } = otherProps;

  return (
    <div className={classnames(["neeto-ui-input__wrapper", className])}>
      <div className="neeto-ui-input__label-wrapper">
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-input-label`}
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
        className={classnames("neeto-ui-input", {
          "neeto-ui-input--naked": !!nakedInput,
          "neeto-ui-input--error": !!error,
          "neeto-ui-input--disabled": !!disabled,
          "neeto-ui-input--small": size === "small",
        })}
      >
        {prefix && (
          <div className="neeto-ui-input__prefix" data-testid="input_prefix">
            {prefix}
          </div>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          disabled={disabled}
          size={contentSize}
          required={required}
          aria-invalid={!!error}
          aria-describedby={classnames({
            [errorId]: !!error,
            [helpTextId]: helpText,
          })}
          data-cy="input-field"
          {...otherProps}
          value={value}
          onChange={onChange}
          data-testid="input-field"
        />
        {suffix && (
          <div className="neeto-ui-input__suffix" data-testid="input_suffix">
            {suffix}
          </div>
        )}
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

Input.propTypes = {
  /**
   * To specify a unique ID to the input component.
   */
  id: PropTypes.string,
  /**
   * To specify the size of input.
   */
  size: PropTypes.oneOf(INPUT_SIZES),
  /**
   * To specify the type of input field.
   */
  type: PropTypes.string,
  /**
   * To specify a maximum character limit to the input.
   */
  maxLength: PropTypes.number,
  /**
   * To specify the text to be displayed above the input.
   */
  label: PropTypes.string,
  /**
   * To specify the error message to be shown in the input field.
   */
  error: PropTypes.string,
  /**
   * To specify the content to be added at the end of the input field.
   */
  suffix: PropTypes.node,
  /**
   * To specify the content to be added at the beginning of the input field.
   */
  prefix: PropTypes.node,
  /**
   * To specify whether the input field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the text that appears below the input field.
   */
  helpText: PropTypes.string,
  /**
   * To specify external classNames that can be provided as overrides to the main wrapper.
   */
  className: PropTypes.string,
  /**
   * To create an input field without any borders.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the value to be passed as size attribute to the input field.
   */
  contentSize: PropTypes.number,
  /**
   * To specify whether the input field is required or not.
   */
  required: PropTypes.bool,
};

export default Input;
