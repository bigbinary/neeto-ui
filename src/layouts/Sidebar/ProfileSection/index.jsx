/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

import Avatar from "components/Avatar";

const ProfileSection = forwardRef(({ profileInfo, onClick }, ref) => {
  const dataCy = profileInfo["data-cy"] || "profile-section";

  return (
    <button
      {...{ onClick, ref }}
      className="neeto-ui-w-full neeto-ui-text-left neeto-ui-sidebar__profile-wrapper"
      data-cy={dataCy}
    >
      <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-flex-shrink-0 neeto-ui-w-full neeto-ui-sidebar__profile">
        <Avatar
          className="neeto-ui-flex-shrink-0"
          size="large"
          user={profileInfo}
        />
      </span>
    </button>
  );
});

ProfileSection.displayName = "ProfileSection";

export default ProfileSection;
