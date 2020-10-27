import React from "react";
import classnames from "classnames";
import Label from "./Label";
import { DateInput as Input } from "@blueprintjs/datetime";
import { Position } from "@blueprintjs/core";
import moment from "moment";

const DATE_FORMAT = "MM-DD-YYYY";

const DateInput = React.forwardRef(
  (
    {
      label,
      labelProps,
      required = false,
      helpText,
      className,
      minDate = moment("1960-01-01", "YYYY-MM-DD").toDate(),
      maxDate = moment("2050-01-01", "YYYY-MM-DD").toDate(),
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
      <div
        className={classnames([
          "flex flex-col items-start justify-start",
          className
        ])}
      >
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
          minDate={minDate}
          maxDate={maxDate}
          formatDate={(date) => moment(date).format(DATE_FORMAT)}
          parseDate={(inputStr) =>
            inputStr
              ? moment(inputStr, DATE_FORMAT, true).isValid()
                ? moment(inputStr, DATE_FORMAT, true)
                : false
              : null
          }
          canClearSelection={true}
          popoverProps={{
            position: Position.TOP_LEFT,
            minimal: true,
            ...popoverProps
          }}
          fill={true}
          {...otherProps}
        />
      </div>
    );
  }
);

export default DateInput;
