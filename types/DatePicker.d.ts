import React from "react";
import { LabelProps } from "./Label";

export type DatePickerProps = {
  value: any;
  defaultValue?: any;
  className?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  dropdownClassName?: string;
  dateFormat?: string;
  timeFormat?: string;
  onChange?: (date: any, dateString: string) => void;
  onOk?: () => void;
  picker?: "date" | "week" | "month" | "quarter" | "year";
  showTime?: boolean;
  type?: "range" | "date";
  nakedInput?: boolean;
  error?: string;
  id?: string;
  disabled?: boolean;
  labelProps?: LabelProps;
  allowClear?: boolean;
  [key: string]: any;
};

const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
