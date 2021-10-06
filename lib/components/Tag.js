import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";

const sizes = { small: "small", large: "large" };
const styles = { outline: "outline", solid: "solid" };
const colors = {
  green: "green",
  yellow: "yellow",
  red: "red",
  blue: "blue",
  grey: "grey",
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
          "neeto-ui-tag--size-large": size === sizes.large,
          "neeto-ui-tag--size-small": size === sizes.small,
          "neeto-ui-tag--style-outline": style === styles.outline,
          "neeto-ui-tag--style-solid": style === styles.solid,
          "neeto-ui-tag--color-green": color === colors.green,
          "neeto-ui-tag--color-yellow": color === colors.yellow,
          "neeto-ui-tag--color-red": color === colors.red,
          "neeto-ui-tag--color-blue": color === colors.blue,
          "neeto-ui-tag--color-grey": color === colors.grey,
        },
        className
      )}
      {...otherProps}
    >
      {indicatorColor && (
        <span
          className={classnames("neeto-ui-tag__indicator", {
            "neeto-ui-bg-error": indicatorColor === colors.red,
            "neeto-ui-bg-info":
              indicatorColor === colors.blue,
            "neeto-ui-bg-warning":
              indicatorColor === colors.yellow,
            "neeto-ui-bg-success":
              indicatorColor === colors.green,
            "neeto-ui-bg-gray-500":
              indicatorColor === colors.grey,
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
  size: sizes.smalll,
  label: "",
  style: styles.outline,
  onClose: null,
  disabled: false,
  indicator: "",
  className: "",
  otherProps: null,
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  size: PropTypes.oneOf(Object.keys(sizes)),
  label: PropTypes.string,
  style: PropTypes.oneOf(Object.keys(styles)),
  color: PropTypes.oneOf(Object.keys(colors)),
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  indicatorColor: PropTypes.oneOf(Object.keys(colors)),
  className: PropTypes.string,
  otherProps: PropTypes.object,
};

export default Tag;
