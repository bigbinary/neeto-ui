import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";


const Header = ({ children, className }) => (
  <div className={classnames("neeto-ui-pane__header", className)}>
    {children}
  </div>
);

Header.propTypes = {
  /**
   * To specify className to be applied to the pane header container.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the pane header.
   */
  children: PropTypes.node,
};

export default Header;
