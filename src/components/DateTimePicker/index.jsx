import React, { useState } from "react";

import classnames from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Calendar, RightArrow } from "neetoicons";
import PropTypes from "prop-types";

import DatePicker from "components/DatePicker";
import TimePickerInput from "components/TimePickerInput";
import { noop } from "utils";

import useDateTime from "./useDateTime";
import { getDateTime, getDateTimeRange } from "./utils";

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };
dayjs.extend(customParseFormat);

const DateTimePicker = ({
  className = "",
  label = "",
  size,
  dropdownClassName,
  popupClassName,
  dateFormat,
  onChange = noop,
  nakedInput = false,
  error = "",
  defaultValue,
  value,
  labelProps,
  required = false,
  id,
  datePickerProps,
  timePickerProps,
  startTimePickerProps,
  onTimeInputBlur = noop,
  onBlur = noop,
  type = "date",
}) => {
  const { date, time, onDateChange, onTimeChange, onStartTimeChange } =
    useDateTime({ value, defaultValue, onChange, type });
  const [timeFocused, setTimeFocused] = useState(false);

  const timeRef = React.useRef(null);
  const startTimeRef = React.useRef(null);

  const handleDateChange = newDate => {
    setTimeout(() => {
      (type === "date" ? timeRef : startTimeRef).current
        ?.querySelector(".react-time-picker__inputGroup__hour")
        ?.focus();
    });
    onDateChange(newDate);
  };

  const handleTimeBlur = () => {
    setTimeFocused(false);
    const value = (type === "date" ? getDateTime : getDateTimeRange)(
      date,
      time
    );
    onTimeInputBlur(value);
    onBlur(value);
  };

  const handleStartTimeBlur = () => {
    timeRef.current
      ?.querySelector(".react-time-picker__inputGroup__hour")
      ?.focus();
  };

  return (
    <div
      className={classnames("neeto-ui-date-time-input", className)}
      onBlur={() => setTimeFocused(false)}
    >
      <DatePicker
        {...{
          dateFormat,
          dropdownClassName,
          id,
          label,
          labelProps,
          nakedInput,
          popupClassName,
          required,
          size,
          type,
        }}
        className={classnames({ "ant-picker-focused": timeFocused })}
        error={!!error}
        picker="date"
        showTime={false}
        value={date}
        onChange={handleDateChange}
        {...(type === "range" && {
          separator: (
            <div className="flex items-center">
              <Calendar className="mr-2" size={16} />
              <TimePickerInput
                {...{ size }}
                nakedInput
                data-cy="start-time-picker-input"
                ref={startTimeRef}
                value={time?.[0]}
                onBlur={handleStartTimeBlur}
                onChange={onStartTimeChange}
                onFocus={() => setTimeFocused(true)}
                {...startTimePickerProps}
              />
              <RightArrow size={16} />
            </div>
          ),
          allowClear: false,
        })}
        suffix={
          <TimePickerInput
            {...{ size }}
            nakedInput
            data-cy="time-picker-input"
            ref={timeRef}
            value={type === "date" ? time : time?.[1]}
            onBlur={handleTimeBlur}
            onChange={onTimeChange}
            onFocus={() => setTimeFocused(true)}
            {...timePickerProps}
          />
        }
        {...datePickerProps}
      />
    </div>
  );
};

DateTimePicker.displayName = "DateTimePicker";

DateTimePicker.propTypes = {
  /**
   * To set the text to be displayed above the DateTimePicker.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * The callback function that will be triggered when value changes.
   */
  onChange: PropTypes.func,
  /**
   * To specify the error message to be shown in the DateTimePicker.
   */
  error: PropTypes.string,
  /**
   * To specify whether the Date Time Input is required or not.
   */
  required: PropTypes.bool,
  /**
   * To provide external classnames to DateTimePicker component.
   */
  className: PropTypes.string,
  /**
   * To set the text to be displayed above the DateTimePicker.
   */
  size: PropTypes.oneOf(Object.values(INPUT_SIZES)),
  /**
   * To set the DateTimePicker as naked Input field.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify custom classnames to be applied to the DatePicker dropdown.
   */
  dropdownClassName: PropTypes.string,
  /**
   * To specify the date format.
   */
  dateFormat: PropTypes.string,
  /**
   * To specify the values to be displayed inside the DatePicker.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * To specify the default values to be displayed inside the DatePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * @deprecated The callback function that will be triggered when time picker loses focus (onBlur event).
   */
  onTimeInputBlur: PropTypes.func,
  /**
   * The callback function that will be triggered when time picker loses focus (onBlur event).
   */
  onBlur: PropTypes.func,
  /**
   * To specify the type of the TimePickerInput.
   */
  type: PropTypes.oneOf(["date", "range"]),
  /**
   * To specify the  props to be passed to the DatePicker component.
   */
  datePickerProps: PropTypes.object,
  /**
   * To specify the  props to be passed to the TimePickerInput component.
   */
  timePickerProps: PropTypes.object,
  /**
   * To specify the  props to be passed to the start TimePickerInput component.
   */
  startTimePickerProps: PropTypes.object,
};

export default React.memo(DateTimePicker);
