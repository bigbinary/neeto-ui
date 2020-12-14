import React from "react";
import classnames from "classnames";
import { v4 as uuid } from "uuid";
import Label from "./Label";

const Checkbox = ({
  id = "",
  className = "",
  name,
  label = "",
  required = false,
  ...otherProps
}) => {
  const uniqueId = uuid();

  return (
    <div className="relative flex flex-row items-center justify-start">
      <div className="flex flex-row items-center justify-center h-5">
        <input
          name={name}
          type="checkbox"
          className={classnames([
            "w-4 h-4 text-purple-500 transition duration-200 ease-in-out form-checkbox cursor-pointer",
            className
          ])}
          id={id || uniqueId}
          {...otherProps}
        />
      </div>
      {(label || required) && (
        <Label
          htmlFor={id || uniqueId}
          className="ml-3"
          required={required}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default Checkbox;
