import React, { useEffect, useState } from "react";

import classnames from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PropTypes from "prop-types";

import { TimePickerInput, DatePicker, Label } from "components";
import { useId } from "hooks";
import { hyphenize, noop } from "utils";

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
  onDatePickerBlur = noop,
  onTimePickerBlur = noop,
  onDatePickerFocus = noop,
  onTimePickerFocus = noop,
  datePickerProps,
  timePickerProps,
  autoUpdateTime = true,
}) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [isHourFocused, setIsHourFocused] = useState(false);
  const [isMinuteFocused, setIsMinuteFocused] = useState(false);

  const timeRef = React.useRef(null);
  const defaultId = useId(id);
  const errorId = `error_${defaultId}`;
  const handleDateChange = date => {
    setDate(date);
    if (autoUpdateTime) setTime(date);
    setOpen(false);
    onChange(date);
    onDatePickerBlur(date);
    timeRef.current
      ?.querySelector(".react-time-picker__inputGroup__hour")
      ?.focus();
  };

  const handleTimeChange = (_, value) => {
    const currentTime = dayjs(value, "HH:mm");
    setTime(value ? currentTime : null);
    const dateTime = dayjs(`${date?.format("YYYY-MM-DD")} ${value || ""}`);
    onChange(dateTime);
  };

  const handleTimePickerBlur = () => {
    if (!isHourFocused && !isMinuteFocused) return;
    onTimePickerBlur(time);
    setIsHourFocused(false);
    setIsMinuteFocused(false);
  };

  useEffect(() => {
    if (timeRef.current) {
      const focusHour = () => setIsHourFocused(true);
      const focusMinute = () => setIsMinuteFocused(true);
      const hourRef = timeRef.current?.querySelector(
        ".react-time-picker__inputGroup__hour"
      );

      const minuteRef = timeRef.current?.querySelector(
        ".react-time-picker__inputGroup__minute"
      );
      hourRef?.addEventListener("focus", focusHour);
      minuteRef?.addEventListener("focus", focusMinute);

      return () => {
        hourRef?.removeEventListener("focus", focusHour);
        minuteRef?.removeEventListener("focus", focusMinute);
      };
    }

    return () => {};
  }, [timeRef]);

  return (
    <div className="neeto-ui-input__wrapper">
      {label && <Label {...{ required, ...labelProps }}>{label}</Label>}
      <div className={classnames("neeto-ui-date-time-input", className)}>
        <DatePicker
          {...{
            dateFormat,
            defaultValue,
            dropdownClassName,
            nakedInput,
            open,
            popupClassName,
            size,
            value,
          }}
          error={!!error}
          picker="date"
          showTime={false}
          type="date"
          onBlur={() => setOpen(false)}
          onChange={handleDateChange}
          onFocus={() => {
            onDatePickerFocus(date);
            setOpen(true);
          }}
          {...datePickerProps}
        />
        <TimePickerInput
          {...{ error, nakedInput, size }}
          error={!!error}
          ref={timeRef}
          value={time}
          onBlur={handleTimePickerBlur}
          onChange={handleTimeChange}
          onFocus={onTimePickerFocus}
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
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify the default values to be displayed inside the DatePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * The callback function that will be triggered when date picker loses focus (onBlur event).
   */
  onDatePickerBlur: PropTypes.func,
  /**
   * The callback function that will be triggered when time picker loses focus (onBlur event).
   */
  onTimePickerBlur: PropTypes.func,
  /**
   * The callback function that will be triggered when date picker gains focus (onFocus event).
   */
  onDatePickerFocus: PropTypes.func,
  /**
   * The callback function that will be triggered when time picker gains focus (onFocus event).
   */
  onTimePickerFocus: PropTypes.func,
  /**
   * Controls whether the time updates on date changes.
   */
  autoUpdateTime: PropTypes.bool,
};

export default DateTimePicker;
