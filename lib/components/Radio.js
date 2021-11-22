import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";
import { hyphenize } from "../common";
import Label from "./Label";

const Radio = ({
  label = "",
  children,
  stacked = false,
  className = "",
  containerClassName = "",
  error = "",
  ...props
}) => {
  const id = useId(props.id);
  const errorId = `error_${id}`;
  return (
    <div className={classnames(["neeto-ui-radio__wrapper", className])}>
      {label && <Label className="neeto-ui-radio__label">{label}</Label>}
      <div
        className={classnames(["neeto-ui-radio__container"], {
          "neeto-ui-radio__container--stacked": stacked,
          [containerClassName]: containerClassName,
        })}
      >
        {React.Children.map(children, (child) => React.cloneElement(child, { ...child.props, error: !!error, ...props }))}
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
  containerClassName: PropTypes.string,
  /**
   * To specify the error message to be displayed when the radio input is invalid.
   */
  error: PropTypes.string,
};

const Item = ({ name = "", label = "", className = "", error = false, ...otherProps }) => {
  const id = useId(otherProps.id);

  return (
    <div className={classnames(["neeto-ui-radio__item", className])}>
      <input id={id} type="radio" name={name} className={
        classnames("neeto-ui-radio", {
          "neeto-ui-radio--error": error
        })
      } {...otherProps} />
      {label && (
        <Label data-cy={`${hyphenize(label)}-radio-label`} htmlFor={id}>
          {label}
        </Label>
      )}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
