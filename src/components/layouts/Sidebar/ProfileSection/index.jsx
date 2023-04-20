/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

import Avatar from "components/Avatar";

const ProfileSection = forwardRef(({ profileInfo, onClick }, ref) => {
  const dataCy = profileInfo["data-cy"] || "profile-section";

  return (
    <button
      className="neeto-ui-w-full neeto-ui-text-left neeto-ui-sidebar__profile-wrapper"
      data-cy={dataCy}
      ref={ref}
      onClick={onClick}
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

export default ProfileSection;
