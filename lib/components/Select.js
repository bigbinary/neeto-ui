import React, { Component } from "react";
import classnames from "classnames";
import SelectInput, { components } from "react-select";
import AsyncCreatable from "react-select/async-creatable";
import Label from "./Label";
import { hyphenize } from "../common";

const sizes = {
  small: "small",
  large: "large",
};

class Select extends Component {
  render() {
    const {
      size = sizes.large,
      label = "",
      required = false,
      error = null,
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
        className={classnames(["nui-input__wrapper", className])}
        data-cy={`${hyphenize(label)}-select-container-wrapper`}
      >
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-input-label`}
          >
            {label}
          </Label>
        )}
        <Parent
          className={classnames(["nui-react-select__container"], {
            "nui-react-select__container--error": !!error,
            "nui-react-select__container--small": size === sizes.small,
          })}
          classNamePrefix="v2-nui-react-select"
          components={{ Input: CustomInput }}
          data-cy={`${hyphenize(label)}-select-container`}
          {...otherProps}
        />
        {!!error && (
          <p
            className="nui-input__error"
            data-cy={`${hyphenize(label)}-select-error`}
          >
            {error}
          </p>
        )}
        {helpText && (
          <p
            className="nui-input__help-text"
            data-cy={`${hyphenize(label)}-select-help-text`}
          >
            {helpText}
          </p>
        )}
      </div>
    );
  }
}

export default Select;
