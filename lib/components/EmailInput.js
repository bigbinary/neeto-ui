import React, { useState } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import { isEmpty } from "ramda";

import {
  EMAIL_SEPARATION_REGEX,
  CUSTOM_STYLES,
  formatEmailInputOptions,
  pruneDuplicates,
} from "../constants/EmailInput";
import { hyphenize } from "../common";
import Typography from "./Typography";
import Label from "./Label";

const CustomControl = ({ children, ...props }) => (
  <components.Control {...props}>
    <div className="overflow-hidden">{children}</div>
  </components.Control>
);

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
  onChange,
  error = "",
  onBlur,
  filterInvalidEmails = "",
  disabled = false,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState("");

  const validEmails = () => value.filter(email => email.valid && email);

  const handleFilterEmails = () => onChange(validEmails());

  const handleEmailChange = () => {
    const inputValues = inputValue.match(EMAIL_SEPARATION_REGEX);
    const emails = inputValues.map(email => formatEmailInputOptions(email));
    onChange(pruneDuplicates([...value, ...emails]));
    setInputValue("");
  };

  const handleKeyDown = event => {
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

  const handleBlur = event =>
    inputValue ? handleEmailChange() : onBlur(event);

  return (
    <div className="flex flex-col">
      {label && (
        <Label className="mb-1" data-cy={`${hyphenize(label)}-input-label`}>
          {label}
        </Label>
      )}
      <CreatableSelect
        isMulti
        menuIsOpen={false}
        inputValue={inputValue}
        components={CUSTOM_COMPONENTS}
        data-cy={`${hyphenize(label)}-email-input`}
        classNamePrefix="neeto-ui-react-select"
        className={classnames(
          "neeto-ui-react-select__container",
          !!error && "neeto-ui-react-select__container--error"
        )}
        onChange={onChange}
        onInputChange={inputValue => setInputValue(inputValue)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        value={value}
        styles={CUSTOM_STYLES}
        isDisabled={disabled}
        {...otherProps}
      />
      <div>
        {!!error && (
          <Typography style="body3" className="neeto-ui-text-error mt-1">
            {error}
            {!!filterInvalidEmails && !isEmpty(value) && (
              <Typography
                className="cursor-pointer"
                style="body3"
                weight="bold"
                onClick={handleFilterEmails}
              >
                {filterInvalidEmails}
              </Typography>
            )}
          </Typography>
        )}

        {!!helpText && <Typography style="body3">{helpText}</Typography>}
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
   * The helper text message to be displayed below the input field.
   */
  helpText: PropTypes.string,
  /**
   * The values to be displayed inside the input field.
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
  filterInvalidEmails: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default EmailInput;
