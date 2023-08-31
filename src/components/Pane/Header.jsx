import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Header = ({ children, className }) => (
  <div
    className={classnames("neeto-ui-pane__header", className)}
    data-cy="pane-header"
  >
    {children}
  </div>
);

Header.propTypes = {
  /**
   * To specify className to be applied to the Pane Header container.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Pane Header.
   */
  children: PropTypes.node,
};

export default Header;
