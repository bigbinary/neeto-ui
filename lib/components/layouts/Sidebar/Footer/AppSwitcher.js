import React from "react";
import { AppSwitcher as AppSwitcherIcon } from "@bigbinary/neeto-icons";

import NavIconWrapper from "../NavIconWrapper";
import Typography from "../../../Typography";

const AppSwitcher = ({
  appName,
  collapsed,
  tooltipStyle,
  onAppSwitcherToggle,
}) => (
  <NavIconWrapper
    collapsed={collapsed}
    label="App Switcher"
    tooltipStyle={tooltipStyle}
    icon={<AppSwitcherIcon />}
  >
    <button
      onClick={onAppSwitcherToggle}
      data-cy="app-switcher-button"
      className="shadow-none neeto-ui-flex neeto-ui-items-center neeto-ui-justify-start neeto-ui-w-full neeto-ui-select-none neeto-ui-sidebar__link neeto-ui-sidebar__link--app-switcher neeto-ui-sidebar__link--button"
    >
      <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-sidebar__link-icon">
        <AppSwitcherIcon size={24} />
      </span>

      {!collapsed && (
        <Typography
          component="span"
          style="body2"
          weight="medium"
          className="neeto-ui-text-left neeto-ui-sidebar__link-label"
        >
          {appName}
        </Typography>
      )}
    </button>
  </NavIconWrapper>
);

export default AppSwitcher;
