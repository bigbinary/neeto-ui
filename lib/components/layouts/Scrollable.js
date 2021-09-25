import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const sizes = { small: "small", large: "large", viewport: "viewport" };

const Scrollable = ({ children, className, size = "small" }) => {
  return (
    <div
      className={classnames([
        "nui-scrollable", {
          "nui-scrollable--small": size === sizes.small,
          "nui-scrollable--large": size === sizes.large,
          "nui-scrollable--viewport": size === sizes.viewport,
          [className]: className
        }
      ])}
    >
      {children}
    </div>
  );
};

Scrollable.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(sizes)),
  className: PropTypes.string
};

export default Scrollable;
