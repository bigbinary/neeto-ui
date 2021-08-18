import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";

const sizes = { small: "small", large: "large" };
const styles = { outline: "outline", solid: "solid" };

const Tag = ({
  icon,
  size,
  label,
  style,
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
        "nui-tag",
        {
          "nui-tag--large": size === sizes.large,
          "nui-tag--solid": style === styles.solid
        },
        className
      )}
      {...otherProps}
    >
      {/*TODO: The 'tw-' prefix needs to be removed. */}

      {indicator &&
        <span className={classnames("nui-tag__indicator", `tw-${indicator}`)}/>
      }

      {icon && 
        <span className="nui-tag__icon">
          <Icon/>
        </span>
      }

      {label}

      {onClose &&
        <span onClick={!disabled && onClose} className="nui-tag__close">
          <Close/>
        </span>
      }
    </div>
  );
}

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
  style: PropTypes.string,
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  indicator: PropTypes.string,
  className: PropTypes.string,
  otherProps: PropTypes.object
};

export default Tag;
