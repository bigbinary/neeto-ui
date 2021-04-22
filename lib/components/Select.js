import React, { Component } from "react";
import classnames from "classnames";
import SelectInput, { components } from "react-select";
import AsyncCreatable from 'react-select/async-creatable';
import Label from "./Label";

class Select extends Component {
  render() {
    const {
      value,
      label = "",
      labelProps = null,
      required = false,
      placeholder = "",
      error = null,
      infoText = "",
      helpText = "",
      className = "",
      isCreateable,
      ...otherProps
    } = this.props;

    let Parent = SelectInput;
    if (isCreateable) {
      Parent = AsyncCreatable;
    }

    // Refer: https://github.com/bigbinary/neeto-ui/issues/123
    const CustomInput = (props) => (
      <components.Input
        {...props}
        data-test-id={otherProps && otherProps["data-test-id"]}
        data-cy={otherProps && otherProps["data-cy"]}
      ></components.Input>
    );

    return (
      <div
        className={classnames([
          "nui-input__wrapper",
          className,
        ])}
      >
        {label && (
          <Label required={required} className="mb-1" {...labelProps}>
            {label}
          </Label>
        )}
        <Parent
          value={value}
          placeholder={placeholder}
          className={classnames(["nui-react-select-container"], {
            "nui-react-select-container--error": !!error,
          })}
          classNamePrefix="nui-react-select"
          components={{ Input: CustomInput }}
          {...otherProps}
        />
        {!!error && (
          <p className="nui-input__error">{error}</p>
        )}
        {helpText && (
          <p className="nui-input__help-text">
            {helpText}
          </p>
        )}
      </div>
    );
  }
}

export default Select;
