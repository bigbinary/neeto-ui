import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Container = React.forwardRef(({ isHeaderFixed = false, children }, ref) => (
  <div ref={ref}
    className={classnames("neeto-ui-container", {
      "neeto-ui-container--header-fixed": isHeaderFixed,
    })}
  >
    {children}
  </div>
));

Container.propTypes = {
  /**
   * If the Header component inside the Container is fixed, this prop should be set to `true`.
   */
  isHeaderFixed: PropTypes.bool,
};

export default Container;
