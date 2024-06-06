import React, { useEffect, useRef } from "react";

import { Close } from "neetoicons";
import { assoc } from "ramda";
import { components } from "react-select";

import Tag from "components/Tag";
import { hyphenize } from "utils";

const STYLES = {
  border: {
    default: "1px solid rgb(var(--neeto-ui-gray-400))",
    error: "1px solid rgb(var(--neeto-ui-error-800)) !important",
  },
  color: {
    default: "rgb(var(--neeto-ui-gray-800))",
    error: "rgb(var(--neeto-ui-error-800)) !important",
  },
};

const CustomControl = ({ children, ...props }) => {
  const { getValue } = props;
  const { isFocused, prefix } = props.selectProps;

  const prevValue = useRef([]);
  const controlRef = useRef(null);

  const value = getValue();

  const scrollToBottom = () => {
    const scrollContainer = controlRef.current;
    if (!scrollContainer) return;

    const { scrollHeight, clientHeight } = scrollContainer;

    scrollContainer.scrollTo({ top: scrollHeight - clientHeight });
  };

  useEffect(() => {
    const isItemAdded = value.length > prevValue.current.length;
    const isItemDeleted = value.length < prevValue.current.length;

    if ((isFocused && !isItemDeleted) || isItemAdded) scrollToBottom();

    prevValue.current = value;
  }, [isFocused, value]);

  return (
    <components.Control
      {...props}
      innerProps={{ ...props.innerProps, ref: controlRef }}
    >
      {prefix && <div className="neeto-ui-email-input__prefix">{prefix}</div>}
      {children}
    </components.Control>
  );
};

const CustomDropdownIndicator = props => {
  const { suffix } = props.selectProps;

  return suffix ? (
    <components.DropdownIndicator {...props}>
      <div className="neeto-ui-email-input__suffix">{suffix}</div>
    </components.DropdownIndicator>
  ) : null;
};

const MultiValueRemove = props => (
  <components.MultiValueRemove
    {...props}
    innerProps={{
      ...props.innerProps,
      ["data-cy"]: `${hyphenize(props.data.label)}-remove-icon`,
    }}
  >
    <Close size={16} />
  </components.MultiValueRemove>
);

const CustomValueContainer = ({ children, ...props }) => {
  const {
    getValue,
    selectProps: { isFocused, visibleEmailsCount, shouldAlwaysExpanded },
  } = props;
  const value = getValue();
  const [firstChild, ...rest] = children;

  const shouldCollapse =
    !shouldAlwaysExpanded && !isFocused && value.length > visibleEmailsCount;

  return (
    <components.ValueContainer
      {...props}
      innerProps={{
        ...props.innerProps,
        ["data-cy"]: "multi-email-input-container",
      }}
    >
      {shouldCollapse ? firstChild.slice(0, visibleEmailsCount) : firstChild}
      {shouldCollapse && (
        <Tag
          label={`${value.length - visibleEmailsCount} more`}
          style="secondary"
        />
      )}
      {rest}
    </components.ValueContainer>
  );
};

const CustomClearIndicator = props => (
  <components.ClearIndicator
    {...props}
    innerProps={{
      ...props.innerProps,
      ["data-cy"]: "clear-all-button",
    }}
  >
    <Close className="cursor-pointer" size={16} />
  </components.ClearIndicator>
);

const SelectContainer = props => (
  <components.SelectContainer
    {...props}
    innerProps={{
      ...props.innerProps,
      ["data-cy"]: "multi-email-select-container",
    }}
  />
);

const Input = props => (
  <components.Input
    {...props}
    data-cy="email-select-input-field"
    onPaste={e => {
      const clipboardData = e.clipboardData.getData("Text");

      setTimeout(() => props.selectProps.handleEmailChange(clipboardData));
    }}
  />
);

export const EMAIL_REGEX = new RegExp(
  "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
  "i"
);

export const UNSTRICT_EMAIL_REGEX =
  /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;

export const EMAIL_SEPARATION_REGEX = /[^\s,]+/g;

export const CUSTOM_STYLES = {
  input: assoc("overflow", "hidden"),
  multiValue: (styles, { data: { valid } }) => ({
    ...styles,
    border: valid ? STYLES.border.default : STYLES.border.error,
    color: valid ? STYLES.color.default : STYLES.color.error,
  }),
};

export const CUSTOM_COMPONENTS = {
  DropdownIndicator: CustomDropdownIndicator,
  Control: CustomControl,
  MultiValueRemove,
  ValueContainer: CustomValueContainer,
  ClearIndicator: CustomClearIndicator,
  SelectContainer,
  Input,
};
