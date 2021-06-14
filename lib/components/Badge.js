import React from "react";
import classnames from "classnames";

const Badge = ({
  children,
  className = "",
  color,
  size = "small",
  type = "rounded",
  onClose = null,
  ...otherProps
}) => {
  return (
    <div
      className={classnames(
        ["nui-badge", `bg-${color}-100`, `text-${color}-800`, className],
        {
          "nui-badge--large": size === "large",
          "nui-badge--squared": type === "squared",
        }
      )}
      {...otherProps}
    >
      {children}
      {onClose && (
        <div
          className="flex flex-row items-center justify-center ml-1 -mr-1 cursor-pointer"
          onClick={onClose}
        >
          <i
            className={`ri-close-line text-${color}-700 hover:text-${color}-800`}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Badge;
