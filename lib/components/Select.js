import React, { Component } from "react";
import classnames from "classnames";
import SelectInput from "react-select";
import Label from "./Label";

class Select extends Component {
  render() {
    const {
      label,
      required,
      type,
      placeholder,
      error,
      value,
      onChange,
      leadingIcon,
      helpText,
      helpTextPosition = "right",
      suffix,
      prefix,
      className,
      ...otherProps
    } = this.props;

    return (
      <div
        className={classnames([
          "flex flex-col items-start justify-start flex-grow",
          className
        ])}
      >
        {label && (
          <Label className="mb-1" required={required}>
            {label}
          </Label>
        )}
        <SelectInput
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          className={classnames(["nh-react-select-container"], {
            "nh-react-select-container--error": !!error
          })}
          classNamePrefix="nh-react-select"
          {...otherProps}
        />
        {!!error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
}

export default Select;
