import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import Label from "./Label";

const Radio = ({
  stacked = false,
  label = "",
  className = "",
  children,
  childClassName = "",
}) => {
  const singleChild = React.Children.count(children) === 1;
  const margin = singleChild ? null : stacked ? "mb-2" : "mr-4";
  return (
    <div
      className={classnames([
        "flex flex-col items-start justify-start",
        className,
      ])}
    >
      {label && (
        <h4 className="mb-4 text-sm font-medium leading-5 text-gray-800">
          {label}
        </h4>
      )}
      <div
        className={classnames(["flex justify-start", childClassName], {
          "flex-row": !stacked,
          "flex-col": stacked,
        })}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            className: classnames([child.props.className], [margin]),
          });
        })}
      </div>
    </div>
  );
};

const Item = (props) => {

  const {
    label = "",
    className = "",
    ...otherProps
  } = props;

  const id = useId(props.id);
  
  return (
    <div
      className={classnames([
        "flex flex-row items-center justify-start cursor-pointer",
        className,
      ])}
    >
      <input
        id={id}
        name={id}
        type="radio"
        className="nui-radio"
        {...otherProps}
      />
      {label && (
        <Label htmlFor={id} className="ml-2">
          {label}
        </Label>
      )}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
