import React from "react";
import classnames from "classnames";
import Typography from "../Typography";

const Header = ({ description, children, className }) => (
  <div className={classnames("neeto-ui-modal__header", className)}>
    {children}
    {
      description && (
        <div className="neeto-ui-modal__header-desc">
          <Typography style="body2" lineHeight="normal">
            {description}
          </Typography>
        </div>
      )
    }
  </div>
);

export default Header;
