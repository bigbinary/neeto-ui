import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";

import { hyphenize } from "../common";
import Label from "./Label";

const Checkbox = ({
  label = "",
  error = "",
  className = "",
  required = false,
  ...otherProps
}) => {
  const id = useId(otherProps.id);
  const errorId = `error_${id}`;

  return (
    <div className={classnames(["neeto-ui-checkbox__wrapper", className])}>
      <div className="neeto-ui-checkbox__container">
        <input
          id={id}
          name={id}
          type="checkbox"
          className="neeto-ui-checkbox"
          required={required}
          aria-invalid={!!error}
          {...otherProps}
        />
        {label && (
          <Label
            data-cy={`${hyphenize(label)}-checkbox-label`}
            htmlFor={id}
            required={required}
          >
            {label}
          </Label>
        )}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-checkbox-error`}
          className="neeto-ui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  /**
   * To specify a unique ID to the checkbox component.
   */
  id: PropTypes.string,
  /**
   * To specify the text to be displayed next to the checkbox.
   */
  label: PropTypes.string,
  /**
   * To specify the error message to be shown.
   */
  error: PropTypes.string,
  /**
   * To provide external classnames to checkbox component.
   */
  className: PropTypes.string,
  /**
   * To specify whether the checkbox is a required field or not.
   */
  required: PropTypes.bool,
};

export default Checkbox;
