import React from "react";

import NeetoLogo from "./NeetoLogo";
import Typography from "../../Typography";

const Header = ({ organizationInfo, collapsed }) => {
  const Logo = organizationInfo?.logo;
  const LogoSVG = Logo;

  return (
    <div
      className="neeto-ui-flex neeto-ui-items-center neeto-ui-sidebar__header"
      data-cy="sidebar-info"
    >
      <div className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-flex-shrink-0 neeto-ui-sidebar__logo">
        {Logo ? LogoSVG : <NeetoLogo />}
      </div>
      {!collapsed && organizationInfo && (
        <div className="neeto-ui-sidebar__info">
          <Typography
            component="h2"
            style="h5"
            weight="semibold"
            data-cy="sidebar-info-title"
            title={organizationInfo.name}
          >
            {organizationInfo.name}
          </Typography>
          <Typography
            component="p"
            style="body3"
            weight="normal"
            className="neeto-ui-text-gray-500"
            data-cy="sidebar-info-subtitle"
            title={organizationInfo.subdomain}
          >
            {organizationInfo.subdomain}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Header;
