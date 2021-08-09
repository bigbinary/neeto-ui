import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const clearIcon = "ri-close-line";

function Tag({
  content,
  type,
  color,
  className,
  icon,
  onClick,
  disabled,
  size,
  showClearOption,
  ...otherProps
}) {
  let innerContent = content;
  const isLarge = type === "large";
  const isSolid = type === "solid";
  const isLargeSolid = type === "largeSolid";
  const isContentPresent = !!content;

  const tagClasses = classNames(
    "nui-tag",
    {
      "nui-tag--large": isLarge,
      "nui-tag--solid": isSolid,
      "nui-tag--largeSolid": isLargeSolid,
    },
    className
  );

  const clearButtonClasses = classNames(clearIcon, {
    "nui-tag--clear": isContentPresent,
  });

  if (icon) {
    const Icon =
      typeof icon == "string"
        ? () => (
            <i
              className={classNames(icon, {
                "nui-tag--icon": isContentPresent,
              })}
            />
          )
        : icon || React.Fragment;

    innerContent = (
      <>
        <Icon />
        {content}
      </>
    );
  }

  if (type === "color") {
    innerContent = (
      <>
        <div
          style={{ backgroundColor: color }}
          className={classNames({ "nui-tag--color": isContentPresent })}
        />
        {content}
      </>
    );
  }

  return (
    <div {...otherProps} className={tagClasses}>
      {innerContent}
      {showClearOption && (
        <i onClick={!disabled && onClick} className={clearButtonClasses} />
      )}
    </div>
  );
}

Tag.defaultProps = {
  icon: null,
  content: "",
  onClick: () => {},
  type: null,
  className: null,
  disabled: false,
  size: null,
  showClearOption: false,
  otherProps: null,
};

Tag.propTypes = {
  icon: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  showClearOption: PropTypes.bool,
  otherprops: PropTypes.object,
};

export default Tag;
