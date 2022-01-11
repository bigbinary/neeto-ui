import React, { forwardRef } from "react";
import * as dayjs from "dayjs";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";

import Label from "./Label";
import { hyphenize } from "../common";

dayjs.extend(weekday);
dayjs.extend(localeData);

const AntTimePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntTimePicker;

const timePickerTypes = {
  range: RangePicker,
  time: AntTimePicker,
};
const noop = () => {};
const INPUT_SIZES = ["small", "large"];
const timePickerInterval = {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
};

const TimePicker = (
  {
    className,
    label,
    size = "small",
    format = "HH:mm",
    interval = timePickerInterval,
    onChange = noop,
    type = "time",
    nakedInput = false,
    disabled,
    error = null,
    ...otherProps
  },
  ref
) => {
  const Component = timePickerTypes[type.toLowerCase()];

  const id = useId(otherProps.id);
  const errorId = `error_${id}`;

  return (
    <div className="neeto-ui-input__wrapper">
      {label && <Label>{label}</Label>}
      <Component
        ref={ref}
        format={format}
        hourStep={interval.hourStep}
        minuteStep={interval.minuteStep}
        onChange={onChange}
        className={classnames("neeto-ui-time-input", [className], {
          "neeto-ui-time-input--small": size === "small",
          "neeto-ui-time-input--disabled": disabled,
          "neeto-ui-time-input--naked": nakedInput,
          "neeto-ui-time-input--error": error,
        })}
        secondStep={interval.secondStep}
        disabled={disabled}
        {...otherProps}
        picker="time"
        mode={undefined}
      />

      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-input-error`}
          className="neeto-ui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
    </div>
  );
};

TimePicker.displayName = "TimePicker";

TimePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(INPUT_SIZES),
  nakedInput: PropTypes.bool,
  error: PropTypes.string,
  format: PropTypes.string,
  interval: PropTypes.object,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["time", "range"]),
  disabled: PropTypes.bool,
};

export default forwardRef(TimePicker);
