import React, { forwardRef, useRef, useEffect } from "react";

import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import classnames from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { isNotPresent } from "neetocist";
import PropTypes from "prop-types";
import { isNil } from "ramda";
import TimePicker from "react-time-picker";

import Label from "components/Label";
import { useId } from "hooks";
import { hyphenize, noop } from "utils";

import HoverIcon from "./HoverIcon";
import useRefState from "./useRefState";
import {
  getFormattedTime,
  getFormattedRange,
  toDayJs,
  isValid,
  getValid,
} from "./utils";

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
      minTime,
      maxTime,
      ...otherProps
    },
    ref
  ) => {
    const [value, valueRef, setValue] = useRefState(null);
    const componentRef = useRef(null);
    const id = useId(otherProps.id);
    const errorId = `error_${id}`;

    useEffect(() => {
      const value = inputValue || defaultValue;
      if (isNil(value) || isNotPresent(value)) {
        setValue(null);

        return;
      }

      setValue(
        (type === "range" ? getFormattedRange : getFormattedTime)(value)
      );
    }, [type, inputValue, defaultValue]);

    const handleChange = newValue => {
      setValue(newValue);
      if (isValid(minTime, maxTime, newValue)) {
        onChange(toDayJs(newValue), newValue);
      }
    };

    const onBlurHandle = () => {
      if (isValid(minTime, maxTime, value)) {
        onBlur(toDayJs(value), value);
      } else {
        const validValue = getValid(minTime, maxTime, value);
        setValue(validValue);
        onChange(toDayJs(validValue), validValue);
        onBlur(toDayJs(validValue), validValue);
      }

      return true;
    };

    const onAmPmChange = () => {
      const value = valueRef.current;
      if (!isValid(minTime, maxTime, value)) {
        const validValue = getValid(minTime, maxTime, value);
        setValue(validValue);
        onChange(toDayJs(validValue), validValue);
      }
    };

    // If you just make amPm select change, onBlurHandle is not triggering. A work around
    useEffect(() => {
      const amPmChange = () => setTimeout(onAmPmChange);
      const selectElements = document
        .getElementById(id)
        ?.querySelectorAll("[name='amPm']");

      selectElements?.forEach(element =>
        element.addEventListener("change", amPmChange)
      );

      return () => {
        selectElements?.forEach(element =>
          element.removeEventListener("change", amPmChange)
        );
      };
    }, [value]);

    const handleKeyDown = ({ code }) => {
      if (code !== "Enter") return;
      onBlurHandle();
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
          ref={componentRef}
          secondAriaLabel="ss"
          shouldCloseClock={onBlurHandle}
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
  /**
   * To specify the minimum time of the TimePickerInput.
   */
  minTime: PropTypes.string,
  /**
   * To specify the maximum time of the TimePickerInput.
   */
  maxTime: PropTypes.string,
};

export default TimePickerInput;
