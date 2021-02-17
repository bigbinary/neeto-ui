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
    infoText,
    helpText = "",
    className,
    precision = TimePrecision.MINUTE,
    ...otherProps
  } = props;

  return (
    <div className={classnames(["nui-time-input__wrapper", className])}>
      {label && (
        <Label
          label={label}
          required={required}
          infoText={infoText}
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
      {helpText && (
        <p className="mt-2 text-xs leading-relaxed text-gray-600">{helpText}</p>
      )}
    </div>
  );
}
