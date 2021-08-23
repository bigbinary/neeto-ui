import React from "react";
import classnames from "classnames";

const Label = ({
  children,
  className = "",
  required = false,
  ...otherProps
}) => {
  return (
    <label className={classnames("nui-label", className)} {...otherProps}>
      {children}
      {required && <span aria-hidden>*</span>}
    </label>
  );
};

export default Label;
