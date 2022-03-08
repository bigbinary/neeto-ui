import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import SelectInput, { components } from "react-select";
import AsyncCreatable from "react-select/async-creatable";
import Label from "./Label";
import { hyphenize } from "../common";

const SIZES = {
  small: "small",
  large: "large",
};

const STRATEGIES = {
  default: "default",
  fixed: "fixed",
};

const CustomInput = (props) => {
  const { selectProps } = props;
  return (
    <components.Input
      {...props}
      data-testid={selectProps && selectProps["data-testid"]}
      data-cy={selectProps && selectProps["data-cy"]}
    ></components.Input>
  );
};

const Select = ({
  size = SIZES.large,
  label = "",
  required = false,
  error = null,
  helpText = "",
  className = "",
  innerRef,
  isCreateable,
  strategy = STRATEGIES.default,
  ...otherProps
}) => {
  let Parent = SelectInput;

  if (isCreateable) {
    Parent = AsyncCreatable;
  }

  const portalProps = strategy === STRATEGIES.fixed && {
    menuPortalTarget: document.body,
    styles: { menuPortal: (base) => ({ ...base, zIndex: 999999 }) },
    menuPosition: "fixed",
  };

  return (
    <div
      className={classnames(["neeto-ui-input__wrapper", className])}
      data-cy={`${hyphenize(label)}-select-container-wrapper`}
    >
      {label && (
        <Label required={required} data-cy={`${hyphenize(label)}-input-label`}>
          {label}
        </Label>
      )}
      <Parent
        ref={innerRef}
        className={classnames(["neeto-ui-react-select__container"], {
          "neeto-ui-react-select__container--error": !!error,
          "neeto-ui-react-select__container--small": size === SIZES.small,
        })}
        classNamePrefix="neeto-ui-react-select"
        components={{ Input: CustomInput }}
        data-cy={`${hyphenize(label)}-select-container`}
        {...portalProps}
        {...otherProps}
      />
      {!!error && (
        <p
          className="neeto-ui-input__error"
          data-cy={`${hyphenize(label)}-select-error`}
        >
          {error}
        </p>
      )}
      {helpText && (
        <p
          className="neeto-ui-input__help-text"
          data-cy={`${hyphenize(label)}-select-help-text`}
        >
          {helpText}
        </p>
      )}
    </div>
  );
};

Select.propTypes = {
  /**
   * To specify the size of the select component.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify positioning strategy for Select component.
   */
  strategy: PropTypes.oneOf(Object.values(STRATEGIES)),
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
  /**
   * To specify the ref to the select component.
   */
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default Select;
