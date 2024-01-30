import React, { useState, useEffect } from "react";

import classnames from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { isPresent } from "neetocist";
import PropTypes from "prop-types";

import { TimePickerInput, DatePicker, Label } from "components";
import { useId } from "hooks";
import { hyphenize, noop } from "utils";

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };
dayjs.extend(customParseFormat);

const DATE_FORMAT = "YYYY-MM-DD";

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
  onTimeInputBlur = noop,
  datePickerProps,
  timePickerProps,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [changedField, setChangedField] = useState();

  useEffect(() => {
    const inputValue = value || defaultValue;
    if (isPresent(inputValue) && dayjs(inputValue).isValid()) {
      const dateTime = dayjs(inputValue);
      setDate(dateTime);
      setTime(dateTime);
    }
  }, [value, defaultValue]);

  useEffect(() => {
    if (!isPresent(date) || !isPresent(time)) return;
    onChange(dayjs(`${date.format(DATE_FORMAT)} ${time}`), changedField);
  }, [date, time]);

  const timeRef = React.useRef(null);
  const defaultId = useId(id);
  const errorId = `error_${defaultId}`;

  const handleDateChange = newDate => {
    setOpen(false);
    setChangedField("date");
    setDate(newDate);
    timeRef.current
      ?.querySelector(".react-time-picker__inputGroup__hour")
      ?.focus();
  };

  const handleTimeChange = (_, newTime) => {
    setChangedField("time");
    setTime(newTime);
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
            open,
            popupClassName,
            size,
          }}
          error={!!error}
          picker="date"
          showTime={false}
          type="date"
          value={date}
          onBlur={() => setOpen(false)}
          onChange={handleDateChange}
          onFocus={() => setOpen(true)}
          {...datePickerProps}
        />
        <TimePickerInput
          {...{ error, nakedInput, size }}
          error={!!error}
          ref={timeRef}
          value={time}
          onBlur={onTimeInputBlur}
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
  value: PropTypes.string, // PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify the default values to be displayed inside the DatePicker.
   */
  defaultValue: PropTypes.string, // PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * The callback function that will be triggered when time picker loses focus (onBlur event).
   */
  onTimeInputBlur: PropTypes.func,
};

export default React.memo(DateTimePicker);
