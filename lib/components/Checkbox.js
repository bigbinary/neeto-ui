import React from "react";
import classnames from "classnames";
import { v4 as uuid } from "uuid";
import Label from "./Label";

const Checkbox = ({
  id = "",
  name = "",
  label = "",
  error = "",
  className = "",
  checked = false,
  required = false,
  disabled = false,
  ...otherProps
}) => {
  const uniqueId = uuid();

  return (
    <div className="nui-input__wrapper">
      <div className="relative flex flex-row items-center justify-start">
        <input
          name={name || uniqueId}
          type="checkbox"
          className={classnames([
            "nui-checkbox",
            className,
          ])}
          id={id || uniqueId}
          disabled={disabled}
          checked={checked}
          {...otherProps}
        />
        {(label || required) && (
          <Label htmlFor={id || uniqueId} className="ml-3" required={required}>
            {label}
          </Label>
        )}
      </div>
      {!!error && (
        <p className="nui-input__error">{error}</p>
      )}
    </div>
  );
};

export default Checkbox;
