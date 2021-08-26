import React from "react";
import classnames from "classnames";
import Label from "./Label";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";

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

export default Input;
