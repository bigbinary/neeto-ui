import React, { forwardRef } from "react";
import { Down } from "@bigbinary/neeto-icons";

import Typography from "../../../Typography";
import Avatar from "../../../Avatar";

import { truncate } from "./utils";

const ProfileSection = forwardRef(
  ({ collapsed, profileInfo, onClick }, ref) => {
    const dataCy = profileInfo["data-cy"] || "profile-section";

    return (
      <button
        ref={ref}
        className="neeto-ui-w-full neeto-ui-text-left neeto-ui-sidebar__profile-wrapper"
        onClick={onClick}
        data-cy={dataCy}
      >
        <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-flex-shrink-0 neeto-ui-w-full neeto-ui-sidebar__profile">
          <Avatar user={profileInfo} size="large" className="neeto-ui-flex-shrink-0" />
          {!collapsed && (
            <span className="neeto-ui-sidebar__profile-content">
              <Typography
                component="h2"
                style="h5"
                weight="semibold"
                className="neeto-ui-m-0"
                title={profileInfo.name}
              >
                {truncate(profileInfo.name, 18)}
              </Typography>
              <Down
                size={16}
                className="neeto-ui-sidebar__profile-drop-icon"
                color="#68737D"
              />
            </span>
          )}
        </span>
      </button>
    );
  }
);

export default ProfileSection;
