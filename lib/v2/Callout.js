import React from "react";
import classnames from "classnames";

const styles = {
  info: "info",
  warning: "warning",
  danger: "danger",
};
const Callout = ({
  icon = "",
  style = styles.info,
  className = "",
  children,
}) => {
  const Icon = icon;
  return (
    <div
      className={classnames("nui-callout", {
        "nui-callout--info": style === styles.info,
        "nui-callout--warning": style === styles.warning,
        "nui-callout--danger": style === styles.danger,
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
