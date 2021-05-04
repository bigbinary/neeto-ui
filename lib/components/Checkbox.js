import React from "react";
import classnames from "classnames";
import { v4 as uuid } from "uuid";
import Label from "./Label";

const uniqueId = uuid();

const Checkbox = ({
  id = uniqueId,
  name = uniqueId,
  label = "",
  error = "",
  className = "",
  required = false,
  ...otherProps
}) => {

  return (
    <div
      className={classnames([
        "flex flex-col items-start justify-start",
        className,
      ])}
    >
      <div className="flex flex-row items-center justify-start">
        <input
          name={name}
          type="checkbox"
          className="nui-checkbox"
          id={id}
          required={required}
          aria-invalid={!!error}
          {...otherProps}
        />
        {(label || required) && (
          <Label htmlFor={id} className="ml-3" required={required}>
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
