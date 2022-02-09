import React, { useState } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import CreatableSelect from "react-select/creatable";

import {
  EMAIL_SEPARATION_REGEX,
  CUSTOM_STYLES,
  CUSTOM_COMPONENTS,
  formatEmailInputOptions,
} from "../constants/EmailInput";
import { hyphenize } from "../common";
import Typography from "./Typography";
import Label from "./Label";

const EmailInput = ({
  label = "",
  placeholder = "",
  value = [],
  onChange,
  error,
  onBlur,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleEmailChange = () => {
    const inputValues = inputValue.match(EMAIL_SEPARATION_REGEX);
    const emails = inputValues.map(email => formatEmailInputOptions(email));
    onChange([...value, ...emails]);
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
      />
      <div>
        <Typography style="body3" className="neeto-ui-text-error mt-1">
          {!!error && Array.isArray(error)
            ? "Please make sure all emails are valid."
            : error}
        </Typography>
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
   * The values to be displayed inside the input field.
   */
  value: PropTypes.array,
  /**
   * To specify the error message to be shown in the input field.
   */
  error: PropTypes.string,
  /**
   * To specify whether the input field is disabled or not.
   */
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default EmailInput;
