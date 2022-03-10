import React, { forwardRef, useState } from "react";

import classNames from "classnames";
import { NavLink } from "react-router-dom";

import AppSwitcher from "./AppSwitcher";
import NavIconWrapper from "../NavIconWrapper";
import ProfileSection from "../ProfileSection";
import ProfileSectionTooltip from "../ProfileSection/Tooltip";
import Tooltip from "../../../Tooltip";
import Typography from "../../../Typography";

const LINK_CLASS_NAMES =
  "flex items-center no-underline select-none neeto-ui-sidebar__link";

const Link = forwardRef(({ children, to, href, ...otherProps }, ref) => {
  const isActive = location.pathname.includes(to);

  return href ? (
    <a
      className={classNames(LINK_CLASS_NAMES, { active: isActive })}
      href={href}
      {...otherProps}
    >
      {children}
    </a>
  ) : (
    <NavLink
      className={LINK_CLASS_NAMES}
      innerRef={ref}
      to={to}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});

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
