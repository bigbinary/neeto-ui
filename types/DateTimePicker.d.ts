import { Dayjs } from "dayjs";
import { LabelProps } from "./Label";

export type DateTimePickerProps = {
  value?: string | Dayjs;
  defaultValue?: string | Dayjs;
  className?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  dropdownClassName?: string;
  dateFormat?: string;
  onChange?: (dateTime: Dayjs, changeType: "date" | "time") => void;
  nakedInput?: boolean;
  error?: string;
  id?: string;
  labelProps?: LabelProps;
  datePickerProps?: { [key: string]: any };
  timePickerProps?: { [key: string]: any };
  onBlur?: (dateTime: Dayjs) => void;
  [key: string]: any;
  minDateTime?: Dayjs;
  maxDateTime?: Dayjs;
};

const DateTimePicker: React.FC<DateTimePickerProps>;
export default DateTimePicker;
