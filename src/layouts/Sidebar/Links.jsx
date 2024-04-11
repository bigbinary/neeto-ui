import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import NavIconWrapper from "./NavIconWrapper";

const Links = ({ navLinks = [], tooltipStyle }) => {
  const location = useLocation();

  return (
    <div className="neeto-ui-sidebar__links">
      {navLinks.map(
        ({ label, to, icon, description, ...otherProps }, mainIndex) => {
          const IconSVG = icon;
          const url = new URL(to, window.location.href);
          const isActive = location.pathname.startsWith(url.pathname);

          return (
            <NavIconWrapper
              {...{ description, label, tooltipStyle }}
              icon={<IconSVG color="#68737D" />}
              key={mainIndex}
            >
              <NavLink
                {...{ to }}
                activeClassName="active"
                className="neeto-ui-flex neeto-ui-items-center neeto-ui-no-underline neeto-ui-select-none neeto-ui-sidebar__link"
                isActive={() => isActive}
                {...otherProps}
              >
                {icon && (
                  <div
                    className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-sidebar__link-icon"
                    data-testid={label}
                  >
                    <IconSVG />
                  </div>
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
