import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
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

Select.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  /**
   * To specify the text to be displayed above the select component.
   */
  label: PropTypes.string,
  /**
   * To specify whether the select field is required or not.
   */
  required: PropTypes.bool,
  /**
   * To specify the error message to be displayed in the select component.
   */
  error: PropTypes.string,
  /**
   * To specify the help text that appears below the select component.
   */
  helpText: PropTypes.string,
  /**
   * To specify external classnames as overrides to the select component.
   */
  className: PropTypes.string,
  /**
   * To specify whether the select component is a creatable select component.
   */
  isCreateable: PropTypes.bool,
};

export default Select;
