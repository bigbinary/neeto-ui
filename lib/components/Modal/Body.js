import React from "react";
import classnames from "classnames";

const Body = ({ children, className }) => (
  <div className={classnames("neeto-ui-modal__body", className)}>
    {children}
  </div>
);

export default Body;
