import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import SelectInput, { components } from "react-select";
import AsyncCreatable from "react-select/async-creatable";
import Async from "react-select/async";
import Creatable from "react-select/creatable";
import { useId } from "@reach/auto-id";
import { Down, Close } from "@bigbinary/neeto-icons";

import { hyphenize } from "lib/utils";

import Label from "./Label";

const SIZES = {
  small: "small",
  medium: "medium",
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
      maxLength={selectProps && selectProps.maxLength}
    ></components.Input>
  );
};

const Select = ({
  size = SIZES.medium,
  label = "",
  required = false,
  error = "",
  helpText = "",
  className = "",
  innerRef,
  isCreateable = false,
  strategy = STRATEGIES.default,
  id,
  labelProps,
  value,
  defaultValue,
  ...otherProps
}) => {
  const inputId = useId(id);

  let Parent = SelectInput;

  if (isCreateable) {
    Parent = Creatable;
  }

  if (otherProps.loadOptions) {
    Parent = isCreateable ? AsyncCreatable : Async;
  }

  const portalProps = strategy === STRATEGIES.fixed && {
    menuPortalTarget: document.body,
    styles: { menuPortal: (base) => ({ ...base, zIndex: 999999 }) },
    menuPosition: "fixed",
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Down size={16} />
      </components.DropdownIndicator>
    );
  };

  const ClearIndicator = (props) => {
    return (
      <components.ClearIndicator {...props}>
        <Close size={16} />
      </components.ClearIndicator>
    );
  };

  const MultiValueRemove = (props) => {
    return (
      <components.MultiValueRemove {...props}>
        <Close size={16} />
      </components.MultiValueRemove>
    );
  };

  const { options, defaultOptions, getOptionValue } = otherProps;

  const getRealOptionValue = (option) => {
    if (typeof getOptionValue !== "function") {
      return option.value;
    }
    return getOptionValue(option);
  };

  const findInOptions = (value) => {
    if (!value || otherProps.isMulti) {
      return value;
    }
    const currentOptions = options || defaultOptions;
    if (Array.isArray(value)) value = value[0];
    return currentOptions?.filter(
      (opt) => getRealOptionValue(opt) === getRealOptionValue(value)
    );
  };

  return (
    <div
      data-testid="select"
      className={classnames(["neeto-ui-input__wrapper", className])}
      data-cy={`${hyphenize(label)}-select-container-wrapper`}
    >
      {label && (
        <Label
          required={required}
          data-testid="select-label"
          data-cy={`${hyphenize(label)}-input-label`}
          htmlFor={inputId}
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <Parent
        inputId={inputId}
        ref={innerRef}
        className={classnames(["neeto-ui-react-select__container"], {
          "neeto-ui-react-select__container--error": !!error,
          "neeto-ui-react-select__container--small": size === SIZES.small,
          "neeto-ui-react-select__container--medium": size === SIZES.medium,
          "neeto-ui-react-select__container--large": size === SIZES.large,
        })}
        classNamePrefix="neeto-ui-react-select"
        components={{
          Input: CustomInput,
          DropdownIndicator,
          ClearIndicator,
          MultiValueRemove,
        }}
        data-cy={`${hyphenize(label)}-select-container`}
        defaultValue={findInOptions(defaultValue)}
        value={findInOptions(value)}
        {...portalProps}
        {...otherProps}
      />
      {!!error && (
        <p
          className="neeto-ui-input__error"
          data-testid="select-error"
          data-cy={`${hyphenize(label)}-select-error`}
        >
          {error}
        </p>
      )}
      {helpText && (
        <p
          className="neeto-ui-input__help-text"
          data-testid="select-help-text"
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
   * To specify the default selected option.
   */
  defaultValue: PropTypes.object,
  /**
   * To specify the placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * To specify whether the Select input is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * To specify whether the Select input is clearable.
   */
  isClearable: PropTypes.bool,
  /**
   * To specify whether the Select input is searchable.
   */
  isSearchable: PropTypes.bool,
  /**
   * To specify the name for the Select input.
   */
  name: PropTypes.string,
  /**
   * To provide the options for the Select input.
   */
  options: PropTypes.array,
  /**
   * To specify the size of the Select component.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify positioning strategy for Select component.
   */
  strategy: PropTypes.oneOf(Object.values(STRATEGIES)),
  /**
   * To specify the text to be displayed above the Select component.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To specify whether the Select field is required or not.
   */
  required: PropTypes.bool,
  /**
   * To specify the error message to be displayed in the Select component.
   */
  error: PropTypes.string,
  /**
   * To specify the help text that appears below the Select component.
   */
  helpText: PropTypes.string,
  /**
   * To specify external classnames as overrides to the Select component.
   */
  className: PropTypes.string,
  /**
   * To specify whether the Select component is a creatable Select component.
   */
  isCreateable: PropTypes.bool,
  /**
   * To specify the ref to the Select component.
   */
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default Select;
