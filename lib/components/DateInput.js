import React from "react";
import classnames from "classnames";
import Label from "./Label";
import { DateInput as Input } from "@blueprintjs/datetime";
import { Position } from "@blueprintjs/core";
import * as dayjs from "dayjs";

const DATE_FORMAT = "MM-DD-YYYY";

const DateInput = React.forwardRef(
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
      <div className={classnames(["nui-date-picker", className])}>
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
          formatDate={(date) => dayjs(date).format(DATE_FORMAT)}
          parseDate={(inputStr) =>
            inputStr
              ? dayjs(inputStr, DATE_FORMAT, true).isValid()
                ? dayjs(inputStr, DATE_FORMAT, true)
                : false
              : null
          }
          canClearSelection={true}
          popoverProps={{
            position: Position.TOP_LEFT,
            minimal: true,
            ...popoverProps,
          }}
          fill={true}
          {...otherProps}
        />
      </div>
    );
  }
);

export default DateInput;
