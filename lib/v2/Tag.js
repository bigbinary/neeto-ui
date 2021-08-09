import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function Tag(props) {
  const {
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
  } = props;
  let innerContent = content;

  if (icon) {
    innerContent = (
      <>
        <i className={classnames(icon, { "nui-tag--icon": content })} />{" "}
        {content}
      </>
    );
  } else if (type === "color") {
    innerContent = (
      <>
        <div style={{ backgroundColor: color }} className="nui-tag--color" />
        {content}
      </>
    );
  }

  const isLarge = type === "large";
  const isSolid = type === "solid";
  const isLargeSolid = type === "largeSolid";

  return (
    <div
      {...otherProps}
      className={classnames(
        {
          "nui-tag--large": isLarge,
          "nui-tag--solid": isSolid,
          "nui-tag--largeSolid": isLargeSolid,
        },
        "nui-tag"
      )}
    >
      {innerContent}
      {showClearOption && (
        <i
          onClick={!disabled && onClick}
          className={classnames(
            "ri-close-line",
            { "nui-tag--clear": content },
            className
          )}
        />
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
  otherProps: null,
  showClearOption: false,
};

Tag.propTypes = {
  icon: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  otherProps: PropTypes.object,
  showClearOption: PropTypes.bool,
};

export default Tag;
