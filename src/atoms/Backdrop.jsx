import React, { forwardRef } from "react";

const Portal = ({ children, ...otherProps }, ref) => (
  <div
    data-cy="neeto-backdrop"
    data-testid="neeto-backdrop"
    ref={ref}
    {...otherProps}
  >
    {children}
  </div>
);

export default forwardRef(Portal);
