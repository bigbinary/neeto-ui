import React, { Component } from "react";
import classnames from "classnames";
import SelectInput, { components } from "react-select";
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
      infoText = "",
      infoTextPosition = "right",
      helpText = "",
      suffix = "",
      prefix = "",
      className = "",
      ...otherProps
    } = this.props;

    // Refer: https://github.com/bigbinary/neeto-ui/issues/123
    const CustomInput = (props) => (
      <components.Input
        {...props}
        data-test-id={otherProps && otherProps["data-test-id"]}
      ></components.Input>
    );

    return (
      <div
        className={classnames([
          "flex flex-col items-start justify-start flex-grow",
          className,
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
            "nui-react-select-container--error": !!error,
          })}
          classNamePrefix="nui-react-select"
          components={{ Input: CustomInput }}
          {...otherProps}
        />
        {!!error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        {helpText && (
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            {helpText}
          </p>
        )}
      </div>
    );
  }
}

export default Select;
