import React, { forwardRef, useState, useEffect } from "react";

import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import classnames from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { isNotPresent } from "neetocist";
import PropTypes from "prop-types";
import TimePicker from "react-time-picker";

import Label from "components/Label";
import { useId } from "hooks";
import { hyphenize, noop } from "utils";

import HoverIcon from "./HoverIcon";
import { getFormattedTime, getFormattedRange, toDayJs } from "./utils";

dayjs.extend(customParseFormat);

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };

const timeComponents = { range: TimeRangePicker, time: TimePicker };

const TimePickerInput = forwardRef(
  (
    {
      type = "time",
      className = "",
      label,
      labelProps,
      size = INPUT_SIZES.medium,
      nakedInput = false,
      required = false,
      value: inputValue,
      defaultValue,
      onChange = noop,
      error = "",
      onBlur = noop,
      ...otherProps
    },
    ref
  ) => {
    const [value, setValue] = useState(null);
    const id = useId(otherProps.id);
    const errorId = `error_${id}`;

    useEffect(() => {
      if (isNotPresent(inputValue) && isNotPresent(defaultValue)) return;

      setValue(
        (type === "range" ? getFormattedRange : getFormattedTime)(
          inputValue || defaultValue
        )
      );
    }, [type, inputValue]);

    const handleChange = newValue => {
      setValue(newValue);
      onChange(toDayJs(newValue), newValue);
    };

    const handleShouldCloseClock = () => {
      onBlur(toDayJs(value), value);

      return true;
    };

    const handleKeyDown = ({ code }) => {
      if (code !== "Enter") return;
      onBlur(toDayJs(value), value);
    };

    const Component = timeComponents[type];

    return (
      <div {...{ ref }} className="neeto-ui-input__wrapper">
        {label && <Label {...{ required, ...labelProps }}>{label}</Label>}
        <Component
          {...{ id, value }}
          disableClock
          clearIcon={<HoverIcon time={!!value} />}
          format="hh:mm a"
          hourPlaceholder="HH"
          minutePlaceholder="mm"
          secondAriaLabel="ss"
          shouldCloseClock={handleShouldCloseClock}
          className={classnames("neeto-ui-time-picker", [className], {
            "neeto-ui-time-picker--small": size === "small",
            "neeto-ui-time-picker--medium": size === "medium",
            "neeto-ui-time-picker--large": size === "large",
            "neeto-ui-time-picker--disabled": otherProps.disabled,
            "neeto-ui-time-picker--naked": nakedInput,
            "neeto-ui-time-picker--error": !!error,
          })}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...otherProps}
        />
        {!!error && typeof error === "string" && (
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

TimePickerInput.displayName = "TimePicker";

TimePickerInput.propTypes = {
  /**
   * To set the text to be displayed above the TimePicker.
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
   * To specify the values to be displayed inside the TimePicker.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * To specify the values to be displayed inside the TimePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * The callback function that will be triggered when value changes.
   */
  onChange: PropTypes.func,
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
  /**
   * To specify the error message to be shown in the TimePicker.
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * To specify whether the Date picker is required or not.
   */
  required: PropTypes.bool,
  /**
   * The callback function that will be triggered when time picker loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * To specify the type of the TimePickerInput.
   */
  type: PropTypes.oneOf(Object.keys(timeComponents)),
};

export default TimePickerInput;
