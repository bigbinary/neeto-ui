import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";

const clearIcon = "ri-close-line";

function Tag({
  label,
  type,
  size,
  indicatorColor,
  className,
  icon,
  onClick,
  disabled,
  showClearOption,
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
        <Icon size={9} />
        {isContentPresent && <span className="nui-tag--icon">{label}</span>}
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

  if (isContentPresent && showClearOption) {
    // eslint-disable-next-line react/display-name
    ClearIcon = () => (
      <Close
        size={size === "large" ? 15 : 13}
        onClick={!disabled && onClick}
        className={classnames(clearIcon, "nui-tag--clear")}
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
  onClick: () => {
  },
  type: null,
  size: null,
  className: null,
  disabled: false,
  showClearOption: false,
  otherProps: {}
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  showClearOption: PropTypes.bool,
  otherProps: PropTypes.object
};

export default Tag;
