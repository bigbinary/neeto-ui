import React, { forwardRef } from "react";

import classnames from "classnames";
import { Check, Close } from "neetoicons";
import PropTypes from "prop-types";

import { useId } from "hooks";
import { hyphenize, noop } from "utils";

import Label from "./Label";

const Switch = forwardRef(
  (
    {
      label = "",
      required = false,
      className = "",
      error = "",
      onChange = noop,
      labelProps,
      children,
      ...otherProps
    },
    ref
  ) => {
    const id = useId(otherProps.id);
    const errorId = `error_${id}`;
    const { checked, disabled } = otherProps;
    const renderLabel = label || children;

    return (
      <div
        {...{ ref }}
        className={classnames(["neeto-ui-switch__wrapper", className])}
      >
        <div className="neeto-ui-switch__container">
          <label
            tabIndex={0}
            className={classnames("neeto-ui-switch__item", {
              "neeto-ui-switch__item--checked": !!checked,
              "neeto-ui-switch__item--disabled": disabled,
            })}
          >
            <input {...{ id, onChange }} type="checkbox" {...otherProps} />
            <span
              aria-hidden="true"
              data-cy={`${hyphenize(renderLabel)}-switch`}
              className={classnames("neeto-ui-switch", {
                "neeto-ui-switch--checked": !!checked,
              })}
            >
              {checked ? (
                <Check
                  data-cy="check-icon"
                  data-testid="check-icon"
                  size="12"
                  strokeWidth={4}
                />
              ) : (
                <Close
                  data-cy="close-icon"
                  data-testid="close-icon"
                  size="12"
                  strokeWidth={3}
                />
              )}
            </span>
          </label>
          {renderLabel && (
            <Label
              {...{ required }}
              data-cy={`${hyphenize(renderLabel)}-switch-label`}
              htmlFor={id}
              {...labelProps}
            >
              {renderLabel}
            </Label>
          )}
        </div>
        {!!error && (
          <p
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(renderLabel)}-switch-error`}
            id={errorId}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";

Switch.propTypes = {
  /**
   * Text to be displayed above the component
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To specify whether to show the required asterisk.
   */
  required: PropTypes.bool,
  /**
   * Provide external classnames to spinner component.
   */
  className: PropTypes.string,
  /**
   * To specify the error message to be shown.
   */
  error: PropTypes.string,
  /**
   * Checks whether the Switch is checked or not
   */
  checked: PropTypes.bool,
  /**
   * To disable the component
   */
  disabled: PropTypes.bool,
  /**
   *  To specify the children label to be rendered inside the Checkbox.
   */
  children: PropTypes.string,
};

export default Switch;
