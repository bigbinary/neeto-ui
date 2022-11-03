import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { isEmpty } from "ramda";
import { Close } from "@bigbinary/neeto-icons";

import {
  EMAIL_SEPARATION_REGEX,
  CUSTOM_STYLES,
  UNSTRICT_EMAIL_REGEX,
} from "../constants/EmailInput";
import {
  formatEmailInputOptions,
  pruneDuplicates,
  renderValidEmails,
  renderDefaultText,
  getEmailsCount,
} from "../helpers/EmailInput";
import { hyphenize } from "../common";
import Typography from "./Typography";
import Label from "./Label";

const CustomControl = ({ children, ...props }) => {
  const { prefix } = props.selectProps;

  return (
    <components.Control {...props}>
      {prefix && <div className="neeto-ui-email-input__prefix">{prefix}</div>}
      {children}
    </components.Control>
  );
};

const CustomDropdownIndicator = (props) => {
  const { suffix } = props.selectProps;

  return suffix ? (
    <components.DropdownIndicator {...props}>
      <div className="neeto-ui-email-input__suffix">{suffix}</div>
    </components.DropdownIndicator>
  ) : null;
};

const MultiValueRemove = props => {
  return (
    <components.MultiValueRemove {...props}>
      <Close size={16} />
    </components.MultiValueRemove>
  );
};

const noop = () => {};

const CUSTOM_COMPONENTS = {
  DropdownIndicator: CustomDropdownIndicator,
  ClearIndicator: null,
  Control: CustomControl,
  MultiValueRemove: MultiValueRemove,
};

const MultiEmailInput = ({
  label = "Email(s)",
  placeholder = "",
  helpText = "",
  value = [],
  onChange = noop,
  error = "",
  onBlur = noop,
  filterInvalidEmails,
  counter,
  disabled = false,
  maxHeight = 200,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState("");

  const isCounterVisible =
    !!counter &&
    (!counter.startsFrom || getEmailsCount(value) >= counter.startsFrom);

  const handleFilterEmails = () => onChange(renderValidEmails(value));

  const handleEmailChange = () => {
    const inputValues = inputValue.match(EMAIL_SEPARATION_REGEX);
    const emailMatches =
      inputValue.match(UNSTRICT_EMAIL_REGEX) || inputValues || [];
    const emails = emailMatches.map((email) => formatEmailInputOptions(email));
    onChange(pruneDuplicates([...value, ...emails]));
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (!inputValue) return;

    switch (event.key) {
    case "Enter":
    case "Tab":
    case ",":
    case " ": {
      handleEmailChange();
      event.preventDefault();
    }
    }
  };

  const handleBlur = (event) =>
    inputValue ? handleEmailChange() : onBlur(event);

  return (
    <div className="neeto-ui-flex neeto-ui-flex-col neeto-ui-email-input">
      <div className="neeto-ui-flex neeto-ui-justify-between neeto-ui-email-input__title-row">
        {label && (
          <Label
            className="neeto-ui-email-input__label"
            data-cy={`${hyphenize(label)}-input-label`}
          >
            {label}
          </Label>
        )}
        {isCounterVisible && (
          <Typography
            style="body2"
            className="neeto-ui-email-input__counter"
            data-cy={`${hyphenize(label)}-email-counter`}
          >
            {`${getEmailsCount(value)} ${
              counter.label
                ? counter.label
                : renderDefaultText(getEmailsCount(value))
            }`}
          </Typography>
        )}
      </div>
      <CreatableSelect
        isMulti
        menuIsOpen={false}
        inputValue={inputValue}
        components={CUSTOM_COMPONENTS}
        classNamePrefix="neeto-ui-react-select"
        className={classnames(
          "neeto-ui-react-select__container neeto-ui-email-input__select",
          {
            "neeto-ui-react-select__container--error": !!error,
          }
        )}
        onChange={onChange}
        onInputChange={(inputValue) => setInputValue(inputValue)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        value={value}
        styles={{
          ...CUSTOM_STYLES,
          control: (styles) => ({
            ...styles,
            maxHeight: `${maxHeight}px`,
            overflowY: "auto",
          }),
        }}
        isDisabled={disabled}
        {...otherProps}
      />
      <div className="neeto-ui-email-input__bottom-info">
        {!!error && (
          <Typography
            style="body3"
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(label)}-input-error`}
          >
            {error}
            {!!filterInvalidEmails && !isEmpty(value) && (
              <span
                className="cursor-pointer neeto-ui-typography neeto-ui-text-body3 neeto-ui-font-semibold"
                onClick={handleFilterEmails}
              >
                &nbsp;
                {filterInvalidEmails.label
                  ? filterInvalidEmails.label
                  : "Click here to remove invalid emails."}
              </span>
            )}
          </Typography>
        )}
        {!!helpText && (
          <Typography
            className="neeto-ui-input__help-text"
            style="body3"
            data-cy={`${hyphenize(label)}-input-help`}
          >
            {helpText}
          </Typography>
        )}
      </div>
    </div>
  );
};

MultiEmailInput.propTypes = {
  /**
   * To specify the text to be displayed above the Input field.
   */
  label: PropTypes.string,
  /**
   * To specify the text to be displayed inside the Input field.
   */
  placeholder: PropTypes.string,
  /**
   * To specify the helper text message to be displayed below the Input field.
   */
  helpText: PropTypes.string,
  /**
   * To specify the value to be displayed inside the Input field.
   */
  value: PropTypes.array,
  /**
   * To specify the error message to be shown below the Input field.
   */
  error: PropTypes.string,
  /**
   * To specify whether the Input field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the message to be shown besides the error message to filter out the invalid emails.
   */
  filterInvalidEmails: PropTypes.shape({ label: PropTypes.string }),
  /**
   * To add an email counter next to the label.
   */
  counter: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      label: PropTypes.string,
      startsFrom: PropTypes.number,
    }),
  ]),
  /**
   * To specify the action to be triggered on modifying the Input field.
   */
  onChange: PropTypes.func,
  /**
   * To specify the action to be triggered on changing focus from the Input field.
   */
  onBlur: PropTypes.func,
  /**
   * To specify the maximum height (in pixels) of the container before it becomes scrollable.
   */
  maxHeight: PropTypes.number,
  /**
   * To specify the content to be added at the end of the Input field.
   */
  suffix: PropTypes.node,
  /**
   * To specify the content to be added at the beginning of the Input field.
   */
  prefix: PropTypes.node,
};

export default MultiEmailInput;
