import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Footer = ({ children, className }) => (
  <div
    className={classnames(
      "neeto-ui-pane__footer neeto-ui-shadow-m neeto-ui-flex neeto-ui-items-center",
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
