import React from "react";
import classnames from "classnames";
import { v4 as uuid } from "uuid";

const Radio = ({ stacked, label, className, children }) => {
  const singleChild = React.Children.count(children) === 1;
  const margin = singleChild ? null : stacked ? "mb-2" : "mr-4";
  return (
    <div
      className={classnames([
        "flex flex-col items-start justify-start",
        className
      ])}
    >
      {label && (
        <h4 className="mb-4 text-sm font-medium leading-5 text-gray-800">
          {label}
        </h4>
      )}
      <div
        className={classnames(["flex justify-start"], {
          "flex-row": !stacked,
          "flex-col": stacked
        })}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            className: classnames([child.props.className], [margin])
          });
        })}
      </div>
    </div>
  );
};

const Item = ({ name, id = name, label, className, ...otherProps }) => {
  const uniqueId = uuid();
  return (
    <div
      className={classnames([
        "flex flex-row items-center justify-start cursor-pointer",
        className
      ])}
    >
      <input
        id={id}
        name={name}
        type="radio"
        className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
        {...otherProps}
      />
      {label && (
        <label htmlFor={id || uniqueId} className="mb-0 ml-3 cursor-pointer">
          <span className="block text-sm font-medium leading-5 text-gray-600">
            {label}
          </span>
        </label>
      )}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
