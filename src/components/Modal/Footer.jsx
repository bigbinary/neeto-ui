import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Footer = ({ children, className }) => (
  <div className={classnames("neeto-ui-modal__footer", className)}>
    {children}
  </div>
);

Footer.propTypes = {
  /**
   * To specify className to be applied to the Modal Footer.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Modal Footer.
   */
  children: PropTypes.node,
};

export default Footer;
