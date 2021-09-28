import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

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

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default Label;
