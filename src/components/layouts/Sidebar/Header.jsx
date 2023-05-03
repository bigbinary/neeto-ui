import React from "react";

import { Neeto } from "neetoicons/logos";

const Header = ({ organizationInfo }) => {
  const LogoSVG = organizationInfo?.logo;

  return (
    <div
      className="neeto-ui-flex neeto-ui-items-center neeto-ui-sidebar__header"
      data-cy="sidebar-info"
    >
      <div className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-flex-shrink-0 neeto-ui-sidebar__logo">
        {LogoSVG || <Neeto />}
      </div>
    </div>
  );
};

export default Header;
