import React from "react";
import classnames from "classnames";

const calloutStyles = {
  info: "bg-blue-50 text-blue-500",
  warning: "bg-yellow-50 text-yellow-500",
  danger: "bg-red-50 text-red-500"
};

const calloutIcons = {
  info: "ri-information-fill",
  warning: "ri-alert-fill",
  danger: "ri-spam-fill"
};

const Callout = ({ icon, showIcon, style = "info", children, className }) => {
  const baseClasses = calloutStyles[style];
  return (
    <div
      className={classnames(["rounded-md p-4 text-sm", baseClasses, className])}
    >
      <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-center flex-shrink-0 mr-3 text-lg">
            <i className={icon || calloutIcons[style]} />
          </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Callout;
