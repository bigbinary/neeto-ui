import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useId } from "@reach/auto-id";
import { Check, Close } from "@bigbinary/neeto-icons";

import Label from "./Label";
import { hyphenize } from "../common";

const Switch = ({
  label = "",
  required = false,
  className = "",
  error = "",
  onChange = () => {},
  ...otherProps
}) => {
  const id = useId(otherProps.id);
  const errorId = `error_${id}`;
  const { checked, disabled } = otherProps;

  return (
    <div className={classnames(["neeto-ui-switch__wrapper", className])}>
      <div className="neeto-ui-switch__container">
        <label
          className={classnames("neeto-ui-switch__item", {
            "neeto-ui-switch__item--checked": !!checked,
            "neeto-ui-switch__item--disabled": disabled,
          })}
        >
          <input type="checkbox" onChange={onChange} {...otherProps} />
          <span
            aria-hidden="true"
            className={classnames("neeto-ui-switch", {
              "neeto-ui-switch--checked": !!checked,
            })}
          >
            {checked ? (
              <Check size="12" strokeWidth={4} data-testid="check-icon" />
            ) : (
              <Close size="12" strokeWidth={3} data-testid="close-icon" />
            )}
          </span>
        </label>
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-switch-label`}
            htmlFor={id}
          >
            {label}
          </Label>
        )}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-switch-error`}
          className="neeto-ui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
    </div>
  );
};

Switch.propTypes = {
  /**
   * Text to be displayed above the component
   */
  label: PropTypes.string,
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
};

export default Switch;
