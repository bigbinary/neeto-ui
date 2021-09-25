import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Label from "./Label";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";

const INPUT_SIZES = ["small", "large"];

const Input = React.forwardRef((props, ref) => {
  const {
    size = "small",
    type = "text",
    label,
    error = null,
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

  const id = useId(props.id);
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;

  return (
    <div className={classnames(["nui-input__wrapper", className])}>
      {label && (
        <Label
          required={required}
          data-cy={`${hyphenize(label)}-input-label`}
          htmlFor={id}
        >
          {label}
        </Label>
      )}
      <div
        className={classnames("nui-input", {
          "nui-input--naked": !!nakedInput,
          "nui-input--error": !!error,
          "nui-input--disabled": !!disabled,
          "nui-input--small": size === "small",
        })}
      >
        {prefix && <div className="nui-input__prefix">{prefix}</div>}
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
          data-cy={"input-field"}
          {...otherProps}
        />
        {suffix && <div className="nui-input__suffix">{suffix}</div>}
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
});

Input.propTypes = {
  /**
   * To specify the size of input.
   */
  size: PropTypes.oneOf(INPUT_SIZES),
  /**
   * To specify the type of input field.
   */
  type: PropTypes.string,
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
