import React, { useEffect, useRef } from "react";

import { useId } from "@reach/auto-id";
import classnames from "classnames";
import { Down, Close } from "neetoicons";
import PropTypes from "prop-types";
import { prop, assoc } from "ramda";
import SelectInput, { components } from "react-select";
import Async from "react-select/async";
import AsyncCreatable from "react-select/async-creatable";
import Creatable from "react-select/creatable";

import { hyphenize } from "utils";

import Label from "./Label";
import Spinner from "./Spinner";

const SIZES = { small: "small", medium: "medium", large: "large" };

const STRATEGIES = { default: "default", fixed: "fixed" };

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <Down size={16} />
  </components.DropdownIndicator>
);

const ClearIndicator = props => (
  <components.ClearIndicator {...props}>
    <Close size={16} />
  </components.ClearIndicator>
);

const MultiValueRemove = props => (
  <components.MultiValueRemove {...props}>
    <Close size={16} />
  </components.MultiValueRemove>
);

const CustomInput = props => {
  const { selectProps } = props;

  return (
    <components.Input
      {...props}
      data-cy={selectProps ? selectProps["data-cy"] : "select-input"}
      data-testid={selectProps && selectProps["data-testid"]}
      maxLength={selectProps && selectProps.maxLength}
    />
  );
};

const CustomOption = props => (
  <components.Option
    {...props}
    innerProps={{
      ...props.innerProps,
      "data-cy": `${hyphenize(props.label)}-select-option`,
    }}
  />
);

const Placeholder = props => {
  const { selectProps } = props;

  return (
    <components.Placeholder
      {...props}
      innerProps={{
        ...props.innerProps,
        "data-cy": selectProps
          ? `${hyphenize(selectProps.label)}-select-placeholder`
          : "select-placeholder",
      }}
    />
  );
};

const Menu = props => {
  const { selectProps } = props;

  return (
    <components.Menu
      {...props}
      innerProps={{
        ...props.innerProps,
        "data-cy": selectProps
          ? `${hyphenize(selectProps.label)}-select-menu`
          : "select-menu",
      }}
    />
  );
};

const ValueContainer = props => {
  const { selectProps } = props;

  return (
    <components.ValueContainer
      {...props}
      innerProps={{
        ...props.innerProps,
        name: selectProps.name,
        "data-cy": selectProps
          ? `${hyphenize(selectProps.label)}-select-value-container`
          : "select-value-container",
      }}
    />
  );
};

const MenuList = props => {
  const { fetchMore, totalOptionsCount, isAsyncLoadOptionEnabled } =
    props.selectProps;

  const hasMore =
    isAsyncLoadOptionEnabled && totalOptionsCount > props.children.length;

  const loaderRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries[0].isIntersecting && fetchMore(),
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore]);

  return (
    <components.MenuList
      {...props}
      innerProps={{ ...props.innerProps, ["data-testid"]: "menu-list" }}
    >
      {props.children}
      {hasMore && (
        <div
          className="flex w-full items-center justify-center py-3"
          data-testid="loader"
          ref={loaderRef}
        >
          <Spinner />
        </div>
      )}
    </components.MenuList>
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
  components: componentOverrides,
  optionRemapping = {},
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

  if (optionRemapping.value) {
    otherProps.getOptionValue = prop(optionRemapping.value);
  }

  if (optionRemapping.label) {
    otherProps.getOptionLabel = prop(optionRemapping.label);
  }

  const portalProps = strategy === STRATEGIES.fixed && {
    menuPortalTarget: document.body,
    styles: { menuPortal: assoc("zIndex", 999999) },
    menuPosition: "fixed",
  };

  const { options, defaultOptions, getOptionValue } = otherProps;

  const getRealOptionValue = option => {
    if (typeof getOptionValue !== "function") {
      return option.value;
    }

    return getOptionValue(option);
  };

  const findInOptions = value => {
    if (!value || otherProps.isMulti) {
      return value;
    }
    const currentOptions = options || defaultOptions;
    if (Array.isArray(value)) value = value[0];

    return currentOptions?.filter(
      opt => getRealOptionValue(opt) === getRealOptionValue(value)
    );
  };

  return (
    <div
      className={classnames(["neeto-ui-input__wrapper", className])}
      data-cy={`${hyphenize(label)}-select-container-wrapper`}
      data-testid="select"
    >
      {label && (
        <Label
          data-cy={`${hyphenize(label)}-input-label`}
          data-testid="select-label"
          htmlFor={inputId}
          required={required}
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <Parent
        blurInputOnSelect={false}
        classNamePrefix="neeto-ui-react-select"
        data-cy={`${hyphenize(label)}-select-container`}
        defaultValue={findInOptions(defaultValue)}
        inputId={inputId}
        label={label}
        ref={innerRef}
        value={findInOptions(value)}
        className={classnames(["neeto-ui-react-select__container"], {
          "neeto-ui-react-select__container--error": !!error,
          "neeto-ui-react-select__container--small": size === SIZES.small,
          "neeto-ui-react-select__container--medium": size === SIZES.medium,
          "neeto-ui-react-select__container--large": size === SIZES.large,
        })}
        components={{
          Input: CustomInput,
          Option: CustomOption,
          DropdownIndicator,
          ClearIndicator,
          MultiValueRemove,
          Placeholder,
          Menu,
          ValueContainer,
          MenuList,
          ...componentOverrides,
        }}
        {...portalProps}
        {...otherProps}
      />
      {!!error && (
        <p
          className="neeto-ui-input__error"
          data-cy={`${hyphenize(label)}-select-error`}
          data-testid="select-error"
        >
          {error}
        </p>
      )}
      {helpText && (
        <p
          className="neeto-ui-input__help-text"
          data-cy={`${hyphenize(label)}-select-help-text`}
          data-testid="select-help-text"
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
   * The `options` prop expects an array of objects of the format `{ label: "", value: "" }`.
   *
   * If your array has different keys, you can specify them using this prop.
   *
   * Eg: `{ label: "name", value: "id" }` if `options` is an array of  `{ name: "", id: "" }` objects.
   */
  optionRemapping: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
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
  /**
   * Callback to load more options
   */
  fetchMore: PropTypes.func,
  /**
   *  To specify if the total number of option available when lazy option load is enabled.
   */
  totalOptionsCount: PropTypes.number,
  /**
   * To specify if async options loading is enabled
   */
  isAsyncLoadOptionEnabled: PropTypes.bool,
};

export default Select;
