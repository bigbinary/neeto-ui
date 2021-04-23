import React from "react";
import { TimePicker, TimePrecision } from "@blueprintjs/datetime";
import Label from "./Label";
import classnames from "classnames";

export default function TimeInput(props) {
  const {
    value,
    required,
    defaultValue,
    error = "",
    label = "",
    labelProps = "",
    useAmPm = true,
    minuteStep = 1,
    infoText = "",
    helpText = "",
    className = "",
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
        defaultValue={new Date(defaultValue)}
        value={new Date(value)}
        useAmPm={useAmPm}
        minuteStep={minuteStep}
        required={required}
        precision={precision}
        {...otherProps}
      />
      {!!error && (
        <p className="nui-input__error">{error}</p>
      )}
      {helpText && (
        <p className="nui-input__help-text">{helpText}</p>
      )}
    </div>
  );
}


