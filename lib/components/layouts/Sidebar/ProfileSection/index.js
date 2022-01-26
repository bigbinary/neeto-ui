import React, { forwardRef } from "react";
import { Down } from "@bigbinary/neeto-icons";

import Typography from "../../../Typography";
import Avatar from "../../../Avatar";

const ProfileSection = forwardRef(
  ({ collapsed, profileInfo, onClick }, ref) => {
    const truncate = (str, length) => {
      return str && str.length > length
        ? str.substring(0, length - 3) + "..."
        : str;
    };

    const dataCy = profileInfo["data-cy"] || "profile-section";

    return (
      <button
        ref={ref}
        className="w-full text-left neeto-ui-sidebar__profile-wrapper"
        onClick={onClick}
        data-cy={dataCy}
      >
        <span className="flex items-center flex-shrink-0 w-full neeto-ui-sidebar__profile">
          <Avatar user={profileInfo} size="large" className="flex-shrink-0" />
          {!collapsed && (
            <span className="neeto-ui-sidebar__profile-content">
              <Typography
                component="h2"
                style="h5"
                weight="semibold"
                className="m-0"
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
