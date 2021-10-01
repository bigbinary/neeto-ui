import React from "react";
import classnames from "classnames";
import { Field } from "formik";
import Label from "../Label";
import PropTypes from "prop-types";

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
        "neeto-ui-radio__wrapper",
        className,
      ])}
    >
      {label && (
        <Label className="neeto-ui-radio__label">
          {label}
        </Label>
      )}
      <div
        className={classnames("neeto-ui-radio__container", {
          "neeto-ui-radio__container--stacked": stacked,
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
                    "neeto-ui-radio__item",
                    childClassName,
                    margin,
                  ])}
                >
                  <input
                    className="neeto-ui-radio"
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

RadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      disabled: PropTypes.bool,
      label: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
  childClassName: PropTypes.string,
  stacked: PropTypes.bool,
};

export default RadioGroup;
