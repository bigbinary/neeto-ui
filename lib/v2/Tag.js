import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const clearIcon = "ri-close-line";

function Tag({
  content,
  type,
  size,
  color,
  className,
  icon,
  onClick,
  disabled,
  showClearOption,
  ...otherProps
}) {
  let innerContent = content;
  const isLarge = size === "large";
  const isSolid = type === "solid";
  const isContentPresent = !!content;

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
        <Icon />
        {isContentPresent && <span className="nui-tag--icon">{content}</span>}
      </>
    );
  }

  if (type === "color") {
    innerContent = (
      <>
        <span style={{ backgroundColor: color }} className="nui-tag--color" />
        {isContentPresent && <span style={{ marginLeft: "0.25rem" }}>{content}</span>}
      </>
    );
  }

  if (isContentPresent && showClearOption) {
    ClearIcon = () => <i onClick={!disabled && onClick} className={classnames(clearIcon, "nui-tag--clear")} />
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
  content: "",
  onClick: () => {},
  type: null,
  size: null,
  className: null,
  disabled: false,
  showClearOption: false,
  otherProps: {}
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  showClearOption: PropTypes.bool,
  otherProps: PropTypes.object
};

export default Tag;
