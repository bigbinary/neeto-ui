import React, { Component } from "react";
import classnames from "classnames";
import SelectInput from "react-select";
import Label from "./Label";

class Select extends Component {
  render() {
    const {
      label = "",
      labelProps = null,
      required = false,
      type,
      placeholder = "",
      error = null,
      value,
      onChange,
      leadingIcon = null,
      helpText = "",
      helpTextPosition = "right",
      suffix = "",
      prefix = "",
      className = "",
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
          <Label required={required} className="mb-1" {...labelProps}>
            {label}
          </Label>
        )}
        <SelectInput
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          className={classnames(["nui-react-select-container"], {
            "nui-react-select-container--error": !!error
          })}
          classNamePrefix="nui-react-select"
          {...otherProps}
        />
        {!!error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
}

export default Select;