import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import SelectInput, { components } from "react-select";
import AsyncCreatable from "react-select/async-creatable";
import Creatable from "react-select/creatable";
import Label from "./Label";
import { hyphenize } from "../common";
import { useId } from "@reach/auto-id";
import { Down, Close } from "@bigbinary/neeto-icons";

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
  ...otherProps
}) => {
  const inputId = useId(id);

  let Parent = SelectInput;

  if (isCreateable) {
    Parent = Creatable;
  }

  if (otherProps.loadOptions) {
    Parent = AsyncCreatable;
  }

  const portalProps = strategy === STRATEGIES.fixed && {
    menuPortalTarget: document.body,
    styles: { menuPortal: (base) => ({ ...base, zIndex: 999999 }) },
    menuPosition: "fixed",
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <Down size={16} />
      </components.DropdownIndicator>
    );
  };

  const ClearIndicator = props => {
    return (
      <components.ClearIndicator {...props}>
        <Close size={16} />
      </components.ClearIndicator>
    );
  };

  const MultiValueRemove = props => {
    return (
      <components.MultiValueRemove {...props}>
        <Close size={16} />
      </components.MultiValueRemove>
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
        components={{ Input: CustomInput, DropdownIndicator, ClearIndicator, MultiValueRemove }}
        data-cy={`${hyphenize(label)}-select-container`}
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
   * To specify whether the select input is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * To specify whether the select input is clearable.
   */
  isClearable: PropTypes.bool,
  /**
   * To specify whether the select input is searchable.
   */
  isSearchable: PropTypes.bool,
  /**
   * To specify the name for the select input.
   */
  name: PropTypes.string,
  /**
   * To provide the options for the select input.
   */
  options: PropTypes.array,
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
