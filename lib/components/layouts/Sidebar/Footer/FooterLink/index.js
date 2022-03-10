import React from "react";
import Link from "./Link";
import NavIconWrapper from "../../NavIconWrapper";
import Typography from "../../../../Typography";

const FooterLink = ({ props, collapsed, tooltipStyle }) => {
  const { label, href, to, icon, ...otherProps } = props;
  const IconSVG = icon;

  return (
    <NavIconWrapper
      collapsed={collapsed}
      label={label}
      tooltipStyle={tooltipStyle}
      icon={<IconSVG />}
    >
      <Link to={to} href={href} {...otherProps}>
        {icon && (
          <div className="flex items-center justify-center neeto-ui-sidebar__link-icon">
            <IconSVG />
          </div>
        )}
        {!collapsed && (
          <Typography
            component="span"
            style="body2"
            weight="medium"
            className="neeto-ui-sidebar__link-label"
          >
            {label}
          </Typography>
        )}
      </Link>
    </NavIconWrapper>
  );
};

export default FooterLink;
