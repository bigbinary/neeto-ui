import React from "react";
import { AppSwitcher as AppSwitcherIcon } from "@bigbinary/neeto-icons";

import NavIconWrapper from "../NavIconWrapper";
import Typography from "../../../Typography";

const AppSwitcher = ({
  appName,
  collapsed,
  tooltipStyle,
  onAppSwitcherToggle,
}) => {
  return (
    <NavIconWrapper
      collapsed={collapsed}
      mainLabel="App Switcher"
      tooltipStyle={tooltipStyle}
      icon={<AppSwitcherIcon />}
    >
      <button
        onClick={onAppSwitcherToggle}
        className="flex items-center justify-start w-full bg-transparent shadow-none select-none neeto-ui-sidebar__link neeto-ui-sidebar__link--app-switcher neeto-ui-sidebar__link--button"
      >
        <span className="flex items-center justify-center neeto-ui-sidebar__link-icon">
          <AppSwitcherIcon size={24} />
        </span>

        {!collapsed && (
          <Typography
            component="span"
            style="body2"
            weight="medium"
            className="text-left neeto-ui-sidebar__link-label"
          >
            {appName}
          </Typography>
        )}
      </button>
    </NavIconWrapper>
  );
};

export default AppSwitcher;
