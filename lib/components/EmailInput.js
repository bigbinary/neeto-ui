import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { isEmpty } from "ramda";

import { EMAIL_SEPARATION_REGEX, CUSTOM_STYLES } from "../constants/EmailInput";
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

const CustomControl = ({ children, ...props }) => (
  <components.Control {...props}>
    <div className="neeto-ui-overflow-hidden">{children}</div>
  </components.Control>
);

const noop = () => {};

const CUSTOM_COMPONENTS = {
  DropdownIndicator: null,
  ClearIndicator: null,
  Control: CustomControl,
};

const EmailInput = ({
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
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleFilterEmails = () => onChange(renderValidEmails(value));

  const handleEmailChange = () => {
    const inputValues = inputValue.match(EMAIL_SEPARATION_REGEX);
    const emails = inputValues.map((email) => formatEmailInputOptions(email));
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
        {counter && (
          <Label
            className="neeto-ui-email-input__counter"
            data-cy={`${hyphenize(label)}-email-counter`}
          >
            {`${getEmailsCount(value)} ${
              counter.label
                ? counter.label
                : renderDefaultText(getEmailsCount(value))
            }`}
          </Label>
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
        styles={CUSTOM_STYLES}
        isDisabled={disabled}
        {...otherProps}
      />
      <div className="neeto-ui-email-input__bottom-info">
        {!!error && (
          <Typography
            style="body3"
            className="neeto-ui-text-error"
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

EmailInput.propTypes = {
  /**
   * To specify the text to be displayed above the input field.
   */
  label: PropTypes.string,
  /**
   * To specify the text to be displayed inside the input field.
   */
  placeholder: PropTypes.string,
  /**
   * To specify the helper text message to be displayed below the input field.
   */
  helpText: PropTypes.string,
  /**
   * To specify the value to be displayed inside the input field.
   */
  value: PropTypes.array,
  /**
   * To specify the error message to be shown below the input field.
   */
  error: PropTypes.string,
  /**
   * To specify whether the input field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the message to be shown besides the error message to filter out the invalid emails.
   */
  filterInvalidEmails: PropTypes.shape({ label: PropTypes.string }),
  /**
   * To add an email counter next to the label.
   */
  counter: PropTypes.shape({ label: PropTypes.string }),
  /**
   * To specify the action to be triggered on modifying the input field.
   */
  onChange: PropTypes.func,
  /**
   * To specify the action to be triggered on changing focus from the input field.
   */
  onBlur: PropTypes.func,
};

export default EmailInput;
