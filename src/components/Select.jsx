import React, { useEffect, useRef } from "react";

import classnames from "classnames";
import { _existsBy, isPresent } from "neetocist";
import { Down, Close } from "neetoicons";
import PropTypes from "prop-types";
import { prop, assoc, flatten, pluck, mergeDeepRight, isEmpty } from "ramda";
import SelectInput, { components } from "react-select";
import Async from "react-select/async";
import AsyncCreatable from "react-select/async-creatable";
import Creatable from "react-select/creatable";

import { useId } from "hooks";
import { hyphenize } from "utils";

import Label from "./Label";
import Spinner from "./Spinner";
import Tooltip from "./Tooltip";

const SIZES = { small: "small", medium: "medium", large: "large" };

const STRATEGIES = { default: "default", fixed: "fixed" };

const Control = ({ children, ...props }) => {
  const { selectProps, hasValue } = props;

  return (
    <components.Control {...props}>
      {/* hasValue is part of commonProps passed to custom components internally by react-select */}
      {hasValue && selectProps.isMulti && (
        <span className="neeto-ui-btn neeto-ui-btn--style-secondary neeto-ui-react-select__add-btn">
          {selectProps.addButtonLabel || "Add"}
        </span>
      )}{" "}
      {children}
    </components.Control>
  );
};

const DropdownIndicator = props => (
  <components.DropdownIndicator
    {...props}
    innerProps={{ ...props.innerProps, ["data-cy"]: "action-select-indicator" }}
  >
    <Down size={16} />
  </components.DropdownIndicator>
);

