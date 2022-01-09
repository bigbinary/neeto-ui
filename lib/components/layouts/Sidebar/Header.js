import React from "react";

import NeetoLogo from "./NeetoLogo";
import Typography from "../../Typography";

const Header = ({ organizationInfo, collapsed }) => {
  const Logo = organizationInfo?.logo;
  const LogoSVG = Logo;

  return (
    <div className="flex items-center neeto-ui-sidebar__header">
      <div className="flex items-center justify-center flex-shrink-0 neeto-ui-sidebar__logo">
        {Logo ? LogoSVG : <NeetoLogo />}
      </div>
      {!collapsed && organizationInfo && (
        <div className="neeto-ui-sidebar__info">
          <Typography
            component="h2"
            style="h5"
            weight="semibold"
            className="m-0"
            title={organizationInfo.name}
          >
            {organizationInfo.name}
          </Typography>
          <Typography
            component="p"
            style="body3"
            weight="normal"
            className="m-0 neeto-ui-text-gray-500"
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
