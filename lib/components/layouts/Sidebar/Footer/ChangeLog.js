import React from "react";
import { Rating } from "@bigbinary/neeto-icons";

import NavIconWrapper from "../NavIconWrapper";
import Typography from "../../../Typography";

const ChangeLog = ({ collapsed, tooltipStyle, changelogProps }) => {
  const { icon: ChangelogIcon, ...otherChangelogProps } = changelogProps;
  const ChangelogIconSVG = ChangelogIcon || Rating;

  return (
    <NavIconWrapper
      collapsed={collapsed}
      mainLabel="What's New"
      tooltipStyle={tooltipStyle}
      icon={<ChangelogIconSVG />}
    >
      <button
        className="flex items-center w-full text-left no-underline shadow-none select-none neeto-ui-sidebar__link neeto-ui-sidebar__link--change-log"
        {...otherChangelogProps}
      >
        <div className="flex items-center justify-center neeto-ui-sidebar__link-icon">
          <ChangelogIconSVG />
        </div>

        {!collapsed && (
          <Typography
            component="span"
            style="body2"
            weight="medium"
            className="neeto-ui-sidebar__link-label"
          >
            What's New
          </Typography>
        )}
      </button>
    </NavIconWrapper>
  );
};

export default ChangeLog;
