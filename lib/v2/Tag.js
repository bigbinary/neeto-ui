import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Tag({
  content,
  type,
  className,
  icon,
  onClick,
  disabled,
  size,
  showClearOption,
  ...otherProps
}) {
  let innerContent = content;

  if (icon) {
    innerContent = (
      <>
        <i className={classNames([icon], { "mr-1": content })} /> {content}
      </>
    );
  }

  return (
    <div
      className={classNames("nui-tag", `v2-nui-tag--${type}`)}
      {...otherProps}
    >
      {innerContent}
      {showClearOption && (
        <i
          onClick={!disabled && onClick}
          className={classNames(
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
  type: "button",
  className: null,
  disabled: false,
  size: null,
  otherProps: null,
  showClearOption: false,
};

Tag.propTypes = {
  icon: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
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
