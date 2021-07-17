import React from "react";
import dayjs from "dayjs";
import { DateRangePicker as BPDateRangePicker } from "@blueprintjs/datetime";

const DateRangePicker = React.forwardRef(
  (
    {
      minDate = dayjs("1960-01-01", "YYYY-MM-DD").toDate(),
      maxDate = dayjs("2050-01-01", "YYYY-MM-DD").toDate(),
      ...otherProps
    },
    ref
  ) => {
    return (
      <>
        <BPDateRangePicker
          ref={ref}
          minDate={minDate}
          maxDate={maxDate}
          {...otherProps}
        />
      </>
    );
  }
);

export default DateRangePicker;
