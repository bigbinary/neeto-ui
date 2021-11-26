import React from "react";
import classnames from "classnames";

const Container = React.forwardRef(({ isHeaderFixed, children }, ref) => (
  <div ref={ref} 
    className={classnames("neeto-ui-container", {
      "neeto-ui-container--header-fixed": isHeaderFixed,
    })}
  >
    {children}
  </div>
));

export default Container;
