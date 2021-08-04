import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import Label from "./Label";

const Switch = ({
  label = "",
  className = "",
  labelProps = "",
  ...otherProps
}) => {
  const id = useId(otherProps.id);

  return (
    <label className={classnames(["nui-input__wrapper", className])}>
      <span
        role="checkbox"
        tabIndex={0}
        aria-checked={otherProps["checked"]}
        className={classnames("nui-switch__item", {
          "nui-switch__item--checked": otherProps["checked"],
          "nui-switch__item--disabled": otherProps["disabled"],
        })}
      >
        <input
          id={id}
          name={id}
          type="checkbox"
          className="nui-checkbox-input"
          {...otherProps}
        />
        <span
          aria-hidden="true"
          className={classnames("nui-switch", {
            "nui-switch--checked": otherProps["checked"],
          })}
        ></span>
      </span>
      {label && <Label>{label}</Label>}
    </label>
  );
};

export default Switch;
