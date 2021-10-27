import React from "react";
import classnames from "classnames";
import { DatePicker as AntDatePicker } from "antd";
import PropTypes from "prop-types";

const { RangePicker } = AntDatePicker;

const datePickerTypes = {
  range: RangePicker,
  date: AntDatePicker,
};

const noop = () => {};

const DatePicker = ({
  className,
  dropdownClassName,
  format = "DD/MM/YYYY",
  onChange = noop,
  onOk = noop,
  picker = "date",
  showTime = false,
  type = "date",
  ...otherProps
}) => {
  const Component = datePickerTypes[type?.toLowerCase()];

  return (
    <Component
      onChange={onChange}
      onOk={onOk}
      format={format}
      picker={picker}
      className={classnames("neeto-ui-date-input", [className])}
      dropdownClassName={classnames("neeto-ui-date-input-dropdown", [
        dropdownClassName,
      ])}
      showTime={showTime && { format: "HH:mm" }}
      {...otherProps}
    />
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  dropdownClassName: PropTypes.string,
  format: PropTypes.string,
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
  showTime: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(datePickerTypes)),
};

export default DatePicker;
