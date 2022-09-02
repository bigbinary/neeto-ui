import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";
import { Left, Right, Calendar } from "@bigbinary/neeto-icons";

import Label from "./Label";
import Button from "./Button";
import { hyphenize } from "../common";
import { convertToDayjsObjects, useSyncedRef } from "../utils";

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };

const AntDatePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntDatePicker;

const datePickerTypes = {
  range: RangePicker,
  date: AntDatePicker,
};
const noop = () => {};

const DatePicker = forwardRef(
  (
    {
      className = "",
      label = "",
      size = INPUT_SIZES.medium,
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
      ...otherProps
    },
    ref
  ) => {
    const id = useId(otherProps.id);
    const datePickerRef = useSyncedRef(ref);

    const Component = datePickerTypes[type?.toLowerCase()];
    const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

    const errorId = `error_${id}`;

    return (
      <div className="neeto-ui-input__wrapper">
        {label && <Label>{label}</Label>}
        <Component
          ref={datePickerRef}
          onChange={onChange}
          onOk={onOk}
          format={format}
          picker={picker}
          className={classnames("neeto-ui-date-input", [className], {
            "neeto-ui-date-input--small": size === "small",
            "neeto-ui-date-input--medium": size === "medium",
            "neeto-ui-date-input--large": size === "large",
            "neeto-ui-date-input--disabled": otherProps.disabled,
            "neeto-ui-date-input--naked": nakedInput,
            "neeto-ui-date-input--error": !!error,
          })}
          dropdownClassName={classnames("neeto-ui-date-input-dropdown", [
            dropdownClassName,
          ])}
          showTime={showTime && { format: timeFormat }}
          defaultValue={convertToDayjsObjects(defaultValue)}
          value={convertToDayjsObjects(value)}
          {...otherProps}
          prevIcon={<Button style="text" icon={Left} />}
          nextIcon={<Button style="text" icon={Right} />}
          superPrevIcon={<Button style="text" icon={Left} />}
          superNextIcon={<Button style="text" icon={Right} />}
          suffixIcon={<Calendar size={16} />}
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
  size: PropTypes.oneOf(Object.values(INPUT_SIZES)),
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
};

export default DatePicker;
