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

const Switch = (props) => {
  const {
    label = "",
    className = "",
    labelProps = "",
    error,
    ...otherProps
  } = props;

  const id = useId(props.id);

  return (
    <div className={classnames({ "flex flex-col": error })}>
      <div className={classnames(["nui-switch__wrapper", className])}>
        <label className="relative flex flex-row items-center justify-start">
          <span
            role="checkbox"
            tabIndex={0}
            aria-checked={otherProps["checked"]}
            className={classnames("nui-switch__container", {
              "nui-switch__container--checked": otherProps["checked"],
              "nui-switch__container--disabled": otherProps["disabled"],
            })}
            data-cy={`${hyphenize(label)}-switch-container`}
          >
            <input
              id={id}
              name={id}
              type="checkbox"
              className="hidden w-0 h-0 opacity-0"
              {...otherProps}
            />
            <span
              aria-hidden="true"
              className={classnames("nui-switch", {
                "nui-switch--checked": otherProps["checked"],
              })}
            >
              {otherProps["checked"] ? <CheckedState /> : <UncheckedState />}
            </span>
          </span>
        </label>
        {label && (
          <Label htmlFor={id} className="ml-3" {...labelProps}>
            {label}
          </Label>
        )}
      </div>
      {error && <p className="nui-input__error">{error}</p>}
    </div>
  );
};

export default Switch;
