import React from "react";
import classnames from "classnames";
import Label from "../components/Label";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";

const Input = React.forwardRef((props, ref) => {
  const {
    size = "small",
    type = "text",
    label,
    value,
    error = null,
    suffix = null,
    prefix = null,
    disabled = false,
    infoText = "",
    helpText = "",
    className = "",
    inputWrapperClassName = "",
    inputClassName = "",
    maxLength = null,
    labelProps = {},
    nakedInput = false,
    contentSize = null,
    placeholder = "",
    required = false,
    hideCharacterCount = null,
    ...otherProps
  } = props;

  const id = useId(props.id);
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;

  //Character Limit
  let currentLength = value ? value.length : 0;
  let inputError = error;
  if (hideCharacterCount && currentLength >= maxLength) {
    inputError = "Character limit exceeded";
  }

  return (
    <div className={classnames(["nui-v2-input__wrapper", className])}>
      {(label || maxLength) && (
        <Label
          label={label}
          required={required}
          infoText={infoText}
          currentLength={currentLength}
          maxLength={maxLength}
          hideCharacterCount={hideCharacterCount}
          className="mb-1"
          data-cy={`${hyphenize(label)}-input-label`}
          htmlFor={id}
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <div
        className={classnames("nui-input", {
          "nui-input--naked": !!nakedInput,
          "nui-input--error": !!inputError,
          "nui-input--disabled": !!disabled,
          "nui-input--small": size === "small",
          [inputWrapperClassName]: inputWrapperClassName,
        })}
      >
        {prefix && <div className="nui-input__prefix">{prefix}</div>}
        <input
          ref={ref}
          id={id}
          value={value ?? ""}
          type={type}
          placeholder={placeholder}
          className={inputClassName}
          disabled={disabled}
          maxLength={maxLength}
          size={contentSize}
          required={required}
          aria-invalid={!!inputError}
          aria-describedby={classnames({
            [errorId]: !!inputError,
            [helpTextId]: helpText,
          })}
          {...otherProps}
        />
        {suffix && <div className="nui-input__suffix">{suffix}</div>}
        {!!inputError && !suffix && <ErrorSVG aria-hidden />}
      </div>
      {!!inputError && (
        <p
          data-cy={`${hyphenize(label)}-input-error`}
          className="nui-input__error"
          id={errorId}
        >
          {inputError}
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

const ErrorSVG = () => (
  <div className="flex flex-row items-center justify-start mr-2 pointer-events-none fadeIn">
    <svg
      className="w-5 h-5 text-red-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export default Input;
