import React, { useState } from "react";

import Tooltip from "components/Tooltip";

import AppSwitcher from "./AppSwitcher";

import ProfileSection from "../ProfileSection";
import ProfileSectionTooltip from "../ProfileSection/Tooltip";

const Footer = ({
  profileInfo,
  tooltipStyle,
  showAppSwitcher = false,
  onAppSwitcherToggle,
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="neeto-ui-sidebar__footer">
      {showAppSwitcher && (
        <AppSwitcher
          onAppSwitcherToggle={onAppSwitcherToggle}
          tooltipStyle={tooltipStyle}
        />
      )}
      {profileInfo && (
        <Tooltip
          position="right"
          className="neeto-ui-profile-popup-wrapper"
          theme="light"
          content={<ProfileSectionTooltip profileInfo={profileInfo} />}
          interactive
          hideOnClick={false}
        >
          <ProfileSection
            profileInfo={profileInfo}
            onClick={() => {
              setIsProfileDropdownOpen(!isProfileDropdownOpen);
            }}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default Footer;
