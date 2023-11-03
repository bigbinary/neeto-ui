import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Footer = ({ children, className }) => (
  <div
    className={classnames(
      "neeto-ui-pane__footer neeto-ui-flex neeto-ui-items-center",
      className
    )}
  >
    {children}
  </div>
);

Footer.propTypes = {
  /**
   * To specify className to be applied to the Pane Footer container.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Pane Footer.
   */
  children: PropTypes.node,
};

export default Footer;
