import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Body = ({ children, className, hasFooter = true }) => (
  <div
    className={classnames(
      "neeto-ui-pane__body neeto-ui-flex neeto-ui-flex-col neeto-ui-items-start neeto-ui-justify-start",
      {
        "neeto-ui-pane__body--has-footer": hasFooter,
        [className]: className,
      }
    )}
  >
    {children}
  </div>
);

Body.propTypes = {
  /**
   * To specify if the Pane has a footer.
   * @default true
   */
  hasFooter: PropTypes.bool,
  /**
   * To specify className to be applied to the Pane Body container.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Pane Body.
   */
  children: PropTypes.node,
};

export default Body;
