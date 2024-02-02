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

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };
dayjs.extend(customParseFormat);

const DATE_FORMAT = "YYYY-MM-DD";
const TIME_FORMAT = "HH:mm";

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
  const [open, setOpen] = useState(datePickerProps?.open);
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

    if (isPresent(date) && isPresent(time)) {
      onChange(
        dayjs(`${date.format(DATE_FORMAT)} ${time.format(TIME_FORMAT)}`),
        changedField
      );
    } else {
      onChange(null, changedField);
    }
    setChangedField(); // reset to avoid unnecessary trigger on rerender
  }, [date, time, changedField]);

  const handleDateChange = newDate => {
    setOpen(false);
    timeRef.current
      ?.querySelector(".react-time-picker__inputGroup__hour")
      ?.focus();

    setDate(newDate);
    if (!time) setTime(newDate);
    setChangedField("date");
  };

  const handleTimeChange = newTime => {
    setTime(newTime.isValid() ? newTime : null);
    if (newTime.isValid() && !date) setDate(newTime);
    setChangedField("time");
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * To specify the default values to be displayed inside the DatePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * The callback function that will be triggered when time picker loses focus (onBlur event).
   */
  onTimeInputBlur: PropTypes.func,
};

export default React.memo(DateTimePicker);
