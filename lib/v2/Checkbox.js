import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import Label from "./Label";

const Checkbox = ({
  label = "",
  error = "",
  className = "",
  required = false,
  ...otherProps
}) => {
  const id = useId(otherProps.id);
  return (
    <div className={classnames(["nui-input__wrapper", className])}>
      <div className="nui-checkbox__item">
        <input
          id={id}
          name={id}
          type="checkbox"
          className="nui-checkbox"
          required={required}
          aria-invalid={!!error}
          {...otherProps}
        />
        {label && <Label>{label}</Label>}
      </div>
      {!!error && <p className="nui-input__error">{error}</p>}
    </div>
  );
};

export default Checkbox;
