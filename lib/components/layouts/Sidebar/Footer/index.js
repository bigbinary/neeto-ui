import React, { useState } from "react";

import AppSwitcher from "./AppSwitcher";
import NavIconWrapper from "../NavIconWrapper";
import ProfileSection from "../ProfileSection";
import ProfileSectionTooltip from "../ProfileSection/Tooltip";
import Tooltip from "../../../Tooltip";
import Typography from "../../../Typography";
import { Link } from "./Link";

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
      {footerLinks?.map(({ label, href, to, icon, ...otherProps }, index) => {
        const IconSVG = icon;

        return (
          <NavIconWrapper
            key={index}
            collapsed={collapsed}
            label={label}
            tooltipStyle={tooltipStyle}
            icon={<IconSVG />}
          >
            <Link key={index} to={to} href={href} {...otherProps}>
              {icon && (
                <div className="flex items-center justify-center neeto-ui-sidebar__link-icon">
                  <IconSVG />
                </div>
              )}
              {!collapsed && (
                <Typography
                  component="span"
                  style="body2"
                  weight="medium"
                  className="neeto-ui-sidebar__link-label"
                >
                  {label}
                </Typography>
              )}
            </Link>
          </NavIconWrapper>
        );
      })}
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
