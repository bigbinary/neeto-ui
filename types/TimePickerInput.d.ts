import React from "react";
import { Dayjs } from "dayjs";

export type TimePickerInputProps = {
  label?: string;
  value?: string | Dayjs;
  defaultValue?: string | Dayjs;
  onChange?: (date: Dayjs, value: string) => void;
  labelProps?: object;
  className?: string;
  error?: string;
  required?: boolean;
  onBlur?: (date: Dayjs, value: string) => void;
  clearIcon?: string | Function | React.ReactNode;
  disabled?: boolean;
  type?: "range" | "date";
};

export const TimePickerInput: React.FC<TimePickerInputProps>;
