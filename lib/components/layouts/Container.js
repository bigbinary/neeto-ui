import React from "react";

const Container = React.forwardRef(({ children }, ref) => (
  <div ref={ref} className="neeto-ui-container">
    {children}
  </div>
));

export default Container;
