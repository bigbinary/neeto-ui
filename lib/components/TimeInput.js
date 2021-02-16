import React from "react";
import { TimePicker, TimePrecision } from "@blueprintjs/datetime";
import Label from "./Label";
import classnames from "classnames";

export default function TimeInput(props) {
  const {
    label,
    value,
    variant,
    onChange,
    placeholder,
    required,
    disabled,
    defaultValue,
    useAmPm = true,
    minuteStep = 1,
    labelProps,
    helpText,
    className,
    precision = TimePrecision.MINUTE,
    ...otherProps
  } = props;

  return (
    <div className={classnames(["nh-time-input__wrapper", className])}>
      {label && (
        <Label
          label={label}
          required={required}
          helpText={helpText}
          className="mb-1"
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <TimePicker
        precision={precision}
        defaultValue={new Date(defaultValue)}
        value={new Date(value)}
        useAmPm={useAmPm}
        minuteStep={minuteStep}
        required={required}
        disabled={disabled}
        onChange={onChange}
        variant={variant}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
}
