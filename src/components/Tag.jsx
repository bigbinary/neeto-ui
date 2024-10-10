import React, { Fragment, forwardRef } from "react";

import classnames from "classnames";
import { isPresent } from "neetocist";
import { Close } from "neetoicons";
import PropTypes from "prop-types";

const SIZES = { small: "small", large: "large" };

const TYPES = { outline: "outline", solid: "solid" };

const STYLES = {
  primary: "primary",
  secondary: "secondary",
  info: "info",
  success: "success",
  warning: "warning",
  danger: "danger",
};

const Tag = forwardRef(
  (
    {
      style = STYLES.primary,
      indicatorStyle,
      label = "",
      icon = null,
      className = "",
      onClose = null,
      disabled = false,
      size = SIZES.small,
      type = TYPES.outline,
      color,
      children,
      ...otherProps
    },
    ref
  ) => {
    const Icon =
      typeof icon === "string"
        ? () => <i className={icon} />
        : icon || Fragment;
    const renderLabel = label || children;

    const internalColor = color?.replace("#", "");
    const colorStyles = `
      .neeto-ui-tag--type-outline.neeto-ui-tag--color-${internalColor},
      .neeto-ui-tag--type-solid.neeto-ui-tag--color-${internalColor} {
        --neeto-ui-tag-bg-color: rgb(from ${color} r g b / 0.1);
        --neeto-ui-tag-border-color: rgb(from ${color} r g b / 0.1);
      }
      .neeto-ui-tag--type-outline.neeto-ui-tag--color-${internalColor} {
        --neeto-ui-tag-color: ${color};
        --neeto-ui-tag-border-color: ${color};
      }
    `;

    return (
      <div
        {...{ ref }}
        data-cy="tag-container"
        data-testid="tag-container"
        className={classnames(
          "neeto-ui-tag",
          {
            "neeto-ui-tag--size-large": size === SIZES.large,
            "neeto-ui-tag--size-small": size === SIZES.small,
            "neeto-ui-tag--type-outline": type === TYPES.outline,
            "neeto-ui-tag--type-solid": type === TYPES.solid,
            "neeto-ui-tag--style-primary": style === STYLES.primary,
            "neeto-ui-tag--style-secondary": style === STYLES.secondary,
            "neeto-ui-tag--style-success": style === STYLES.success,
            "neeto-ui-tag--style-info": style === STYLES.info,
            "neeto-ui-tag--style-warning": style === STYLES.warning,
            "neeto-ui-tag--style-danger": style === STYLES.danger,
            [`neeto-ui-tag--color-${internalColor}`]: isPresent(color),
          },
          className
        )}
        {...otherProps}
      >
        {isPresent(color) && <style>{colorStyles}</style>}
        {indicatorStyle && (
          <span
            data-testid="tag-indicator"
            className={classnames("neeto-ui-tag__indicator", {
              "neeto-ui-bg-error-500": indicatorStyle === STYLES.danger,
              "neeto-ui-bg-info-500": indicatorStyle === STYLES.info,
              "neeto-ui-bg-warning-500": indicatorStyle === STYLES.warning,
              "neeto-ui-bg-success-500": indicatorStyle === STYLES.success,
              "neeto-ui-bg-primary-500": indicatorStyle === STYLES.primary,
              "neeto-ui-bg-gray-500": indicatorStyle === STYLES.secondary,
            })}
          />
        )}
        {icon && (
          <span className="neeto-ui-tag__icon" data-testid="class-icon">
            <Icon />
          </span>
        )}
        {renderLabel}
        {onClose && (
          <span
            className="neeto-ui-tag__close"
            data-cy="tag-close-icon"
            data-testid="tag-close-button"
            onClick={!disabled ? onClose : null}
          >
            <Close />
          </span>
        )}
      </div>
    );
  }
);

Tag.displayName = "Tag";

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
   * To specify the type of a Tag.
   */
  type: PropTypes.oneOf(Object.keys(TYPES)),
  /**
   * To specify the style of a Tag.
   */
  style: PropTypes.oneOf(Object.keys(STYLES)),
  /**
   * To specify the style of the indication icon in a Tag.
   */
  indicatorStyle: PropTypes.oneOf(Object.keys(STYLES)),
  /**
   * To specify the callback function to be called when the close icon is clicked.
   */
  onClose: PropTypes.func,
  /**
   * To specify whether to disable any action on click of the close icon.
   */
  disabled: PropTypes.bool,
  /**
   * To provide additional class names to the Tag.
   */
  className: PropTypes.string,
  /**
   * Accepts a color in hexadecimal format (#000000). It overrides the colors added by the `style` prop.
   */
  color: PropTypes.string,
  /**
   * To specify the children to be rendered inside the Tag.
   */
  children: PropTypes.string,
};

export default Tag;
