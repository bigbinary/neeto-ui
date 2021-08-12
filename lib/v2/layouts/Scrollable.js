import React from "react";
import classnames from "classnames";

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

export default Scrollable;
