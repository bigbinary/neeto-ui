import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import Label from "./Label";

const Checkbox = (props) => {

  const {
    label = "",
    error = "",
    className = "",
    required = false,
    ...otherProps
  } = props;

  const id = useId(props.id);
  const errorId = `error_${id}`;

  return (
    <div
      className={classnames([
        "flex flex-col items-start justify-start",
        className,
      ])}
    >
      <div className="flex flex-row items-center justify-start">
        <input
          id={id}
          name={id}
          type="checkbox"
          className="nui-checkbox"
          required={required}
          aria-invalid={!!error}
          aria-describedby={classnames({
            [errorId]: !!error,
          })}
          {...otherProps}
        />
        {(label || required) && (
          <Label htmlFor={id} className="ml-3" required={required}>
            {label}
          </Label>
        )}
      </div>
      {!!error && (
        <p
          id={errorId}
          className="nui-input__error"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
