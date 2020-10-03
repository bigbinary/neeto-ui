import React, { Component } from "react";
import classnames from "classnames";
import Label from "./Label";

class Input extends Component {
  render() {
    const {
      size,
      type,
      label,
      value,
      error,
      suffix,
      prefix,
      disabled,
      helpText,
      onChange,
      className,
      maxLength,
      labelProps,
      dataTestId,
      placeholder,
      leadingIcon,
      required = false,
      hideCharacterCount,
      ...otherProps
    } = this.props;

    const baseClasses =
      "form-input block w-full sm:text-sm sm:leading-5 flex flex-row justify-start items-center transition-all duration-200";
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
          "flex flex-col items-start justify-start",
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
        <div className="relative w-full rounded-md shadow-sm">
          {leadingIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className={leadingIcon}></i>
            </div>
          )}
          <div
            className={classnames(baseClasses, {
              "focus-within:shadow-focus-purple focus-within:border-purple-400": !inputError,
              [errorClasses]: !!inputError,
              "bg-gray-50 cursor-not-allowed": disabled,
              "pr-10": !suffix && !!inputError,
              "pl-10": leadingIcon,
              "py-1.5": size === "small"
            })}
          >
            {prefix && (
              <div className="flex items-center pr-1">
                <span className="text-gray-500 sm:text-sm sm:leading-5">
                  {prefix}
                </span>
              </div>
            )}
            <input
              onChange={onChange}
              value={value || ""}
              type={type}
              placeholder={placeholder}
              className={classnames(
                ["w-full focus:outline-none bg-transparent"],
                { "cursor-not-allowed": disabled }
              )}
              disabled={disabled}
              data-test-id={dataTestId}
              maxLength={maxLength}
              {...otherProps}
            />
            {suffix && (
              <div className="flex items-center pl-1">
                <span className="text-gray-500 sm:text-sm sm:leading-5">
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
  }
}

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
