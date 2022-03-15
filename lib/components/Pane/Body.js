import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

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
   * To specify if the pane has a footer.
   * @default true
   */
  hasFooter: PropTypes.bool,
  /**
   * To specify className to be applied to the pane body container.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the pane body.
   */
  children: PropTypes.node,
};

export default Body;
