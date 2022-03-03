import React from "react";
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
  icon,
  size,
  label,
  style,
  color,
  onClose,
  disabled,
  indicatorColor,
  className,
  ...otherProps
}) => {
  let Icon =
    typeof icon == "string"
      ? () => <i className={icon} />
      : icon || React.Fragment;

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

Tag.defaultProps = {
  icon: null,
  size: SIZES.small,
  label: "",
  style: STYLES.outline,
  onClose: null,
  disabled: false,
  indicator: "",
  className: "",
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  label: PropTypes.string,
  style: PropTypes.oneOf(Object.keys(STYLES)),
  color: PropTypes.oneOf(Object.keys(COLORS)),
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  indicatorColor: PropTypes.oneOf(Object.keys(COLORS)),
  className: PropTypes.string,
};

export default Tag;
