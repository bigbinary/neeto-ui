import React from "react";

import { AppSwitcher as AppSwitcherIcon } from "neetoicons";

import NavIconWrapper from "../NavIconWrapper";

const AppSwitcher = ({ tooltipStyle, onAppSwitcherToggle }) => (
  <NavIconWrapper
    {...{ tooltipStyle }}
    icon={<AppSwitcherIcon />}
    label="Product switcher"
  >
    <button
      className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-start neeto-ui-w-full neeto-ui-select-none neeto-ui-sidebar__link neeto-ui-sidebar__link--app-switcher neeto-ui-sidebar__link--button shadow-none"
      data-cy="app-switcher-button"
      onClick={onAppSwitcherToggle}
    >
      <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-sidebar__link-icon">
        <AppSwitcherIcon size={24} />
      </span>
    </button>
  </NavIconWrapper>
);

export default AppSwitcher;
