import React from "react";

import { Close } from "neetoicons";
import { assoc } from "ramda";
import { components } from "react-select";

import Tag from "components/Tag";

const MAX_EMAILS_DISPLAY = 3;

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
  const { prefix } = props.selectProps;

  return (
    <components.Control {...props}>
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
  <components.MultiValueRemove {...props}>
    <Close size={16} />
  </components.MultiValueRemove>
);

const CustomValueContainer = ({ children, ...props }) => {
  const {
    getValue,
    selectProps: { isFocused },
  } = props;
  const value = getValue();
  const newChildren = [...children];

  if (!isFocused && value.length > MAX_EMAILS_DISPLAY) {
    newChildren[0] = children[0].map((ele, i) => {
      if (i < 3) return ele;

      return null;
    });

    newChildren[0].push(
      <Tag
        label={`${value.length - MAX_EMAILS_DISPLAY} more`}
        style="secondary"
      />
    );
  }

  return (
    <components.ValueContainer {...props}>
      {newChildren}
    </components.ValueContainer>
  );
};

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
  ClearIndicator: null,
  Control: CustomControl,
  MultiValueRemove,
  ValueContainer: CustomValueContainer,
};
