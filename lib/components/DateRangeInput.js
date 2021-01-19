import React from "react";
import classnames from "classnames";
import Label from "./Label";
import { DateRangeInput as Input } from "@blueprintjs/datetime";
import { Position } from "@blueprintjs/core";
import * as dayjs from "dayjs";
import { either, isEmpty, isNil } from "ramda";

const DATE_FORMAT = "MM-DD-YYYY";

const isNotPresent = either(isNil, isEmpty);

const DateRangeInput = React.forwardRef(
  (
    {
      label,
      labelProps,
      required = false,
      helpText,
      className,
      minDate = dayjs("1960-01-01", "YYYY-MM-DD").toDate(),
      maxDate = dayjs("2050-01-01", "YYYY-MM-DD").toDate(),
      error,
      size,
      extraClass,
      wrapperExtraClass,
      popoverProps,
      ...otherProps
    },
    ref
  ) => {
    return (
      <div className={classnames(["nui-date-range-picker", className])}>
        {label && (
          <Label
            label={label}
            required={required}
            helpText={helpText}
            className="mb-1"
            {...labelProps}
          >
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          allowSingleDayRange={true}
          minDate={minDate}
          maxDate={maxDate}
          formatDate={(date) => dayjs(date).format(DATE_FORMAT)}
          parseDate={(inputStr) => {
            if (isNotPresent(inputStr)) return null;
            const formattedDate = dayjs(inputStr, DATE_FORMAT, true);
            return formattedDate.isValid() && formattedDate;
          }}
          canClearSelection={true}
          singleMonthOnly={true}
          popoverProps={{
            position: Position.TOP_LEFT,
            minimal: true,
            ...popoverProps,
          }}
          startInputProps={{
            small: true,
          }}
          endInputProps={{
            small: true,
          }}
          {...otherProps}
        />
      </div>
    );
  }
);

export default DateRangeInput;
