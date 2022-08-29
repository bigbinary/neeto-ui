import React from "react";

import NeetoLogo from "./NeetoLogo";

const Header = ({ organizationInfo }) => {
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
    </div>
  );
};

export default Header;
