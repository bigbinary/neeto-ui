import React, { useState, forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { mergeLeft, isEmpty } from "ramda";
import CreatableSelect from "react-select/creatable";

import { noop, hyphenize } from "utils";

import {
  EMAIL_SEPARATION_REGEX,
  CUSTOM_STYLES,
  UNSTRICT_EMAIL_REGEX,
  CUSTOM_COMPONENTS,
} from "./constants";
import {
  formatEmailInputOptions,
  pruneDuplicates,
  renderValidEmails,
  renderDefaultText,
  getValidEmailsCount,
} from "./utils";

import Label from "../Label";

const MultiEmailInput = forwardRef(
  (
    {
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
      required = false,
      labelProps,
      visibleEmailsCount = 3,
      isCreateable = true,
      isAlwaysExpanded = false,
      ...otherProps
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [duplicateEmails, setDuplicateEmails] = useState([]);

    const isCounterVisible =
      !!counter &&
      (!counter.startsFrom || getValidEmailsCount(value) >= counter.startsFrom);

    const isOptionsPresent = !!otherProps.options;

    const handleFilterEmails = () => onChange(renderValidEmails(value));

    const handleEmailChange = inputValue => {
      const inputValues = inputValue.match(EMAIL_SEPARATION_REGEX);
      const emailMatches =
        inputValue.match(UNSTRICT_EMAIL_REGEX) || inputValues || [];

      const emails = emailMatches.map(email => formatEmailInputOptions(email));
      const { uniqueEmails, duplicates } = pruneDuplicates([
        ...value,
        ...emails,
      ]);
      onChange(uniqueEmails);
      setDuplicateEmails(duplicates);
      setInputValue("");
    };

    const handleKeyDown = event => {
      if (!inputValue) return;

      switch (event.key) {
        case "Enter": {
          handleEmailChange(inputValue);
          !isOptionsPresent && event.preventDefault();
          event.stopPropagation();

          return;
        }
        case "Tab":
        case ",":
        case " ": {
          handleEmailChange(inputValue);
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    const onCreateOption = input => {
      const email = formatEmailInputOptions(input);
      const { uniqueEmails, duplicates } = pruneDuplicates([...value, email]);
      onChange(uniqueEmails);
      setDuplicateEmails(duplicates);
      otherProps?.onCreateOption?.(input);
    };

    const handleBlur = event => {
      inputValue ? handleEmailChange(inputValue) : onBlur(event);
      setIsFocused(false);
      setDuplicateEmails([]);
    };

    let overrideProps = {};

    if (isOptionsPresent) {
      const isValidNewOption = (inputValue, _, selectOptions) => {
        if (!isCreateable) return false;

        const isInputEmpty = isEmpty(inputValue.trim());
        const doesInputContainSeparator =
          inputValue.includes(",") || inputValue.includes(" ");

        const isInputPresentInOptions = selectOptions.find(
          option => option.value === inputValue.toLowerCase()
        );

        return !(
          isInputEmpty ||
          doesInputContainSeparator ||
          isInputPresentInOptions
        );
      };
      overrideProps = { onCreateOption, isValidNewOption };
    }

    const isFilterEmailsLinkVisible =
      !!filterInvalidEmails && value.length > getValidEmailsCount(value);

    return (
      <div className="neeto-ui-input__wrapper neeto-ui-email-input__wrapper">
        <div className="neeto-ui-email-input__label-wrapper">
          {label && (
            <Label
              {...{ required }}
              className="neeto-ui-email-input__label"
              data-cy={`${hyphenize(label)}-input-label`}
              {...labelProps}
            >
              {label}
            </Label>
          )}
          {isCounterVisible && (
            <p
              className="neeto-ui-email-input__counter"
              data-cy={`${hyphenize(label)}-email-counter`}
            >
              {getValidEmailsCount(value)}{" "}
              {counter.label
                ? counter.label
                : renderDefaultText(getValidEmailsCount(value))}
            </p>
          )}
        </div>
        <CreatableSelect
          isMulti
          required
          classNamePrefix="neeto-ui-react-select"
          components={CUSTOM_COMPONENTS}
          isDisabled={disabled}
          className={classnames(
            "neeto-ui-react-select__container neeto-ui-react-select__container--medium neeto-ui-email-input__select",
            { "neeto-ui-react-select__container--error": !!error }
          )}
          styles={{
            ...CUSTOM_STYLES,
            control: mergeLeft({
              maxHeight: `${maxHeight}px`,
              overflowY: "auto",
            }),
          }}
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
          onInputChange={inputValue => setInputValue(inputValue)}
          onKeyDown={handleKeyDown}
          {...{
            handleEmailChange,
            inputValue,
            isAlwaysExpanded,
            isFocused,
            onChange,
            placeholder,
            ref,
            value,
            visibleEmailsCount,
            ...(!isOptionsPresent && { menuIsOpen: false }),
            ...otherProps,
            ...overrideProps,
          }}
        />
        {!!error && (
          <p
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(label)}-input-error`}
          >
            {error}
            {isFilterEmailsLinkVisible && (
              <span
                className="neeto-ui-font-semibold cursor-pointer"
                onClick={handleFilterEmails}
              >
                &nbsp;
                {filterInvalidEmails.label
                  ? filterInvalidEmails.label
                  : "Click here to remove invalid emails."}
              </span>
            )}
          </p>
        )}
        {!!helpText && (
          <p
            className="neeto-ui-input__help-text"
            data-cy={`${hyphenize(label)}-input-help`}
          >
            {helpText}
          </p>
        )}
        {!!duplicateEmails.length && (
          <p
            className="neeto-ui-input__warning"
            data-cy={`${hyphenize(label)}-duplicate-emails`}
          >
            Duplicate emails removed: {duplicateEmails.join(", ")}
          </p>
        )}
      </div>
    );
  }
);

MultiEmailInput.displayName = "MultiEmailInput";

MultiEmailInput.propTypes = {
  /**
   * To specify the text to be displayed above the Input field.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
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
   * To specify whether the Input field is required or not.
   */
  required: PropTypes.bool,
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
  /**
   * To specify the number of email to be displayed in the input field when not in focus.
   */
  visibleEmailsCount: PropTypes.number,
  /**
   * To specify whether a new email option can be created or not.
   */
  isCreateable: PropTypes.bool,
  /**
   * To specify whether the input field should always be shown in an expanded state or not.
   */
  isAlwaysExpanded: PropTypes.bool,
};

export default MultiEmailInput;
