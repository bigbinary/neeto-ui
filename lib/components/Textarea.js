import React, { Component } from "react";
import classnames from "classnames";
import Label from "./Label";
class Textarea extends Component {
  render() {
    const {
      label,
      value,
      error,
      required,
      disabled,
      maxLength,
      className,
      labelProps,
      placeholder,
      infoText = "",
      helpText = "",
      hideCharacterCount,
      ...otherProps
    } = this.props;

    //Character Limit
    let currentLength = value ? value.length : 0;
    let inputError = error;
    if (hideCharacterCount && currentLength >= maxLength) {
      inputError = "Character limit exceeded";
    }

    return (
      <div
        className={classnames([
          "nui-input__wrapper",
          className,
        ])}
      >
        {(label || maxLength) && (
          <Label
            label={label}
            required={required}
            infoText={infoText}
            currentLength={currentLength}
            maxLength={maxLength}
            hideCharacterCount={hideCharacterCount}
            className="mb-1"
            {...labelProps}
          >
            {label}
          </Label>
        )}
        <div className={classnames("nui-input px-2.5 py-2", {
          "nui-input--error": !!inputError,
          "nui-input--disabled": !!disabled,
        })}>
          <textarea
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            {...otherProps}
          />
          {!!inputError && <ErrorSVG />}
        </div>
        {!!inputError && (
          <p className="nui-input__error">{inputError}</p>
        )}
        {helpText && (
          <p className="nui-input__help-text">{helpText}</p>
        )}
      </div>
    );
  }
}

const ErrorSVG = () => (
  <div className="flex flex-row items-center self-start justify-start ml-2 pointer-events-none fadeIn">
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

export default Textarea;
