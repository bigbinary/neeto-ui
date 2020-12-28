import React from "react";
import classnames from "classnames";

const Scrollable = ({ children, className }) => {
  return (
    <div className={classnames(["nui-main-scrollable", className])}>
      {children}
    </div>
  );
};

export default Scrollable;
