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
}) => {
  return (
    <div className={classnames(["nui-radio__wrapper", className])}>
      {label && <Label>{label}</Label>}
      <div
        className={classnames(["nui-radio__container"], {
          "nui-radio__container--stacked": stacked,
          [containerClassName]: containerClassName,
        })}
      >
        {children}
      </div>
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
};

const Item = ({ label = "", className = "", ...otherProps }) => {
  const id = useId(otherProps.id);

  return (
    <div className={classnames(["nui-radio__item", className])}>
      <input id={id} type="radio" className="nui-radio" {...otherProps} />
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
