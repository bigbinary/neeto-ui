import React, { forwardRef } from "react";

import Avatar from "components/Avatar";

const ProfileSection = forwardRef(({ profileInfo, onClick }, ref) => {
  const dataCy = profileInfo["data-cy"] || "profile-section";

  return (
    <button
      ref={ref}
      className="neeto-ui-w-full neeto-ui-text-left neeto-ui-sidebar__profile-wrapper"
      onClick={onClick}
      data-cy={dataCy}
    >
      <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-flex-shrink-0 neeto-ui-w-full neeto-ui-sidebar__profile">
        <Avatar
          user={profileInfo}
          size="large"
          className="neeto-ui-flex-shrink-0"
        />
      </span>
    </button>
  );
});

export default ProfileSection;
