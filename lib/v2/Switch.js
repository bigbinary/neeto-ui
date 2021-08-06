import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";
import Label from "./Label";

const Switch = ({
  label = "",
  required = false,
  className = "",
  error = "",
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
          <span aria-hidden="true" className="nui-switch"></span>
        </label>
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-switch-label`}
            htmlFor={id}
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
