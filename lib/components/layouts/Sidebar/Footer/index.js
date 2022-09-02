import React, { useState } from "react";

import AppSwitcher from "./AppSwitcher";
import ProfileSection from "../ProfileSection";
import ProfileSectionTooltip from "../ProfileSection/Tooltip";
import Tooltip from "../../../Tooltip";
import FooterLink from "./FooterLink";

const Footer = ({
  appName,
  footerLinks = [],
  profileInfo,
  tooltipStyle,
  collapsed,
  showAppSwitcher = false,
  onAppSwitcherToggle,
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="neeto-ui-sidebar__footer">
      {footerLinks?.map((props, index) => (
        <FooterLink
          props={props}
          key={index}
          tooltipStyle={tooltipStyle}
          collapsed={collapsed}
        />
      ))}
      {showAppSwitcher && (
        <AppSwitcher
          appName={appName}
          onAppSwitcherToggle={onAppSwitcherToggle}
          tooltipStyle={tooltipStyle}
          collapsed={collapsed}
        />
      )}
      {profileInfo && (
        <Tooltip
          position="right"
          className="sidebar-featured-tooltip__content"
          theme="light"
          content={<ProfileSectionTooltip profileInfo={profileInfo} />}
          interactive
          hideOnClick={false}
        >
          <ProfileSection
            collapsed={collapsed}
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
