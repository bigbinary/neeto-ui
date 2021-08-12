import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";

function Tag({
  label,
  type,
  size,
  indicatorColor,
  className,
  icon,
  onClose,
  disabled,
  ...otherProps
}) {
  let innerContent = label;
  const isLarge = size === "large";
  const isSolid = type === "solid";
  const isContentPresent = !!label;

  let ClearIcon = React.Fragment;

  const tagClasses = classnames(
    "nui-tag",
    {
      "nui-tag--large": isLarge,
      "nui-tag--solid": isSolid
    },
    className
  );

  const getIcon = () => {
    return typeof icon == "string"
      ? () => <i className={icon} />
      : icon || React.Fragment;
  };

  if (icon) {
    const Icon = getIcon();
    innerContent = (
      <>
        <Icon size={5} />
        {isContentPresent && <span className="nui-tag__icon">{label}</span>}
      </>
    );
  }

  if (type === "color") {
    innerContent = (
      <>
        {/*TODO: The 'tw-' prefix needs to be removed. */}
        <span
          className={classnames("nui-tag__indicator", `tw-${indicatorColor}`)}
        />
        {isContentPresent && (
          <span style={{ marginLeft: "0.25rem" }}>{label}</span>
        )}
      </>
    );
  }

  if (isContentPresent && !!onClose) {
    // eslint-disable-next-line react/display-name
    ClearIcon = () => (
      <Close
        size={size === "large" ? 13 : 11}
        onClick={!disabled && onClose}
        className="nui-tag__clear"
      />
    );
  }

  return (
    <div {...otherProps} className={tagClasses}>
      {innerContent}
      <ClearIcon />
    </div>
  );
}

Tag.defaultProps = {
  icon: null,
  label: "",
  onClose: null,
  type: null,
  size: null,
  className: null,
  disabled: false,
  otherProps: {}
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  onClose: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  otherProps: PropTypes.object
};

export default Tag;
