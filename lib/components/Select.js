import React, { Component } from "react";
import classnames from "classnames";
import SelectInput, { components } from "react-select";
import AsyncCreatable from 'react-select/async-creatable';
import Label from "./Label";
import { hyphenize } from "../common";

class Select extends Component {
  render() {
    const {
      label = "",
      labelProps = "",
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

    const dataCyPrefix = label ? hyphenize(label) : "nui";

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
        className={classnames(["nui-input__wrapper", className])}
        data-cy={`${dataCyPrefix}-select-container-wrapper`}
      >
        {label && (
          <Label
            required={required}
            className="mb-1"
            data-cy={`${dataCyPrefix}-select-label`}
            {...labelProps}
          >
            {label}
          </Label>
        )}
        <Parent
          placeholder={placeholder}
          className={classnames(["nui-react-select-container"], {
            "nui-react-select-container--error": !!error,
          })}
          classNamePrefix="nui-react-select"
          components={{ Input: CustomInput }}
          data-cy={`${dataCyPrefix}-select-container`}
          {...otherProps}
        />
        {!!error && <p className="nui-input__error">{error}</p>}
        {helpText && <p className="nui-input__help-text">{helpText}</p>}
      </div>
    );
  }
}

export default Select;
