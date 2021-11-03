import React from "react";
import * as dayjs from "dayjs";
import classnames from "classnames";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";
import localeData from "dayjs/plugin/localeData";
import PropTypes from "prop-types";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);
dayjs.extend(localeData);

const noop = () => {};
const AntDatePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntDatePicker;
const datePickerTypes = {
  range: RangePicker,
  date: AntDatePicker,
};

const DatePicker = ({
  className,
  dropdownClassName,
  dateFormat = "DD/MM/YYYY",
  timeFormat = "HH:mm:ss",
  onChange = noop,
  onOk = noop,
  picker = "date",
  showTime = false,
  type = "date",
  ...otherProps
}) => {
  const Component = datePickerTypes[type?.toLowerCase()];
  const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

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
      showTime={showTime && { format: timeFormat }}
      {...otherProps}
    />
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
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
