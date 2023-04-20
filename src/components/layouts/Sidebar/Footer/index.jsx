import React, { useState } from "react";

import Tooltip from "components/Tooltip";

import AppSwitcher from "./AppSwitcher";

import HelpSection from "../HelpSection";
import HelpSectionTooltip from "../HelpSection/Tooltip";
import ProfileSection from "../ProfileSection";
import ProfileSectionTooltip from "../ProfileSection/Tooltip";

const Footer = ({
  profileInfo,
  tooltipStyle,
  showAppSwitcher = false,
  onAppSwitcherToggle,
  helpLinks,
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="neeto-ui-sidebar__footer">
      {helpLinks && (
        <Tooltip
          interactive
          className="neeto-ui-help-popup-wrapper"
          content={<HelpSectionTooltip helpSectionProps={helpLinks} />}
          hideOnClick={false}
          position="right"
          theme="light"
        >
          <HelpSection />
        </Tooltip>
      )}
      {showAppSwitcher && (
        <AppSwitcher
          tooltipStyle={tooltipStyle}
          onAppSwitcherToggle={onAppSwitcherToggle}
        />
      )}
      {profileInfo && (
        <Tooltip
          interactive
          className="neeto-ui-profile-popup-wrapper"
          content={<ProfileSectionTooltip profileInfo={profileInfo} />}
          hideOnClick={false}
          position="right"
          theme="light"
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
