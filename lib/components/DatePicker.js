import React from "react";
import { DatePicker as AntDatePicker } from "antd";
import PropTypes from "prop-types";

const DatePicker = ({
  onChange,
  format = "DD/MM/YYYY",
  type = "date",
  picker = "date",
  showTime = false,
  ...otherProps
}) => {
  const { RangePicker } = AntDatePicker;

  const datePickerTypes = {
    range: RangePicker,
    date: AntDatePicker,
  };

  const Component = datePickerTypes[type.toLowerCase()];

  return (
    <Component
      onChange={onChange}
      picker={picker}
      format={format}
      className="neeto-ui-date-input"
      dropdownClassName="neeto-ui-date-input-dropdown"
      showTime={showTime && { format: "HH:mm" }}
      {...otherProps}
    />
  );
};

DatePicker.propTypes = {
  onChage: PropTypes.func,
  format: PropTypes.string,
  type: PropTypes.oneOf(["date", "range"]),
  showTime: PropTypes.object,
  picker: PropTypes.oneOf(["date", "week", "month", "quarter", "year"]),
};

export default DatePicker;
