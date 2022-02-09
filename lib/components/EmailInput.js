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

const isValidEmail = (email) => {
  const regex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$", "i");
  return regex.test(email);
};

const createOption = (label) => ({
  label,
  value: label,
  valid: isValidEmail(label),
});

const customStyles = {
  input: (styles) => ({
    ...styles,
    overflow: "hidden",
  }),
  multiValue: (styles, { data: { valid } }) => ({
    ...styles,
    border: !valid ? "thin dashed #f56a58 !important" : "none",
  }),
};

const EmailInput = ({
  label = "",
  placeholder = "",
  value = [],
  onChange,
  error,
  onBlur,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleEmailChange = () => {
    const emails = inputValue.match(/[^\s,]+/g);
    const values = emails.map((email) => createOption(email));
    onChange([...value, ...values]);
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

  const handleBlur = (event) => {
    if (inputValue) handleEmailChange();
    onBlur(event);
  };

  return (
    <div className="flex flex-col">
      {label && (
        <Label className="mb-1" data-cy="emails-input-label">
          {label}
        </Label>
      )}

      <CreatableSelect
        onBlur={handleBlur}
        className={classnames(
          "neeto-ui-react-select__container",
          !!error && "neeto-ui-react-select__container--error"
        )}
        classNamePrefix="neeto-ui-react-select"
        components={customComponents}
        inputValue={inputValue}
        isMulti
        menuIsOpen={false}
        onChange={onChange}
        onInputChange={(inputValue) => setInputValue(inputValue)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={value}
        styles={customStyles}
        isDisabled={disabled}
      />

      <div>
        {!!error && Array.isArray(error) ? (
          <Typography style="body3" className="neeto-ui-text-error mt-1">
            Please make sure all emails are valid
          </Typography>
        ) : (
          <Typography style="body3" className="neeto-ui-text-error mt-1">
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
};

EmailInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.array,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default EmailInput;