const ClearIndicator = props => (
  <components.ClearIndicator
    {...props}
    innerProps={{ ...props.innerProps, "data-cy": "clear-select-indicator" }}
  >
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

const CustomOption = props => {
  const ref = useRef();
  const {
    innerProps,
    data: { dataCy, tooltipContent = "" },
  } = props;

  useEffect(() => {
    props.isSelected && ref.current.scrollIntoView();
  }, [props.isSelected]);

  if (tooltipContent) {
    return (
      <Tooltip content={tooltipContent}>
        <div
          {...{ ref, ...innerProps }}
          data-cy={dataCy || `${hyphenize(props.label)}-select-option`}
        >
          <components.Option {...props} />
        </div>
      </Tooltip>
    );
  }

  return (
    <components.Option
      {...props}
      innerRef={ref}
      innerProps={{
        ...innerProps,
        "data-cy": dataCy || `${hyphenize(props.label)}-select-option`,
      }}
    />
  );
};

const Placeholder = props => {
  const { selectProps } = props;

  return (
    <components.Placeholder
      {...props}
      innerProps={{
        ...props.innerProps,
        "data-cy": selectProps?.hyphenatedDataCyLabel
          ? `${selectProps.hyphenatedDataCyLabel}-select-placeholder`
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
          ? `${selectProps.hyphenatedDataCyLabel}-select-menu`
          : "select-menu",
      }}
    />
  );
};

const SingleValue = props => (
  <components.SingleValue
    {...props}
    innerProps={{ ...props.innerProps, "data-cy": "select-single-value" }}
  />
);

const ValueContainer = props => {
  const { selectProps } = props;

  return (
    <components.ValueContainer
      {...props}
      innerProps={{
        ...props.innerProps,
        name: selectProps.name,
        "data-cy": selectProps
          ? `${selectProps.hyphenatedDataCyLabel}-select-value-container`
          : "select-value-container",
      }}
    />
  );
};

const MenuList = props => {
  const {
    fetchMore,
    totalOptionsCount,
    isAsyncLoadOptionEnabled,
    options,
    portalProps = {},
  } = props.selectProps;

  const hasMore =
    isAsyncLoadOptionEnabled && totalOptionsCount > options.length;

  const loaderRef = useRef();

  useEffect(() => {
    let observer = null;

    if (loaderRef.current && isAsyncLoadOptionEnabled) {
      observer = new IntersectionObserver(
        entries => entries[0].isIntersecting && fetchMore(),
        { root: null, rootMargin: "0px", threshold: 0.1 }
      );
      observer.observe(loaderRef.current);
    }

    return () => {
      if (!(loaderRef.current && isAsyncLoadOptionEnabled)) return;
      observer?.unobserve(loaderRef.current);
    };
  }, [hasMore]);

  return (
    <components.MenuList
      {...props}
      {...portalProps}
      innerProps={{ ...props.innerProps, ["data-testid"]: "menu-list" }}
    >
      {props.children}
      {hasMore && (
        <div
          className="neeto-ui-flex neeto-ui-w-full neeto-ui-items-center neeto-ui-justify-center neeto-ui-py-3"
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
  onMenuClose,
  onMenuOpen,
  onKeyDown,
  styles = {},
  dataCy = "nui",
  ...otherProps
}) => {
  const inputId = useId(id);
  const isMenuOpen = useRef(
    otherProps.isMenuOpen ?? otherProps.defaultMenuIsOpen ?? false
  );

  const hyphenatedDataCyLabel = isEmpty(label)
    ? hyphenize(dataCy)
    : hyphenize(label);

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
    styles: mergeDeepRight({ menuPortal: assoc("zIndex", 999999) }, styles),
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
    const { fetchMore, isMulti } = otherProps;
    if (!value || isMulti || isPresent(fetchMore)) {
      return value;
    }

    let currentOptions = options || defaultOptions;
    if (Array.isArray(value)) value = value[0];

    const isGrouped = _existsBy({ options: Array.isArray }, currentOptions);

    if (isGrouped) {
      currentOptions = flatten(pluck("options", currentOptions));
    }

    return currentOptions?.filter(
      opt => getRealOptionValue(opt) === getRealOptionValue(value)
    );
  };

  const handleMenuOpen = () => {
    isMenuOpen.current = true;
    onMenuOpen?.();
  };

  const handleMenuClose = () => {
    isMenuOpen.current = false;
    onMenuClose?.();
  };

  const handleKeyDown = e => {
    if (!isMenuOpen.current) return;

    e.stopPropagation();
    onKeyDown?.(e);
  };

  return (
    <div
      className={classnames(["neeto-ui-input__wrapper", className])}
      data-cy={`${hyphenatedDataCyLabel}-select-container-wrapper`}
      data-testid="select"
    >
      {label && (
        <Label
          {...{ required }}
          data-cy={`${hyphenatedDataCyLabel}-input-label`}
          data-testid="select-label"
          htmlFor={inputId}
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <Parent
        blurInputOnSelect={false}
        classNamePrefix="neeto-ui-react-select"
        closeMenuOnSelect={!otherProps.isMulti}
        data-cy={`${hyphenatedDataCyLabel}-select-container`}
        defaultValue={findInOptions(defaultValue)}
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
          SingleValue,
          Control,
          ...componentOverrides,
        }}
        onKeyDown={handleKeyDown}
        onMenuClose={handleMenuClose}
        onMenuOpen={handleMenuOpen}
        {...{
          inputId,
          label,
          styles,
          ...portalProps,
          ...otherProps,
          hyphenatedDataCyLabel,
        }}
      />
      {!!error && (
        <p
          className="neeto-ui-input__error"
          data-cy={`${hyphenatedDataCyLabel}-select-error`}
          data-testid="select-error"
        >
          {error}
        </p>
      )}
      {helpText && (
        <p
          className="neeto-ui-input__help-text"
          data-cy={`${hyphenatedDataCyLabel}-select-help-text`}
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
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
  /**
   * To specify the label for the button shown in multi select
   */
  addButtonLabel: PropTypes.string,
  /**
   * To specify the extra props to be passed to the menu list.
   */
  portalProps: PropTypes.object,
  /**
   * Callback function which will be invoked when the menu is opened.
   */
  onMenuOpen: PropTypes.func,
  /**
   * Callback function which will be invoked when the menu is closed.
   */
  onMenuClose: PropTypes.func,
  /**
   * Callback function which will be invoked when a key is pressed.
   */
  onKeyDown: PropTypes.func,
  /**
   * To specify the styles for the Select component.
   */
  styles: PropTypes.object,
  /**
   * To specify the custom data-cy label for the Select component and its child components.
   */
  dataCy: PropTypes.string,
};

export default Select;
