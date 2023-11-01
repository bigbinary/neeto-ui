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
import Typography from "../Typography";

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
      ...otherProps
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const isCounterVisible =
      !!counter &&
      (!counter.startsFrom || getValidEmailsCount(value) >= counter.startsFrom);

    const isOptionsPresent = !!otherProps.options;

    const handleFilterEmails = () => onChange(renderValidEmails(value));

    const handleEmailChange = () => {
      const inputValues = inputValue.match(EMAIL_SEPARATION_REGEX);
      const emailMatches =
        inputValue.match(UNSTRICT_EMAIL_REGEX) || inputValues || [];

      const emails = emailMatches.map(email => formatEmailInputOptions(email));
      onChange(pruneDuplicates([...value, ...emails]));
      setInputValue("");
    };

    const handleKeyDown = event => {
      if (!inputValue) return;

      switch (event.key) {
        case "Enter": {
          handleEmailChange();
          !isOptionsPresent && event.preventDefault();
          event.stopPropagation();

          return;
        }
        case "Tab":
        case ",":
        case " ": {
          handleEmailChange();
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    const onCreateOption = input => {
      const email = formatEmailInputOptions(input);
      onChange(pruneDuplicates([...value, email]));
      otherProps?.onCreateOption?.(input);
    };

    const handleBlur = event => {
      inputValue ? handleEmailChange() : onBlur(event);
      setIsFocused(false);
    };

    let overrideProps = {};

    if (isOptionsPresent) {
      const isValidNewOption = (inputValue, _, selectOptions) => {
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
              className="neeto-ui-email-input__label"
              data-cy={`${hyphenize(label)}-input-label`}
              required={required}
              {...labelProps}
            >
              {label}
            </Label>
          )}
          {isCounterVisible && (
            <Typography
              className="neeto-ui-email-input__counter"
              data-cy={`${hyphenize(label)}-email-counter`}
              style="body2"
            >
              {getValidEmailsCount(value)}{" "}
              {counter.label
                ? counter.label
                : renderDefaultText(getValidEmailsCount(value))}
            </Typography>
          )}
        </div>
        <CreatableSelect
          isMulti
          required
          classNamePrefix="neeto-ui-react-select"
          components={CUSTOM_COMPONENTS}
          inputValue={inputValue}
          isDisabled={disabled}
          isFocused={isFocused}
          placeholder={placeholder}
          ref={ref}
          value={value}
          visibleEmailsCount={visibleEmailsCount}
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
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onInputChange={inputValue => setInputValue(inputValue)}
          onKeyDown={handleKeyDown}
          {...(!isOptionsPresent && { menuIsOpen: false })}
          {...otherProps}
          {...overrideProps}
        />
        {!!error && (
          <Typography
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(label)}-input-error`}
            style="body3"
          >
            {error}
            {isFilterEmailsLinkVisible && (
              <Typography
                className="cursor-pointer"
                component="span"
                style="body3"
                weight="semibold"
                onClick={handleFilterEmails}
              >
                &nbsp;
                {filterInvalidEmails.label
                  ? filterInvalidEmails.label
                  : "Click here to remove invalid emails."}
              </Typography>
            )}
          </Typography>
        )}
        {!!helpText && (
          <Typography
            className="neeto-ui-input__help-text"
            data-cy={`${hyphenize(label)}-input-help`}
            style="body3"
          >
            {helpText}
          </Typography>
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
};

export default MultiEmailInput;
