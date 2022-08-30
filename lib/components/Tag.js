import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";

const SIZES = { small: "small", large: "large" };

const TYPES = { outline: "outline", solid: "solid" };

const STATUS = {
  success: "success",
  warning: "warning",
  danger: "danger",
  primary: "primary",
  inactive: "inactive",
};

const Tag = ({
  status,
  indicatorColor,
  label = "",
  icon = null,
  className = "",
  onClose = null,
  disabled = false,
  size = SIZES.small,
  type = TYPES.outline,
  ...otherProps
}) => {
  let Icon =
    typeof icon == "string" ? () => <i className={icon} /> : icon || Fragment;

  return (
    <div
      data-testid="tag-container"
      className={classnames(
        "neeto-ui-tag",
        {
          "neeto-ui-tag--size-large": size === SIZES.large,
          "neeto-ui-tag--size-small": size === SIZES.small,
          "neeto-ui-tag--style-outline": type === TYPES.outline,
          "neeto-ui-tag--style-solid": type === TYPES.solid,
          "neeto-ui-tag--color-green": status === STATUS.success,
          "neeto-ui-tag--color-yellow": status === STATUS.warning,
          "neeto-ui-tag--color-red": status === STATUS.danger,
          "neeto-ui-tag--color-blue": status === STATUS.primary,
          "neeto-ui-tag--color-gray": status === STATUS.inactive,
        },
        className
      )}
      {...otherProps}
    >
      {indicatorColor && (
        <span
          data-testid="tag-indicator"
          className={classnames("neeto-ui-tag__indicator", {
            "neeto-ui-bg-error-500": indicatorColor === STATUS.danger,
            "neeto-ui-bg-info-500": indicatorColor === STATUS.primary,
            "neeto-ui-bg-warning-500": indicatorColor === STATUS.warning,
            "neeto-ui-bg-success-500": indicatorColor === STATUS.success,
            "neeto-ui-bg-gray-500": indicatorColor === STATUS.inactive,
          })}
        />
      )}

      {icon && (
        <span data-testid="class-icon" className="neeto-ui-tag__icon">
          <Icon />
        </span>
      )}

      {label}

      {onClose && (
        <span
          data-testid="tag-close-button"
          onClick={!disabled ? onClose : null}
          className="neeto-ui-tag__close"
        >
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
  type: PropTypes.oneOf(Object.keys(TYPES)),
  /**
   * To specify the color of a Tag.
   */
  status: PropTypes.oneOf(Object.keys(STATUS)),
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
  indicatorColor: PropTypes.oneOf(Object.keys(STATUS)),
  /**
   * To provide additional class names to the Tag.
   */
  className: PropTypes.string,
};

export default Tag;
