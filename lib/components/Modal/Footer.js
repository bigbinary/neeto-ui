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
   * To specify className to be applied to the modal footer.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the modal footer.
   */
  children: PropTypes.node,
};

export default Footer;
