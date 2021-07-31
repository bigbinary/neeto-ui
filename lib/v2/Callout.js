import React from "react";
import classnames from "classnames";

const Callout = ({ icon = "", style = "info", className = "", children }) => {
  const Icon = icon;
  return (
    <div
      className={classnames("nui-callout", {
        "nui-callout--info": style === "info",
        "nui-callout--warning": style === "warning",
        "nui-callout--danger": style === "danger",
        [className]: className,
      })}
    >
      {icon && (
        <div className="nui-callout__icon">
          <Icon />
        </div>
      )}
      {children}
    </div>
  );
};

export default Callout;
