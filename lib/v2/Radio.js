import React from "react";
import classnames from "classnames";
import Label from "./Label";

const Radio = ({
  label = "",
  children,
  stacked = false,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div className={classnames(["nui-input__wrapper", className])}>
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
  return (
    <div className={classnames(["nui-radio__item", className])}>
      <input type="radio" className="nui-radio" {...otherProps} />
      {label && <Label>{label}</Label>}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
