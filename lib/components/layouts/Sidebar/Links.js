import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { pathOr } from "ramda";

import NavIconWrapper from "./NavIconWrapper";
import Typography from "../../Typography";

const Links = ({ navLinks, tooltipStyle, collapsed }) => {
  const location = useLocation();

  return (
    <div className="neeto-ui-sidebar__links">
      {navLinks.map(
        (
          {
            label: mainLabel,
            to: mainRoute,
            icon,
            description,
            items,
            ...otherProps
          },
          mainIndex
        ) => {
          const IconSVG = icon;
          const isActive = items?.length
            ? items.some(({ to }) => location.pathname.includes(to))
            : location.pathname.includes(mainRoute);
          const to = pathOr(mainRoute, [0, "to"], items);
          return (
            <React.Fragment key={mainIndex}>
              <NavIconWrapper
                tooltipStyle={tooltipStyle}
                icon={<IconSVG color="#68737D" />}
                description={description}
                collapsed={collapsed}
                mainLabel={mainLabel}
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
                      {mainLabel}
                    </Typography>
                  )}
                </NavLink>
              </NavIconWrapper>
              {items &&
                isActive &&
                !collapsed &&
                items.map(
                  (
                    { label: subLabel, to: subRoute, ...otherProps },
                    subIndex
                  ) => {
                    return (
                      <NavLink
                        key={subIndex}
                        to={subRoute}
                        className="flex items-center select-none neeto-ui-sidebar__sublink"
                        activeClassName="active"
                        {...otherProps}
                      >
                        {!collapsed && (
                          <Typography
                            component="span"
                            style="body2"
                            weight="medium"
                            className="flex-grow neeto-ui-sidebar__link-sub-label"
                          >
                            {subLabel}
                          </Typography>
                        )}
                      </NavLink>
                    );
                  }
                )}
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default Links;
