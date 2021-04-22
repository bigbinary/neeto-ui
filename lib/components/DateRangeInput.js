import React from "react";
import classnames from "classnames";
import Label from "./Label";
import { DateRangeInput as Input } from "@blueprintjs/datetime";
import { Position } from "@blueprintjs/core";
import * as dayjs from "dayjs";
import { either, isEmpty, isNil } from "ramda";

const DEFAULT_DATE_FORMAT = "MM-DD-YYYY";

const isNotPresent = either(isNil, isEmpty);

const DateRangeInput = React.forwardRef(
  (
    {
      label = "",
      labelProps = "",
      required = false,
      infoText = "",
      helpText = "",
      className = "",
      minDate = dayjs("1960-01-01", "YYYY-MM-DD").toDate(),
      maxDate = dayjs("2050-01-01", "YYYY-MM-DD").toDate(),
      format = DEFAULT_DATE_FORMAT,
      error = "",
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
            infoText={infoText}
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
          formatDate={(date) => dayjs(date).format(format)}
          parseDate={(inputStr) => {
            if (isNotPresent(inputStr)) return null;
            const formattedDate = dayjs(inputStr, format, true);
            return formattedDate.isValid() && formattedDate;
          }}
          canClearSelection={true}
          singleMonthOnly={true}
          popoverProps={{
            position: Position.TOP_LEFT,
            minimal: true,
          }}
          startInputProps={{
            small: true,
          }}
          endInputProps={{
            small: true,
          }}
          {...otherProps}
        />
        {!!error && (
          <p className="nui-input__error">{error}</p>
        )}
        {!!helpText && (
          <p className="nui-input__help-text">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

export default DateRangeInput;
