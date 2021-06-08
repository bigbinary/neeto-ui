import React from "react";
import * as dayjs from "dayjs";
import { DateRangePicker as BPDateRangePicker } from "@blueprintjs/datetime";

const DateRangePicker = React.forwardRef(
  (
    {
      minDate = dayjs("1960-01-01", "YYYY-MM-DD").toDate(),
      maxDate = dayjs("2050-01-01", "YYYY-MM-DD").toDate(),
      dayPickerProps,
      ...otherProps
    },
    ref
  ) => {
    return (
      <>
        <BPDateRangePicker
          ref={ref}
          allowSingleDayRange={true}
          minDate={minDate}
          maxDate={maxDate}
          dayPickerProps={dayPickerProps}
          {...otherProps}
        />
      </>
    );
  }
);

export default DateRangePicker;
