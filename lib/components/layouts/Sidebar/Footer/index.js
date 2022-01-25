import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import ChangeLog from "./ChangeLog";
import AppSwitcher from "./AppSwitcher";
import NavIconWrapper from "../NavIconWrapper";
import ProfileSection from "../ProfileSection";
import ProfileSectionTooltip from "../ProfileSectionTooltip";
import Tooltip from "../../../Tooltip";
import Typography from "../../../Typography";

const Footer = ({
  appName,
  footerLinks = [],
  profileInfo,
  tooltipStyle,
  changelogProps,
  collapsed,
  showChangelog = false,
  showAppSwitcher = false,
  onAppSwitcherToggle,
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="neeto-ui-sidebar__footer">
      {footerLinks?.map(({ label, href, to, icon, ...otherProps }, index) => {
        const IconSVG = icon;
        const isActive = location.pathname.includes(to);
        const Link = href ? "a" : NavLink;
        return (
          <NavIconWrapper
            key={index}
            collapsed={collapsed}
            mainLabel={label}
            tooltipStyle={tooltipStyle}
            icon={<IconSVG />}
          >
            <Link
              key={index}
              to={to}
              href={href}
              className="flex items-center no-underline select-none neeto-ui-sidebar__link"
              activeClassName="active"
              isActive={() => isActive}
              {...otherProps}
            >
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
      {showChangelog && (
        <ChangeLog
          collapsed={collapsed}
          tooltipStyle={tooltipStyle}
          changelogProps={changelogProps}
        />
      )}
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
