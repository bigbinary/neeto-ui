import React from "react";
import { TimePicker as AntTimePicker } from "antd";
import PropTypes from "prop-types";

const { RangePicker } = AntTimePicker;

const timePickerTypes = { time: AntTimePicker, range: RangePicker };

const noop = () => {};

const timePickerInterval = {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
};

const TimePicker = ({
  className,
  format = "HH:mm",
  interval = timePickerInterval,
  onChange = noop,
  type = "time",
}) => {
  const Component = timePickerTypes[type.toLowerCase()];

  return (
    <Component
      format={format}
      hourStep={interval.hourStep}
      minuteStep={interval.minuteStep}
      onChange={onChange}
      className={className}
      secondStep={interval.secondStep}
      type={type}
    />
  );
};

TimePicker.propTypes = {
  className: PropTypes.string,
  format: PropTypes.string,
  interval: PropTypes.object,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["time", "range"]),
};

export default TimePicker;
