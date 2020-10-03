import React from "react";
import classnames from "classnames";

const Badge = ({
  children,
  className,
  color,
  size = "small",
  type = "rounded"
}) => {
  return (
    <div
      className={classnames(
        [
          "inline-flex items-center font-medium leading-4",
          `bg-${color}-100`,
          `text-${color}-800`,
          className
        ],
        {
          "text-sm px-2.5 py-0.5": size === "small",
          "text-xl px-4 py-2": size === "large",
          "rounded-full": type === "rounded",
          rounded: type === "squared"
        }
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
