import React, { useState } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { components } from "react-select";
import CreatableSelect from "react-select/creatable";

import Label from "./Label";
import Typography from "./Typography";

const CustomControl = ({ children, ...props }) => (
  <components.Control {...props}>
    <div className="overflow-hidden">{children}</div>
  </components.Control>
);

const customComponents = {
  DropdownIndicator: null,
  ClearIndicator: null,
  Control: CustomControl,
};

const isValidEmail = email => {
  const regex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$", "i");
  return regex.test(email);
};

const formatEmailInputOptions = label => ({
  label,
  value: label,
  valid: isValidEmail(label),
});

const customStyles = {
  input: styles => ({
    ...styles,
    overflow: "hidden",
  }),
  multiValue: (styles, { data: { valid } }) => ({
    ...styles,
    border: valid ? "none" : "thin dashed #f56a58 !important",
  }),
};

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
    const emails = inputValue.match(/[^\s,]+/g);
    const values = emails.map(email => formatEmailInputOptions(email));
    onChange([...value, ...values]);
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

  const handleBlur = event => inputValue ?  handleEmailChange() : onBlur(event);

  return (
    <div className="flex flex-col">
      {label && (
        <Label className="mb-1" data-cy="emails-input-label">
          {label}
        </Label>
      )}
      <CreatableSelect
        isMulti
        menuIsOpen={false}
        inputValue={inputValue}
        components={customComponents}
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
        styles={customStyles}
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
