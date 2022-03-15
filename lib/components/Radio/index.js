import React, { useState, Children, cloneElement } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../../common";
import Label from "../Label";
import Item from "./Item";

const Radio = ({
  label = "",
  children,
  stacked = false,
  className = "",
  containerClassName = "",
  error = "",
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState("");

  const id = useId(props.id);
  const errorId = `error_${id}`;

  const internalOnChange = (e) => setInternalValue(e.target.value);
  
  return (
    <div className={classnames(["neeto-ui-radio__wrapper", className])}>
      {label && <Label className="neeto-ui-radio__label">{label}</Label>}
      <div
        className={classnames(["neeto-ui-radio__container"], {
          "neeto-ui-radio__container--stacked": stacked,
          "neeto-ui-radio__container--error": error,
          [containerClassName]: containerClassName,
        })}
      >
        {Children.map(children, (child) =>
          cloneElement(child, {
            ...child.props,
            ...props,
            value: child.props.value,
            checked:
              child.props.checked ??
              [internalValue, props.value].includes(child.props.value),
            onChange: child.props.onChange ?? onChange ?? internalOnChange,
          })
        )}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-radio-input-error`}
          className="neeto-ui-radio-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
    </div>
  );
};

Radio.propTypes = {
  /**
   * To specify the label to be displayed for radio component.
   */
  label: PropTypes.string,
  /**
   * To specify the content to be rendered inside the radio component.
   */
  children: PropTypes.node,
  /**
   * To specify whether the radio items should be stacked vertically or not.
   */
  stacked: PropTypes.bool,
  /**
   * To specify external classnames as overrides to the radio component.
   */
  className: PropTypes.string,
  /**
   * To specify external classnames for the container of radio component.
   */
  containerClassName: PropTypes.string,
  /**
   * To specify the error message to be displayed when the radio input is invalid.
   */
  error: PropTypes.string,
};

Radio.Item = Item;

export default Radio;
