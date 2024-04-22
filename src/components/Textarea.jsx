import React, { useState, useEffect, forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import { useSyncedRef, useId } from "hooks";
import "styles/common";
import "styles/components/_input";
import { hyphenize } from "utils";

import Label from "./Label";

const SIZES = { small: "small", medium: "medium", large: "large" };

const ROWS = { small: 1, medium: 3, large: 4 };

const RESIZE = { vertical: "vertical", none: "none" };

const Textarea = forwardRef(
  (
    {
      size = SIZES.medium,
      resize = RESIZE.vertical,
      suffix = null,
      prefix = null,
      disabled = false,
      required = false,
      nakedTextarea = false,
      helpText = "",
      error = "",
      label = "",
      className = "",
      maxLength,
      unlimitedChars = false,
      labelProps,
      ...otherProps
    },
    ref
  ) => {
    const [valueInternal, setValueInternal] = useState("");

    const value = otherProps.value ?? valueInternal ?? "";

    const id = useId(otherProps.id);
    const errorId = `error_${id}`;
    const helpTextId = `helpText_${id}`;
    const textareaRef = useSyncedRef(ref);

    const valueLength = value?.toString().length || 0;
    const isCharacterLimitVisible = valueLength >= maxLength * 0.85;
    const maxLengthError = unlimitedChars && valueLength > maxLength;

    const onChangeInternal = e => setValueInternal(e.target.value);
    const onChange = otherProps.onChange ?? onChangeInternal;
    const isMaxLengthPresent = !!maxLength || maxLength === 0;

    useEffect(() => {
      textareaRef.current.style.minHeight = "22px";
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight + 1}px`;
    }, [value]);

    return (
      <div className={classnames(["neeto-ui-input__wrapper", className])}>
        <div className="neeto-ui-input__label-wrapper">
          {label && (
            <Label
              {...{ required }}
              data-cy={`${hyphenize(label)}-label`}
              htmlFor={id}
              {...labelProps}
            >
              {label}
            </Label>
          )}
          {isCharacterLimitVisible && (
            <p
              className={classnames("neeto-ui-input__max-length", {
                "neeto-ui-input__max-length--error": maxLengthError,
              })}
            >
              {valueLength}/{maxLength}
            </p>
          )}
        </div>
        <div
          data-cy={`${hyphenize(label)}-text-input`}
          className={classnames("neeto-ui-input", "neeto-ui-input--textarea", {
            "neeto-ui-input--error": !!error,
            "neeto-ui-input--disabled": !!disabled,
            "neeto-ui-input--naked": !!nakedTextarea,
            "neeto-ui-input--small": size === SIZES.small,
            "neeto-ui-input--medium": size === SIZES.medium,
            "neeto-ui-input--large": size === SIZES.large,
            "neeto-ui-input--resize--vertical": resize === RESIZE.vertical,
            "neeto-ui-input--resize--none": resize === RESIZE.none,
          })}
        >
          {prefix && <div className="neeto-ui-input__prefix">{prefix}</div>}
          <textarea
            ref={textareaRef}
            rows={ROWS[size]}
            {...{
              disabled,
              ...(isMaxLengthPresent && !unlimitedChars && { maxLength }),
              ...otherProps,
              onChange,
              value,
            }}
          />
          {suffix && <div className="neeto-ui-input__suffix">{suffix}</div>}
        </div>
        {!!error && (
          <p
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(label)}-input-error`}
            id={errorId}
          >
            {error}
          </p>
        )}
        {helpText && (
          <p className="neeto-ui-input__help-text" id={helpTextId}>
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  /**
   * To specify the row height of the Textarea.
   */
  rows: PropTypes.number,
  /**
   * To specify the size of Textarea.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify the label shown above the Textarea.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To provide the value of the Textarea.
   */
  value: PropTypes.string,
  /**
   * To provide the error message shown below the Textarea.
   */
  error: PropTypes.string,
  /**
   * To provide the placeholder text for the Textarea.
   */
  placeholder: PropTypes.string,
  /**
   * To specify whether the Textarea is required.
   */
  required: PropTypes.bool,
  /**
   * To specify whether the Textarea is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To provide additional classnames to the Textarea container.
   */
  className: PropTypes.string,
  /**
   * The resize property sets whether the Textarea is resizable.
   */
  resize: PropTypes.oneOf(Object.values(RESIZE)),
  /**
   * To specify the text that appears below the Textarea.
   */
  helpText: PropTypes.string,
  /**
   * To create a Textarea without any borders.
   */
  nakedTextarea: PropTypes.bool,
  /**
   * To specify a maximum character limit to the Textarea. Charater limit is visible only if the Textarea value is greater than or equal to 85% of the maximum character limit.
   */
  maxLength: PropTypes.number,
  /**
   * To be used along with maxLength prop. When set to true the character limit will not be enforced and character count will be shown in error state if the character limit is exceeded.
   */
  unlimitedChars: PropTypes.bool,
  /**
   * To specify the content to be added at the end of the Textarea.
   */
  suffix: PropTypes.node,
  /**
   * To specify the content to be added at the beginning of the Textarea.
   */
  prefix: PropTypes.node,
};

export default Textarea;
