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
        "nui-radio__wrapper",
        className,
      ])}
    >
      {label && (
        <Label className="nui-radio__label">
          {label}
        </Label>
      )}
      <div
        className={classnames("nui-radio__container", {
          "nui-radio__container--stacked": stacked,
        })}
      >
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              const { id, value, disabled, label } = option;
              const checked = String(field.value) === String(value);
              return (
                <div
                  key={id || value}
                  className={classnames([
                    "nui-radio__item",
                    childClassName,
                    margin,
                  ])}
                >
                  <input
                    className="nui-radio"
                    type="radio"
                    id={id || value}
                    disabled={disabled}
                    {...field}
                    {...rest}
                    value={value}
                    checked={checked}
                  />
                  {label && (
                    <Label htmlFor={id || value}>
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
