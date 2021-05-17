import React from "react";
import classnames from "classnames";

const Scrollable = ({ children, className, size = "small" }) => {
  return (
    <div
      className={classnames([
        `nui-main-scrollable nh-main-scrollable--${size}`,
        className
      ])}
    >
      {children}
    </div>
  );
};

export default Scrollable;
