import React from "react";
import classnames from "classnames";

const Radio = ({
  label = "",
  children,
  stacked = false,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div className={classnames(["nui-input__wrapper", className])}>
      {label && (
        <h4 className="mb-4 text-sm font-medium leading-5 text-gray-800">
          {label}
        </h4>
      )}
      <div
        className={classnames(["nui-v2-radio__container"], {
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
      {label && (
        <h4 className="mb-4 ml-2 text-sm font-medium leading-5 text-gray-800">
          {label}
        </h4>
      )}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
