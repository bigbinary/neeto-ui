import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";

import Label from "./Label";
import { hyphenize } from "../common";
import { convertToDayjsObjects, useSyncedRef } from "../utils";

const INPUT_SIZES = ["small", "large"];

const AntDatePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntDatePicker;

const datePickerTypes = {
  range: RangePicker,
  date: AntDatePicker,
};
const noop = () => { };

const DatePicker = forwardRef(
  (
    {
      className = "",
      label = "",
      size = "small",
      dropdownClassName = "",
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
      customTarget,
      ...otherProps
    },
    ref
  ) => {
    const id = useId(otherProps.id);
    const datePickerRef = useSyncedRef(ref);
    const [currentValue, setCurrentValue] = useState(defaultValue);
    const [inputHide, setInputHide] = useState(false);
    const Component = datePickerTypes[type?.toLowerCase()];
    const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

    const errorId = `error_${id}`;

    return (
      <div className="neeto-ui-input__wrapper">
        {label && <Label>{label}</Label>}
        {customTarget ? (
          <div className="relative">
            <div>

              {typeof customTarget === "function" ? customTarget(currentValue) : customTarget}
            </div>
            <div className={
              classnames("neeto-ui-custom-target-date-input",
                { "neeto-ui-custom-target-date-input--hidden": inputHide })} >
              <Component
                ref={datePickerRef}
                onChange={(dateObj) => {
                  setCurrentValue(dateObj);
                  onChange();
                }
                }
                onOk={onOk}
                format={format}
                picker={picker}
                className="h-full w-full"
                dropdownClassName={classnames("neeto-ui-date-input-dropdown", [
                  dropdownClassName,
                ])}
                showTime={showTime && { format: timeFormat }}
                defaultValue={convertToDayjsObjects(defaultValue)}
                value={convertToDayjsObjects(value)}
                onOpenChange={() => {
                  setTimeout(() => {
                    setInputHide(!inputHide);
                  }, 100);
                }}
                allowClear={false}
                onCalendarChange={(dateObj) => {
                  setCurrentValue(dateObj);
                }}
                {...otherProps}
              />
            </div>
          </div>
        ) : <Component
          ref={datePickerRef}
          onChange={onChange}
          onOk={onOk}
          format={format}
          picker={picker}
          className={
            classnames("neeto-ui-date-input", [className], {
              "neeto-ui-date-input--small": size === "small",
              "neeto-ui-date-input--disabled": otherProps.disabled,
              "neeto-ui-date-input--naked": nakedInput,
              "neeto-ui-date-input--error": !!error,
            })
          }
          dropdownClassName={classnames("neeto-ui-date-input-dropdown", [
            dropdownClassName,
          ])}
          showTime={showTime && { format: timeFormat }}
          defaultValue={convertToDayjsObjects(defaultValue)}
          value={convertToDayjsObjects(value)}
          {...otherProps}
        />
        }

        {!!error && (
          <p
            data-cy={`${hyphenize(label)}-input-error`}
            className="neeto-ui-input__error"
            id={errorId}
          >
            {error}
          </p>
        )}
      </div >
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
   * To set the size of the DatePicker.
   */
  size: PropTypes.oneOf(INPUT_SIZES),
  /**
   * To set the DatePicker as naked input field.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the error message to be shown in the DatePicker.
   */
  error: PropTypes.string,
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
   * For DateInput,(date, dateString) => {} <br />
   * For DateRange, (date, [startDate, endDate]) => {}
   */
  onChange: PropTypes.func,
  /**
   * Callback function which will be invoked when ok button is clicked in DateInput
   */
  onOk: PropTypes.func,
  /**
   * To specify the type of the Picker.
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
   * To specify the custom target instead of input
   */
  customTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default DatePicker;
