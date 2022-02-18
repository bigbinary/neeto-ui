import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import NavIconWrapper from "./NavIconWrapper";
import Typography from "../../Typography";

const Links = ({ navLinks, tooltipStyle, collapsed }) => {
  const location = useLocation();

  return (
    <div className="neeto-ui-sidebar__links">
      {navLinks.map(
        ({ label, to, icon, description, ...otherProps }, mainIndex) => {
          const IconSVG = icon;
          const url = new URL(to, window.location.href);
          const isActive = location.pathname.includes(url.pathname);
          return (
            <NavIconWrapper
              key={mainIndex}
              tooltipStyle={tooltipStyle}
              icon={<IconSVG color="#68737D" />}
              description={description}
              collapsed={collapsed}
              label={label}
            >
              <NavLink
                to={to}
                className="flex items-center no-underline select-none neeto-ui-sidebar__link"
                activeClassName="active"
                isActive={() => isActive}
                {...otherProps}
              >
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
              </NavLink>
            </NavIconWrapper>
          );
        }
      )}
    </div>
  );
};

export default Links;
