import React from "react";
import { LabelProps } from "./Label";

export type TimePickerProps = {
  className?: string;
  label?: string;
  format?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  interval?: {
    hourStep: number;
    minuteStep: number;
    secondStep: number;
  };
  onChange?: (value: string) => void;
  type?: "time" | "range";
  nakedInput?: boolean;
  disabled?: boolean;
  error?: string;
  defaultValue?: any;
  value?: any;
  id?: string;
  labelProps?: LabelProps;
  timezone?: string;
  required: boolean;
  [key: string]: any;
};

const TimePicker: React.FC<TimePickerProps>;
export default TimePicker;
