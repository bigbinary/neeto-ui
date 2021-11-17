import React from "react";
import * as dayjs from "dayjs";
import classnames from "classnames";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";
import localeData from "dayjs/plugin/localeData";
import PropTypes from "prop-types";
import weekday from "dayjs/plugin/weekday";
import Label from "./Label";
import { hyphenize } from "../common";
import { useId } from "@reach/auto-id";

dayjs.extend(weekday);
dayjs.extend(localeData);

const INPUT_SIZES = ["small", "large"];

const noop = () => {};
const AntDatePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntDatePicker;
const datePickerTypes = {
  range: RangePicker,
  date: AntDatePicker,
};

const DatePicker = ({
  className,
  label,
  size = "small",
  dropdownClassName,
  dateFormat = "DD/MM/YYYY",
  timeFormat = "HH:mm:ss",
  onChange = noop,
  onOk = noop,
  picker = "date",
  showTime = false,
  type = "date",
  nakedInput = false,
  error = null,
  ...otherProps
}) => {
  const Component = datePickerTypes[type?.toLowerCase()];
  const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

  const id = useId(otherProps.id);
  const errorId = `error_${id}`;

  return (
    <div className="neeto-ui-input__wrapper">
      {label && <Label>{label}</Label>}
      <Component
        onChange={onChange}
        onOk={onOk}
        format={format}
        picker={picker}
        className={classnames("neeto-ui-date-input", [className], {
          "neeto-ui-date-input--small": size === "small",
          "neeto-ui-date-input--disabled": otherProps.disabled,
          "neeto-ui-date-input--naked": nakedInput,
          "neeto-ui-date-input--error": !!error,
        })}
        dropdownClassName={classnames("neeto-ui-date-input-dropdown", [
          dropdownClassName,
        ])}
        showTime={showTime && { format: timeFormat }}
        {...otherProps}
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
};

DatePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(INPUT_SIZES),
  nakedInput: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  dropdownClassName: PropTypes.string,
  dateFormat: PropTypes.string,
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
  onOpenChange: PropTypes.func,
  picker: PropTypes.oneOf(["date", "week", "month", "quarter", "year"]),
  placeholder: PropTypes.string,
  /**
   * Show time picker
   */
  showTime: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(datePickerTypes)),
};

export default DatePicker;
