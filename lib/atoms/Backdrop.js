import React, { forwardRef } from "react";

const Portal = ({ children, ...otherProps }, ref) => {
  return (
    <div
      ref={ref}
      data-testid="neeto-backdrop"
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default forwardRef(Portal);
