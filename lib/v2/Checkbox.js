import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";
import Label from "./Label";

const Checkbox = ({
  label = "",
  error = "",
  className = "",
  required = false,
  ...otherProps
}) => {
  const id = useId(otherProps.id);
  const errorId = `error_${id}`;
  return (
    <div className={classnames(["nui-checkbox__wrapper", className])}>
      <div className="nui-checkbox__container">
        <input
          id={id}
          name={id}
          type="checkbox"
          className="nui-checkbox"
          required={required}
          aria-invalid={!!error}
          {...otherProps}
        />
        {label && (
          <Label data-cy={`${hyphenize(label)}-checkbox-label`} htmlFor={id}>
            {label}
          </Label>
        )}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-checkbox-error`}
          className="nui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
