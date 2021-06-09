import React from "react";
import * as dayjs from "dayjs";
import { DatePicker as BPDatePicker } from "@blueprintjs/datetime";

const DatePicker = React.forwardRef(
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
        <BPDatePicker
          ref={ref}
          minDate={minDate}
          maxDate={maxDate}
          {...otherProps}
        />
      </>
    );
  }
);

export default DatePicker;
