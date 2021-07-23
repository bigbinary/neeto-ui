import React from "react";
import classnames from "classnames";
import { useId } from "@reach/auto-id";

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
        {label && (
          <h4 className="mb-4 ml-2 text-sm font-medium leading-5 text-gray-800">
            {label}
          </h4>
        )}
      </div>
      {!!error && <p className="nui-input__error">{error}</p>}
    </div>
  );
};

export default Checkbox;
