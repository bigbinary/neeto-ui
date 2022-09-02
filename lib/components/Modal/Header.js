import React from "react";
import classnames from "classnames";

const Header = ({ children, className }) => (
  <div className={classnames("neeto-ui-modal__header", className)}>
    {children}
  </div>
);

export default Header;
