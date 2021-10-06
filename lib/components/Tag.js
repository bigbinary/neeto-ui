import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";

const sizes = { small: "small", large: "large" };
const styles = { outline: "outline", solid: "solid" };
const colors = { green: "green", yellow: "yellow", red: "red", blue: "blue", grey: "grey" };

const Tag = ({
  icon,
  size,
  label,
  style,
  color,
  onClose,
  disabled,
  indicator,
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
          "neeto-ui-tag--large": size === sizes.large,
          "neeto-ui-tag--solid": style === styles.solid,
          "neeto-ui-tag--green": color === colors.green,
          "neeto-ui-tag--yellow": color === colors.yellow,
          "neeto-ui-tag--red": color === colors.red,
          "neeto-ui-tag--blue": color === colors.blue,
          "neeto-ui-tag--grey": color === colors.grey,
        },
        className
      )}
      {...otherProps}
    >

      {indicator &&
        <span className={classnames("neeto-ui-tag__indicator", `${indicator}`)}/>
      }

      {icon &&
        <span className="neeto-ui-tag__icon">
          <Icon/>
        </span>
      }

      {label}

      {onClose &&
        <span onClick={!disabled && onClose} className="neeto-ui-tag__close">
          <Close/>
        </span>
      }
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
  otherProps: null
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  size: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.oneOf(Object.keys(styles)),
  color: PropTypes.oneOf(Object.keys(colors)),
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  indicator: PropTypes.string,
  className: PropTypes.string,
  otherProps: PropTypes.object
};

export default Tag;
