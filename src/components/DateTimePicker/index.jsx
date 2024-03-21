import React, { useState, useEffect } from "react";

import classnames from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { isPresent, isNotPresent } from "neetocist";
import PropTypes from "prop-types";

import DatePicker from "components/DatePicker";
import Label from "components/Label";
import TimePickerInput from "components/TimePickerInput";
import { useId } from "hooks";
import { hyphenize, noop } from "utils";

import { getDateTime, getAllowedTime } from "./utils";

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
  minDateTime,
  maxDateTime,
  onTimeInputBlur = noop,
  onBlur = noop,
}) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [changedField, setChangedField] = useState();
  const timeRef = React.useRef(null);
  const defaultId = useId(id);
  const errorId = `error_${defaultId}`;

  useEffect(() => {
    const inputValue = value || defaultValue;
    if (isPresent(inputValue) && dayjs(inputValue).isValid()) {
      const dateTime = dayjs.isDayjs(inputValue)
        ? inputValue
        : dayjs(inputValue);
      setDate(dateTime);
      setTime(dateTime);
    }
  }, [value, defaultValue]);

  useEffect(() => {
    if (isNotPresent(changedField)) return;
    onChange(getDateTime(date, time), changedField);
    setChangedField(); // reset to avoid unnecessary trigger on rerender
  }, [date, time, changedField]);

  const handleDateChange = newDate => {
    timeRef.current
      ?.querySelector(".react-time-picker__inputGroup__hour")
      ?.focus();

    setDate(newDate);
    setTime(getAllowedTime(newDate, time, minDateTime, maxDateTime));
    setChangedField("date");
  };

  const handleTimeChange = newTime => {
    setTime(newTime.isValid() ? newTime : null);
    if (newTime.isValid() && !date) setDate(newTime);
    setChangedField("time");
  };

  const handleTimeBlur = () => {
    const dateTime = getDateTime(date, time);
    onTimeInputBlur(dateTime);
    onBlur(dateTime);
  };

  return (
    <div className="neeto-ui-input__wrapper">
      {label && <Label {...{ required, ...labelProps }}>{label}</Label>}
      <div className={classnames("neeto-ui-date-time-input", className)}>
        <DatePicker
          {...{
            dateFormat,
            dropdownClassName,
            nakedInput,
            popupClassName,
            size,
          }}
          error={!!error}
          maxDate={maxDateTime}
          minDate={minDateTime}
          picker="date"
          showTime={false}
          type="date"
          value={date}
          onChange={handleDateChange}
          {...datePickerProps}
        />
        <TimePickerInput
          {...{ error, nakedInput, size }}
          error={!!error}
          maxTime={date?.isSame(maxDateTime, "day") && maxDateTime?.toDate()}
          minTime={date?.isSame(minDateTime, "day") && minDateTime?.toDate()}
          ref={timeRef}
          value={time}
          onBlur={handleTimeBlur}
          onChange={handleTimeChange}
          {...timePickerProps}
        />
      </div>
      {!!error && (
        <p
          className="neeto-ui-input__error"
          data-cy={`${hyphenize(label)}-input-error`}
          id={errorId}
        >
          {error}
        </p>
      )}
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
   * To specify minimum allowed date time
   */
  minDateTime: PropTypes.object,
  /**
   * To specify maximum allowed date time
   */
  maxDateTime: PropTypes.object,
};

export default React.memo(DateTimePicker);
