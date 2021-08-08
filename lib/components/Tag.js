import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Tag({
  icon,
  iconPosition,
  content,
  onClick,
  type,
  style,
  className,
  disabled,
  size,
  ...otherProps
}) {
  return (
    <div
      className={classNames("nui-tag", {
        "nui-tag--large": type === "large",
        "nui-tag--solid": type === "solid",
        "nui-tag--largeSolid": type === "largeSolid",
      })}
      {...otherProps}
    >
      {content}
    </div>
  );
}

Tag.defaultProps = {
  icon: null,
  iconPosition: null,
  content: "",
  onClick: () => {},
  type: "button",
  style: "",
  className: "",
  disabled: false,
  size: null,
  otherProps: {},
};

Tag.propTypes = {
  icon: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  iconPosition: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  otherProps: PropTypes.object,
};

export default Tag;
