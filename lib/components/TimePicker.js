import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";
import { Clock } from "@bigbinary/neeto-icons";

import Label from "./Label";
import { hyphenize } from "../common";
import { convertToDayjsObjects, useSyncedRef } from "../utils";

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };

const TIME_PICKER_INTERVAL = {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
};

const AntTimePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntTimePicker;

const timePickerTypes = {
  range: RangePicker,
  time: AntTimePicker,
};
const noop = () => {};

const TimePicker = forwardRef(
  (
    {
      className = "",
      label = "",
      size = INPUT_SIZES.medium,
      dropdownClassName = "",
      format = "HH:mm:ss",
      interval = TIME_PICKER_INTERVAL,
      onChange = noop,
      type = "time",
      nakedInput = false,
      disabled = false,
      error = "",
      defaultValue,
      value,
      ...otherProps
    },
    ref
  ) => {
    const id = useId(otherProps.id);
    const timePickerRef = useSyncedRef(ref);

    const Component = timePickerTypes[type.toLowerCase()];

    const errorId = `error_${id}`;

    let showTimeLabels = {};
    if (format.includes("s")) {
      showTimeLabels.second = true;
    }
    if (format.includes("m")) {
      showTimeLabels.minute = true;
    }
    if (format.includes("H") || format.includes("h")) {
      showTimeLabels.hour = true;
    }

    const panelRender = (originalPanel) => {
      return (
        <div className="neeto-ui-date-input-custom-panel">
          <div className="neeto-ui-date-input-custom-panel__header">
            <ul className="neeto-ui-date-input-custom-panel__header-cols">
              {showTimeLabels.hour && (
                <li className="neeto-ui-date-input-custom-panel__header-col">
                  Hour
                </li>
              )}
              {showTimeLabels.minute && (
                <li className="neeto-ui-date-input-custom-panel__header-col">
                  Minutes
                </li>
              )}
              {showTimeLabels.second && (
                <li className="neeto-ui-date-input-custom-panel__header-col">
                  Seconds
                </li>
              )}
            </ul>
          </div>
          <div className="neeto-ui-date-input-custom-panel__body">
            {originalPanel}
          </div>
        </div>
      );
    };

    return (
      <div className="neeto-ui-input__wrapper">
        {label && <Label>{label}</Label>}
        <Component
          ref={timePickerRef}
          format={format}
          hourStep={interval.hourStep}
          minuteStep={interval.minuteStep}
          onChange={onChange}
          className={classnames("neeto-ui-time-input", [className], {
            "neeto-ui-time-input--small": size === "small",
            "neeto-ui-time-input--medium": size === "medium",
            "neeto-ui-time-input--large": size === "large",
            "neeto-ui-time-input--disabled": disabled,
            "neeto-ui-time-input--naked": nakedInput,
            "neeto-ui-time-input--error": error,
          })}
          dropdownClassName={classnames("neeto-ui-date-time-dropdown", [
            dropdownClassName,
          ])}
          secondStep={interval.secondStep}
          disabled={disabled}
          {...otherProps}
          picker="time"
          mode={undefined}
          defaultValue={convertToDayjsObjects(defaultValue)}
          value={convertToDayjsObjects(value)}
          panelRender={panelRender}
          suffixIcon={<Clock size={16} />}
        />

        {!!error && (
          <p
            data-cy={`${hyphenize(label)}-input-error`}
            className="neeto-ui-input__error"
            id={errorId}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

TimePicker.displayName = "TimePicker";

TimePicker.propTypes = {
  /**
   * To provide external classnames to TimePicker component.
   */
  className: PropTypes.string,
  /**
   * To set the text to be displayed above the TimePicker.
   */
  label: PropTypes.string,
  /**
   * To set the size of the TimePicker.
   */
  size: PropTypes.oneOf(Object.values(INPUT_SIZES)),
  /**
   * To set the TimePicker as naked Input field.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the error message to be shown in the TimePicker.
   */
  error: PropTypes.string,
  /**
   * To specify the time format.
   */
  format: PropTypes.string,
  /**
   * To specify the time interval.
   */
  interval: PropTypes.object,
  /**
   * For `TimeInput`,(time, timeString) => {} <br />
   * For `TimeRange`, (time, [startTime, endTime]) => {}
   */
  onChange: PropTypes.func,
  /**
   * To specify the type of the TimePicker.
   */
  type: PropTypes.oneOf(["time", "range"]),
  /**
   * To set TimePicker as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the values to be displayed inside the TimePicker.
   */
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify custom classnames to be applied to the TimePicker dropdown.
   */
  dropdownClassName: PropTypes.string,
  /**
   * To specify the default values to be displayed inside the TimePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default TimePicker;
