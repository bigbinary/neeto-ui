import React from "react";

import PropTypes from "prop-types";
import TimePicker from "react-time-picker";

import Label from "components/Label";

const TimePickerInput = ({
  format = "hh:mm:ss a",
  maxDetail = "second",
  hourPlaceholder = "hh",
  minutePlaceholder = "mm",
  secondPlaceholder = "ss",
  label,
  labelProps,
  ...otherProps
}) => (
  <div className="neeto-ui-input__wrapper">
    {label && <Label {...labelProps}>{label}</Label>}
    <TimePicker
      {...{
        maxDetail,
        hourPlaceholder,
        minutePlaceholder,
        secondPlaceholder,
        format,
      }}
      disableClock
      clearIcon={null}
      {...otherProps}
    />
  </div>
);

TimePickerInput.displayName = "TimePicker";

TimePickerInput.propTypes = {
  /**
   * To set the text to be displayed above the TimePicker.
   */
  label: PropTypes.string,
  /**
   * Input format based on Unicode Technical Standard #35. Supported values are: H, HH, h, hh, m, mm, s, ss, a.
   */
  format: PropTypes.string,
  /**
   * The level of detail in selecting time can be from 'hour', 'minute' or 'second'
   */
  maxDetail: PropTypes.oneOf(["hour", "minute", "second"]),
  /**
   * placeholder for the hour input.
   */
  hourPlaceholder: PropTypes.string,
  /**
   * placeholder for the minute input.
   */
  minutePlaceholder: PropTypes.string,
  /**
   * placeholder for the second input.
   */
  secondPlaceholder: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To specify the values to be displayed inside the TimePicker.
   */
  value: PropTypes.string,
  /**
   * The callback function that will be triggered when value changes.
   */
  onChange: PropTypes.string,
  /**
   * To provide external classnames to TimePicker target wrapper.
   */
  className: PropTypes.string,
  /**
   * To set the clear icon to be shown in the input.
   */
  clearIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  /**
   * To specify whether the TimePicker is disabled or not.
   */
  disabled: PropTypes.bool,
};

export default TimePickerInput;
