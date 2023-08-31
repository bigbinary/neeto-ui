import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Body = ({ children, className, dataCy }) => (
  <div
    className={classnames("neeto-ui-modal__body", className)}
    data-cy={dataCy ?? "modal-body"}
  >
    {children}
  </div>
);

Body.propTypes = {
  /**
   * To specify className to be applied to the Modal Body.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Modal Body.
   */
  children: PropTypes.node,
};

export default Body;
