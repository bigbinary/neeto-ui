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
   * **NEW**
   * <br>
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
