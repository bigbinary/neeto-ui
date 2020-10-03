import React from "react";
import classnames from "classnames";
import { v4 as uuid } from "uuid";

const Checkbox = ({
  id = "",
  className,
  name,
  label,
  required,
  dataTestId,
  ...otherProps
}) => {
  const uniqueId = uuid();

  return (
    <>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            name={name}
            type="checkbox"
            className={classnames([
              "w-4 h-4 text-purple-500 transition duration-200 ease-in-out form-checkbox cursor-pointer",
              className
            ])}
            data-test-id={dataTestId}
            id={id || uniqueId}
            {...otherProps}
          />
        </div>
        {(label || required) && (
          <label
            htmlFor={id || uniqueId}
            className="mb-0 ml-2 text-sm font-medium leading-5 text-gray-700"
          >
            {label || (required ? <span className="text-red-700">*</span> : "")}
          </label>
        )}
      </div>
    </>
  );
};

export default Checkbox;
