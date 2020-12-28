import React from "react";
import classnames from "classnames";

const Badge = ({
  children,
  className="",
  color,
  size = "small",
  type = "rounded",
  onClose = null,
  ...otherProps
}) => {
  return (
    <div
      className={classnames(
        [
          "nui-badge inline-flex items-center font-medium",
          `bg-${color}-100`,
          `text-${color}-800`,
          className
        ],
        {
          "text-xs px-2.5 py-0.5 leading-4": size === "small",
          "text-sm px-3 py-1 leading-5": size === "large",
          "rounded-full": type === "rounded",
          rounded: type === "squared"
        }
      )}
      {...otherProps}
    >
      {children}
      {onClose && (
        <div className="flex ml-1 -mr-1 cursor-pointer" onClick={onClose}>
          <i
            className={classnames(
              [
                `text-${color}-600 hover:text-${color}-800`,
                "transition-all ease-in-out duration-300",
                "ri-close-line transform scale-125"
              ],
              {
                "text-xs": size === "small",
                "text-sm": size === "large"
              }
            )}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Badge;