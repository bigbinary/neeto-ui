import React from "react";
import classnames from "classnames";
import Label from "./Label";

const Input = React.forwardRef((props, ref) => {
  const {
    size = "large",
    type = "text",
    label,
    value,
    error = null,
    suffix = null,
    prefix = null,
    disabled = false,
    helpText = "",
    onChange,
    className = "",
    inputClassName = "",
    maxLength = null,
    labelProps = "",
    nakedInput = false,
    contentSize = null,
    placeholder = "",
    leadingIcon = null,
    required = false,
    hideCharacterCount = null,
    ...otherProps
  } = props;

  const baseClasses =
    "form-input block w-full text-sm flex flex-row justify-start items-center transition-all duration-200";
  const errorClasses =
    "border-red-400 text-red-800 placeholder-red-300 focus-within:shadow-focus-red";

  //Character Limit
  let currentLength = value ? value.length : 0;
  let inputError = error;
  if (hideCharacterCount && currentLength >= maxLength) {
    inputError = "Character limit exceeded";
  }

  return (
    <div
      className={classnames([
        "flex flex-col items-start justify-start flex-grow",
        className
      ])}
    >
      {(label || maxLength) && (
        <Label
          label={label}
          required={required}
          helpText={helpText}
          currentLength={currentLength}
          maxLength={maxLength}
          hideCharacterCount={hideCharacterCount}
          className="mb-1"
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <div
        className={classnames(["relative w-full rounded-md"], {
          "shadow-sm": !nakedInput
        })}
      >
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <i className={leadingIcon}></i>
          </div>
        )}
        <div
          className={classnames(baseClasses, {
            "focus-within:shadow-focus-purple focus-within:border-purple-400":
              !inputError && !nakedInput,
            [errorClasses]: !!inputError,
            "bg-gray-50 cursor-not-allowed": disabled,
            "pr-10": !suffix && !!inputError,
            "pl-10": leadingIcon,
            "py-1.5": size === "small",
            "border-none px-0": nakedInput
          })}
        >
          {prefix && (
            <div className="flex items-center pr-1">
              <span className="flex flex-row items-center justify-start text-gray-500">
                {prefix}
              </span>
            </div>
          )}
          <input
            ref={ref}
            onChange={onChange}
            value={value ?? ""}
            type={type}
            placeholder={placeholder}
            className={classnames(
              ["w-full focus:outline-none bg-transparent", inputClassName],
              { "cursor-not-allowed": disabled }
            )}
            disabled={disabled}
            maxLength={maxLength}
            size={contentSize}
            {...otherProps}
          />
          {suffix && (
            <div className="flex items-center pl-1">
              <span className="flex flex-row items-center justify-start text-gray-500">
                {suffix}
              </span>
            </div>
          )}
          {!!inputError && !suffix && <ErrorSVG />}
        </div>
      </div>
      {!!inputError && (
        <p className="mt-1 text-xs text-red-600">{inputError}</p>
      )}
    </div>
  );
});

const ErrorSVG = () => (
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none fadeIn">
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
