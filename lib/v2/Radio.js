import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";
import Label from "./Label";

const Radio = ({
  label = "",
  children,
  stacked = false,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div className={classnames(["nui-radio__wrapper", className])}>
      {label && <Label>{label}</Label>}
      <div
        className={classnames(["nui-radio__container"], {
          "nui-radio__container--stacked": stacked,
          [containerClassName]: containerClassName,
        })}
      >
        {children}
      </div>
    </div>
  );
};

const Item = ({ label = "", className = "", ...otherProps }) => {
  const id = useId(otherProps.id);

  return (
    <div className={classnames(["nui-radio__item", className])}>
      <input id={id} type="radio" className="nui-radio" {...otherProps} />
      {label && (
        <Label data-cy={`${hyphenize(label)}-radio-label`} htmlFor={id}>
          {label}
        </Label>
      )}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
