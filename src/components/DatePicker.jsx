import React, { forwardRef } from "react";

import { DatePicker as AntDatePicker } from "antd";
import classnames from "classnames";
import { Left, Right, Calendar, Close } from "neetoicons";
import PropTypes from "prop-types";

import { useSyncedRef, useId } from "hooks";
import { convertToDayjsObjects, noop, hyphenize } from "utils";

import Label from "./Label";

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };

const { RangePicker } = AntDatePicker;

const datePickerTypes = { range: RangePicker, date: AntDatePicker };

const IconOverride = ({ icon: Icon }) => (
  <span className="neeto-ui-btn neeto-ui-btn--style-text neeto-ui-btn--size-medium neeto-ui-btn--icon-only">
    <Icon className="neeto-ui-btn__icon" size={20} />
  </span>
);

const DatePicker = forwardRef(
  (
    {
      className = "",
      label = "",
      size = INPUT_SIZES.medium,
      dropdownClassName = "",
      popupClassName = "",
      dateFormat = "DD/MM/YYYY",
      timeFormat = "HH:mm:ss",
      onChange = noop,
      onOk = noop,
      picker = "date",
      showTime = false,
      type = "date",
      nakedInput = false,
      error = "",
      defaultValue,
      value,
      labelProps,
      required = false,
      ...otherProps
    },
    ref
  ) => {
    const id = useId(otherProps.id);
    const datePickerRef = useSyncedRef(ref);

    const Component = datePickerTypes[type?.toLowerCase()];
    const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

    const errorId = `error_${id}`;

    const handleOnChange = (date, dateString) => {
      type === "range" && !date
        ? onChange([], dateString)
        : onChange(date, dateString);
    };

    return (
      <div className="neeto-ui-input__wrapper">
        {label && <Label {...{ required, ...labelProps }}>{label}</Label>}
        <Component
          {...{ format, onOk, picker }}
          data-cy={label ? `${hyphenize(label)}-input` : "picker-input"}
          defaultValue={convertToDayjsObjects(defaultValue)}
          ref={datePickerRef}
          showTime={showTime && { format: timeFormat }}
          value={convertToDayjsObjects(value)}
          className={classnames("neeto-ui-date-input", [className], {
            "neeto-ui-date-input--small": size === "small",
            "neeto-ui-date-input--medium": size === "medium",
            "neeto-ui-date-input--large": size === "large",
            "neeto-ui-date-input--disabled": otherProps.disabled,
            "neeto-ui-date-input--naked": nakedInput,
            "neeto-ui-date-input--error": !!error,
          })}
          popupClassName={classnames("neeto-ui-date-time-dropdown", [
            dropdownClassName, // Will be removed in the next major version
            popupClassName,
          ])}
          onChange={handleOnChange}
          {...otherProps}
          nextIcon={<IconOverride icon={Right} />}
          prevIcon={<IconOverride icon={Left} />}
          suffixIcon={<Calendar size={16} />}
          superNextIcon={<IconOverride icon={Right} />}
          superPrevIcon={<IconOverride icon={Left} />}
          allowClear={{
            clearIcon: <Close data-cy="date-time-clear-icon" size={16} />,
          }}
        />
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
  }
);

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = {
  /**
   * To provide external classnames to DatePicker component.
   */
  className: PropTypes.string,
  /**
   * To set the text to be displayed above the DatePicker.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To set the size of the DatePicker.
   */
  size: PropTypes.oneOf(Object.values(INPUT_SIZES)),
  /**
   * To set the DatePicker as naked Input field.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the error message to be shown in the DatePicker.
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * To set DatePicker as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To specify custom classnames to be applied to the DatePicker dropdown.
   */
  dropdownClassName: PropTypes.string,
  /**
   * To specify the date format.
   */
  dateFormat: PropTypes.string,
  /**
   * To specify the time format.
   */
  timeFormat: PropTypes.string,
  /**
   * For `DateInput`,(date, dateString) => {} <br />
   * For `DateRange`, (date, [startDate, endDate]) => {}
   */
  onChange: PropTypes.func,
  /**
   * Callback function which will be invoked when ok button is clicked in DateInput
   */
  onOk: PropTypes.func,
  /**
   * To specify the type of the picker.
   */
  picker: PropTypes.oneOf(["date", "week", "month", "quarter", "year"]),
  /**
   * To show time picker
   */
  showTime: PropTypes.bool,
  /**
   * To specify the type of the DatePicker.
   */
  type: PropTypes.oneOf(Object.keys(datePickerTypes)),
  /**
   * To specify the values to be displayed inside the DatePicker.
   */
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify the default values to be displayed inside the DatePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify whether the Date picker is required or not.
   */
  required: PropTypes.bool,
};

export default DatePicker;
