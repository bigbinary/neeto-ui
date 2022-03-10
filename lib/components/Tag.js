import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";

const SIZES = { small: "small", large: "large" };
const STYLES = { outline: "outline", solid: "solid" };
const COLORS = {
  green: "green",
  yellow: "yellow",
  red: "red",
  blue: "blue",
  gray: "gray",
};

const Tag = ({
  icon = null,
  size = SIZES.small,
  label = "",
  style = STYLES.outline,
  onClose = null,
  disabled = false,
  className = "",
  color,
  indicatorColor,
  ...otherProps
}) => {
  let Icon =
    typeof icon == "string" ? () => <i className={icon} /> : icon || Fragment;

  return (
    <div
      className={classnames(
        "neeto-ui-tag",
        {
          "neeto-ui-tag--size-large": size === SIZES.large,
          "neeto-ui-tag--size-small": size === SIZES.small,
          "neeto-ui-tag--style-outline": style === STYLES.outline,
          "neeto-ui-tag--style-solid": style === STYLES.solid,
          "neeto-ui-tag--color-green": color === COLORS.green,
          "neeto-ui-tag--color-yellow": color === COLORS.yellow,
          "neeto-ui-tag--color-red": color === COLORS.red,
          "neeto-ui-tag--color-blue": color === COLORS.blue,
          "neeto-ui-tag--color-gray": color === COLORS.gray,
        },
        className
      )}
      {...otherProps}
    >
      {indicatorColor && (
        <span
          className={classnames("neeto-ui-tag__indicator", {
            "neeto-ui-bg-error": indicatorColor === COLORS.red,
            "neeto-ui-bg-info": indicatorColor === COLORS.blue,
            "neeto-ui-bg-warning": indicatorColor === COLORS.yellow,
            "neeto-ui-bg-success": indicatorColor === COLORS.green,
            "neeto-ui-bg-gray-500": indicatorColor === COLORS.gray,
          })}
        />
      )}

      {icon && (
        <span className="neeto-ui-tag__icon">
          <Icon />
        </span>
      )}

      {label}

      {onClose && (
        <span onClick={!disabled && onClose} className="neeto-ui-tag__close">
          <Close />
        </span>
      )}
    </div>
  );
};

Tag.propTypes = {
  /**
   * To specify the icon to be used in the Tag.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * To specify the size of the Tag.
   */
  size: PropTypes.oneOf(Object.keys(SIZES)),
  /**
   * To specify the label to be used in the Tag.
   */
  label: PropTypes.string,
  /**
   * To specify the style of a Tag.
   */
  style: PropTypes.oneOf(Object.keys(STYLES)),
  /**
   * To specify the color of a Tag.
   */
  color: PropTypes.oneOf(Object.keys(COLORS)),
  /**
   * To specify the callback function to be called when the close icon is clicked.
   */
  onClose: PropTypes.func,
  /**
   * To specify whether to disable any action on click of the close icon.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the color of the indication icon in a Tag.
   */
  indicatorColor: PropTypes.oneOf(Object.keys(COLORS)),
  /**
   * To provide additional class names to the Tag.
   */
  className: PropTypes.string,
};

export default Tag;
