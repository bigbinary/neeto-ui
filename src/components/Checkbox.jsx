import React, { forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import { useId } from "hooks";
import { hyphenize } from "utils";

import Label from "./Label";

const Checkbox = forwardRef(
  (
    {
      label = "",
      error = "",
      className = "",
      required = false,
      labelProps,
      children,
      ...otherProps
    },
    ref
  ) => {
    const id = useId(otherProps.id);
    const errorId = `error_${id}`;
    const renderLabel = label || children;

    return (
      <div className={classnames(["neeto-ui-checkbox__wrapper", className])}>
        <div className="neeto-ui-checkbox__container">
          <input
            {...{ id, ref, required }}
            aria-invalid={!!error}
            className="neeto-ui-checkbox"
            data-cy={`${hyphenize(renderLabel)}-checkbox-input`}
            name={id}
            type="checkbox"
            {...otherProps}
          />
          {renderLabel && (
            <Label
              {...{ required }}
              data-cy={`${hyphenize(renderLabel)}-checkbox-label`}
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
            data-cy={`${hyphenize(renderLabel)}-checkbox-error`}
            id={errorId}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  /**
   * To specify a unique ID to the Checkbox component.
   */
  id: PropTypes.string,
  /**
   * To specify the text to be displayed next to the Checkbox.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To specify the error message to be shown.
   */
  error: PropTypes.string,
  /**
   * To provide external classnames to Checkbox component.
   */
  className: PropTypes.string,
  /**
   * To specify whether the Checkbox is a required field or not.
   */
  required: PropTypes.bool,
  /**
   *  To specify the children label to be rendered inside the Checkbox.
   */
  children: PropTypes.string,
};

export default Checkbox;
