import React from "react";
import classnames from "classnames";
import Label from "./Label";
import { DateInput as Input } from "@blueprintjs/datetime";
import { Position } from "@blueprintjs/core";
import dayjs from "dayjs";

const DEFAULT_DATE_FORMAT = "MM-DD-YYYY";

const DateInput = React.forwardRef(
  (
    {
      label = "",
      labelProps = "",
      error = null,
      helpText = "",
      infoText = "",
      className = "",
      required = false,
      minDate = dayjs("1960-01-01", "YYYY-MM-DD").toDate(),
      maxDate = dayjs("2050-01-01", "YYYY-MM-DD").toDate(),
      format = DEFAULT_DATE_FORMAT,
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
            infoText={infoText}
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
          formatDate={(date) => dayjs(date).format(format)}
          parseDate={(inputStr) =>
            inputStr
              ? dayjs(inputStr, format, true).isValid()
                ? dayjs(inputStr, format, true)
                : false
              : null
          }
          canClearSelection={true}
          popoverProps={{
            position: Position.TOP_LEFT,
            minimal: true,
          }}
          fill={true}
          {...otherProps}
        />
        {!!error && <p className="nui-input__error">{error}</p>}
        {!!helpText && <p className="nui-input__help-text">{helpText}</p>}
      </div>
    );
  }
);

export default DateInput;
