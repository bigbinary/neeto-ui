import React, { useId } from "react";

import classnames from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PropTypes from "prop-types";
import TimePicker from "react-time-picker";

import Label from "components/Label";
import { convertToDayjsObjects, hyphenize } from "utils";

dayjs.extend(customParseFormat);

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };

const TimePickerInput = ({
  className = "",
  label,
  labelProps,
  size = INPUT_SIZES.medium,
  nakedInput = false,
  format = "hh:mm:ss a",
  maxDetail = "second",
  hourPlaceholder = "hh",
  minutePlaceholder = "mm",
  secondPlaceholder = "ss",
  required = false,
  value,
  onChange,
  error = "",
  ...otherProps
}) => {
  const _id = useId();
  const id = otherProps.id || _id;
  const errorId = `error_${id}`;

  const handleChange = value => {
    const date = dayjs(value, "HH:mm:ss");
    onChange(date, value);
  };

  return (
    <div className="neeto-ui-input__wrapper">
      {label && (
        <Label required={required} {...labelProps}>
          {label}
        </Label>
      )}
      <TimePicker
        className={classnames("neeto-ui-time-picker", [className], {
          "neeto-ui-time-picker--small": size === "small",
          "neeto-ui-time-picker--medium": size === "medium",
          "neeto-ui-time-picker--large": size === "large",
          "neeto-ui-time-picker--disabled": otherProps.disabled,
          "neeto-ui-time-picker--naked": nakedInput,
          "neeto-ui-time-picker--error": !!error,
        })}
        {...{
          value,
          format,
          maxDetail,
          hourPlaceholder,
          minutePlaceholder,
          secondPlaceholder,
          id,
        }}
        disableClock
        clearIcon={null}
        value={convertToDayjsObjects(value)?.toDate()}
        onChange={handleChange}
        {...otherProps}
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
};

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
  value: PropTypes.string,
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
  error: PropTypes.string,
  /**
   * To specify whether the Date picker is required or not.
   */
  required: PropTypes.bool,
};

export default TimePickerInput;
