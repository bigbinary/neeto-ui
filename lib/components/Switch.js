import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import Label from "./Label";
import { hyphenize } from "../common";

const CheckedState = () => (
  <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-100">
    <svg
      className="w-3 h-3 text-indigo-500"
      fill="currentColor"
      viewBox="0 0 12 12"
    >
      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
    </svg>
  </span>
);

const UncheckedState = () => (
  <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-in opacity-100">
    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
      <path
        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Switch = ({
  label = "",
  className = "",
  labelProps = "",
  error = "",
  required = false,
  ...otherProps
}) => {
  const { checked, disabled } = otherProps;
  const id = useId(otherProps.id);
  const errorId = `error_${id}`;
  return (
    <div className={classnames(["nui-switch__wrapper", className])}>
      <div className="nui-switch__container">
        <label
          className={classnames("nui-switch__item", {
            "nui-switch__item--checked": checked,
            "nui-switch__item--disabled": disabled,
          })}
        >
          <input type="checkbox" {...otherProps} />
          <span aria-hidden="true" className="nui-switch">
            {checked ? <CheckedState/> : <UncheckedState/>}
          </span>
        </label>
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-switch-label`}
            htmlFor={id}
            {...labelProps}
          >
            {label}
          </Label>
        )}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-switch-error`}
          className="nui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Switch;
