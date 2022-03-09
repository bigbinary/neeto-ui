import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Footer = ({ children, className }) => (
  <div
    className={classnames(
      "neeto-ui-pane__footer neeto-ui-shadow-m flex items-center",
      className
    )}
  >
    {children}
  </div>
);

Footer.propTypes = {
  /**
   * To specify className to be applied to the pane footer container.
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Footer;
