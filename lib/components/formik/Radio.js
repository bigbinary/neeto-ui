import React from "react";
import classnames from "classnames";
import { Field } from "formik";
import Label from "../Label";

const RadioGroup = ({
  label,
  name,
  options,
  className = "",
  childClassName = "",
  stacked = false,
  ...rest
}) => {
  const singleChild = options.length == 1;
  const margin = singleChild ? null : stacked ? "mb-3" : "mr-8";
  return (
    <div
      className={classnames([
        "flex flex-col items-start justify-start",
        className
      ])}
    >
      {label && (
        <h4 className="mb-3 text-sm font-medium leading-5 text-gray-800">
          {label}
        </h4>
      )}
      <div
        className={classnames(["flex justify-start"], {
          "flex-row": !stacked,
          "flex-col": stacked
        })}
      >
        <Field name={name}>
          {({ field }) => {
            return options.map(option => {
              const { id, value, disabled, label } = option;
              const checked = String(field.value) === String(value);
              return (
                <div
                  key={id || value}
                  className={classnames([
                    "flex flex-row items-center justify-start cursor-pointer",
                    childClassName,
                    margin
                  ])}
                >
                  <input
                    className={classnames("nui-radio", 
                    {
                      "bg-gray-100": disabled && !checked,
                      "bg-gray-300": disabled && checked
                    })}
                    type="radio"
                    id={id || value}
                    disabled={disabled}
                    {...field}
                    {...rest}
                    value={value}
                    checked={checked}
                  />
                  {label && (
                    <Label
                      htmlFor={id || value}
                      className="ml-2"
                    >
                      {label}
                    </Label>
                  )}
                </div>
              );
            });
          }}
        </Field>
      </div>
    </div>
  );
};

export default RadioGroup;