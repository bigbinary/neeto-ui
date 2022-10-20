import React from "react";
import classnames from "classnames";
import Typography from "../Typography";
import PropTypes from "prop-types";

const Header = ({ description = "", children, className }) => (
  <div className={classnames("neeto-ui-modal__header", className)}>
    {children}
    {description && (
      <div className="neeto-ui-modal__header-desc">
        <Typography style="body2" lineHeight="normal">
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
   * To specify the short description of the modal.
   */
  description: PropTypes.string,
  /**
   * To specify className to be applied to the modal header container.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the modal header.
   */
  children: PropTypes.node,
};

export default Header;
