import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "../Typography";

const Header = ({ description = "", children, className, dataCy }) => (
  <div
    className={classnames("neeto-ui-modal__header", className)}
    data-cy={dataCy ?? "modal-header"}
  >
    {children}
    {description && (
      <div className="neeto-ui-modal__header-desc" data-cy="modal-header-desc">
        <Typography lineHeight="normal" style="body2">
          {description}
        </Typography>
      </div>
    )}
  </div>
);

Header.propTypes = {
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-success mb-2">
   * New
   * </div>
   * To specify the short description of the Modal.
   */
  description: PropTypes.string,
  /**
   * To specify className to be applied to the Modal Header container.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Modal Header.
   */
  children: PropTypes.node,
};

export default Header;
