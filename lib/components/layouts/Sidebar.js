import React, { useState, useEffect, forwardRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Rating,
  LeftArrow,
  RightArrow,
  Down,
  AppSwitcher,
} from "@bigbinary/neeto-icons";
import classnames from "classnames";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Avatar from "../Avatar";
import Tooltip from "../Tooltip";
import Typography from "../Typography";
import { pathOr } from "ramda";

const TOOLTIP_STYLES = {
  default: "default",
  featured: "featured",
};

export const NeetoLogo = () => (
  <svg
    width="24"
    height="30"
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.2736 11.6825C23.2736 12.7582 23.2736 13.8292 23.2736 14.9097C23.2736 15.9901 23.2736 17.0612 23.3012 18.1369C23.3513 19.0326 23.1835 19.9271 22.813 20.7404C22.4295 21.5232 21.7718 22.13 20.9708 22.4399C20.075 22.8095 19.2621 22.953 18.4538 22.7812C17.6455 22.6094 16.8418 22.1245 15.9553 21.2394C14.3863 19.6623 12.8219 18.0765 11.2621 16.4821C9.70237 14.8877 8.1449 13.2973 6.58974 11.7107C6.34588 11.4268 6.07167 11.1718 5.77224 10.9504C5.60974 10.8442 5.42434 10.7801 5.23213 10.7637C5.03992 10.7473 4.84669 10.7791 4.6692 10.8562C4.46956 10.9198 4.28806 11.0321 4.1404 11.1834C3.99275 11.3348 3.88339 11.5206 3.82177 11.7248C3.72145 12.1283 3.68032 12.5448 3.69972 12.9606C3.69972 14.7182 3.70509 16.4782 3.71584 18.2405C3.71584 20.0012 3.71584 21.7714 3.6859 23.5227C3.66773 23.9637 3.74233 24.4036 3.90467 24.8126C4.06056 25.1923 4.3428 25.5033 4.70144 25.6907C4.88357 25.7895 5.08563 25.844 5.29178 25.8497C5.49793 25.8554 5.70258 25.8123 5.88969 25.7236C6.27623 25.5419 6.62673 25.2889 6.92365 24.9774C7.63752 24.2681 8.34755 23.5541 9.05374 22.8353C9.75994 22.1166 10.4546 21.39 11.1378 20.6556C11.2702 20.4971 11.4319 20.3668 11.6137 20.2723C11.7955 20.1778 11.9937 20.1208 12.1971 20.1048C12.5808 20.1066 12.9543 20.2309 13.2656 20.4602C13.5603 20.658 13.6962 21.084 13.687 21.5336C13.6889 21.9834 13.5291 22.4181 13.2379 22.7553C12.3905 23.631 11.55 24.5184 10.7049 25.3941C9.85972 26.2697 8.99387 27.136 8.10499 27.9669C7.45222 28.6004 6.61409 28.9973 5.71928 29.0968C4.81951 29.1678 3.91699 29.0008 3.09869 28.6119C2.34978 28.3105 1.71255 27.7761 1.27717 27.0842C0.869348 26.3642 0.671209 25.5402 0.70607 24.7091C0.726795 22.5387 0.724493 20.3684 0.72219 18.1958C0.719887 16.0231 0.72219 13.8551 0.72219 11.6825C0.704055 10.8192 0.879729 9.96324 1.23572 9.18024C1.61178 8.40876 2.26285 7.814 3.05493 7.51837C3.87619 7.17299 4.7785 7.08133 5.6502 7.25473C6.54851 7.47018 7.36281 7.95649 7.98754 8.65061C9.56727 10.2984 11.1608 11.9351 12.7682 13.5609C14.3755 15.1867 15.9783 16.8156 17.5764 18.4476C17.7943 18.6911 18.0447 18.9019 18.3202 19.0738C18.4586 19.1553 18.6129 19.2048 18.7721 19.2186C18.9313 19.2325 19.0915 19.2103 19.2414 19.1538C19.5304 19.0654 19.7926 18.9034 20.0036 18.683C20.218 18.4201 20.3252 18.083 20.303 17.7415C20.2799 15.7571 20.2799 13.7822 20.2799 11.8072C20.2799 9.83228 20.2799 7.85498 20.2799 5.88004C20.2945 5.58169 20.2482 5.2835 20.1441 5.00438C20.0783 4.86278 19.9859 4.73584 19.8721 4.63081C19.7583 4.52579 19.6254 4.44476 19.4809 4.39236C19.2001 4.25656 18.8934 4.18583 18.5828 4.18522C18.263 4.20798 17.9584 4.33318 17.7123 4.54302C16.8424 5.24139 16.0235 6.00373 15.2621 6.82397C14.4907 7.62901 13.7377 8.45523 12.9317 9.22732C12.6318 9.55796 12.2335 9.77808 11.7987 9.85346C11.6074 9.86436 11.4162 9.83036 11.2398 9.75406C11.0634 9.67776 10.9064 9.56119 10.7808 9.41328C10.6324 9.26574 10.5162 9.08771 10.44 8.89092C10.3638 8.69413 10.3293 8.48306 10.3387 8.27163C10.369 7.8159 10.5654 7.38835 10.8891 7.07348C11.7043 6.24176 12.5179 5.41004 13.3301 4.57832C14.1422 3.7466 14.9597 2.92116 15.7825 2.102C16.2981 1.61189 16.9191 1.25256 17.5956 1.05302C18.272 0.853477 18.9849 0.819312 19.6766 0.953284C20.3709 1.05328 21.0326 1.31833 21.6085 1.72714C22.1844 2.13595 22.6585 2.67713 22.9926 3.30721C23.0951 3.51003 23.1725 3.72511 23.2229 3.94747C23.272 4.17227 23.2952 4.40216 23.292 4.63246C23.2828 5.80472 23.2828 6.98168 23.292 8.16335C23.3012 9.34502 23.2951 10.5181 23.2736 11.6825Z"
      fill="white"
    />
  </svg>
);

export const FeaturedTooltip = ({ icon, mainLabel, description }) => {
  return (
    <div className="flex flex-col p-3 sidebar-featured-tooltip w-36">
      <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg sidebar-featured-tooltip__icon-wrapp bg-gray-50">
        {icon}
      </div>
      <Typography
        style="h5"
        weight="semibold"
        className="text-center neeto-ui-text-black"
      >
        {mainLabel}
      </Typography>
      {description && (
        <Typography
          style="body3"
          className="text-center neeto-ui-text-gray-600"
        >
          {description}
        </Typography>
      )}
    </div>
  );
};

export const ProfileSectionTooltip = ({ profileInfo }) => {
  const { name, email, topLinks, bottomLinks } = profileInfo;
  const truncate = (str, length) => {
    return str && str.length > length
      ? str.substring(0, length - 3) + "..."
      : str;
  };
  return (
    <div className="flex flex-col p-6">
      <div className="relative mb-5 flex items-center">
        <div className="top-0 left-0">
          <Avatar user={profileInfo} size="large" />
        </div>
        <div className="flex flex-col flex-grow pl-3">
          <Typography
            component="h2"
            style="h5"
            weight="semibold"
            lineHeight="tight"
            className="m-0"
            title={name}
          >
            {truncate(name, 18)}
          </Typography>
          {email && (
            <Typography
              style="body2"
              className="w-full truncate neeto-ui-text-gray-600"
              lineHeight="tight"
            >
              {email}
            </Typography>
          )}
        </div>
      </div>
      {topLinks && (
        <ul className="flex flex-col gap-2 py-2 list-none border-t neeto-ui-border-gray-300">
          {topLinks?.map(
            ({ onClick, label, icon = null, ...otherProps }, idx) => {
              const IconSVG = icon;
              return (
                <li
                  key={idx}
                  onClick={onClick}
                  {...otherProps}
                  className="p-2 transition-colors rounded-sm cursor-pointer hover:neeto-ui-bg-gray-200"
                >
                  <Typography
                    style="h5"
                    weight="semibold"
                    className="flex items-center gap-2 neeto-ui-text-gray-800"
                  >
                    {icon && <IconSVG />}
                    {label}
                  </Typography>
                </li>
              );
            }
          )}
        </ul>
      )}
      {bottomLinks && (
        <ul className="flex flex-col gap-2 pt-2 list-none border-t neeto-ui-border-gray-300">
          {bottomLinks?.map(
            ({ onClick, label, icon, ...otherProps }, idx) => {
              const IconSVG = icon;
              return (
                <li
                  key={idx}
                  onClick={onClick}
                  {...otherProps}
                  className="p-2 transition-colors rounded-sm cursor-pointer hover:neeto-ui-bg-gray-200"
                >
                  <Typography
                    style="h5"
                    weight="semibold"
                    className="flex items-center gap-2 neeto-ui-text-gray-800"
                  >
                    {icon && <IconSVG />}
                    {label}
                  </Typography>
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};

export const ProfileSection = forwardRef(
  ({ collapsed, profileInfo, onClick }, ref) => {
    const truncate = (str, length) => {
      return str && str.length > length
        ? str.substring(0, length - 3) + "..."
        : str;
    };

    const dataCy = profileInfo["data-cy"] || "profile-section";

    return (
      <div
        ref={ref}
        className="neeto-ui-sidebar__profile-wrapper"
        onClick={onClick}
        data-cy={dataCy}
      >
        <div className="flex items-center flex-shrink-0 neeto-ui-sidebar__profile">
          <Avatar user={profileInfo} size="large" className="flex-shrink-0" />
          {!collapsed && (
            <div className="neeto-ui-sidebar__profile-content">
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
            </div>
          )}
        </div>
      </div>
    );
  }
);

export const NavIconWrapper = ({
  tooltipStyle,
  description,
  icon,
  collapsed,
  mainLabel,
  children,
}) => {
  const tooltipContent =
    tooltipStyle === TOOLTIP_STYLES.featured ? (
      <FeaturedTooltip
        description={description}
        icon={icon}
        mainLabel={mainLabel}
      />
    ) : (
      mainLabel
    );
  const content = collapsed ? (
    <Tooltip
      position="right"
      distance="20rem"
      content={tooltipContent}
      theme={tooltipStyle === TOOLTIP_STYLES.featured ? "light" : "dark"}
      className={classnames({
        "sidebar-featured-tooltip__content":
          tooltipStyle === TOOLTIP_STYLES.featured,
      })}
    >
      {children}
    </Tooltip>
  ) : (
    children
  );
  return content;
};

const Sidebar = ({
  organizationInfo,
  navLinks,
  tooltipStyle = TOOLTIP_STYLES.featured,
  footerLinks = [],
  profileInfo,
  isCollapsed = false,
  collapsible = true,
  onCollapse,
  showChangelog = false,
  changelogProps = {},
  showAppSwitcher = false,
  onAppSwitcherToggle = () => {},
  appName,
}) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const Logo = organizationInfo?.logo;
  const LogoSVG = Logo;
  const toggleCollapse =
    onCollapse || (() => setCollapsed((collapsed) => !collapsed));

  const { icon: ChangelogIcon, ...otherChangelogProps } = changelogProps;
  const ChangelogIconSVG = ChangelogIcon || Rating;

  useEffect(() => {
    setCollapsed(isCollapsed);
  }, [isCollapsed]);

  const variants = {
    expanded: { maxWidth: 320 },
    collapsed: { maxWidth: 64 },
  };

  return (
    <motion.div
      animate={collapsed ? "collapsed" : "expanded"}
      variants={variants}
      transition={{ duration: 0.3 }}
      className={classnames(
        "neeto-ui-sidebar flex flex-col flex-shrink-0 overflow-y-auto overflow-x-hidden",
        {
          "neeto-ui-sidebar--collapsed": collapsed,
        }
      )}
    >
      <div className="flex items-center neeto-ui-sidebar__header">
        <div className="flex items-center justify-center flex-shrink-0 neeto-ui-sidebar__logo">
          {Logo ? LogoSVG : <NeetoLogo />}
        </div>
        {!collapsed && organizationInfo && (
          <div className="neeto-ui-sidebar__info">
            <Typography
              component="h2"
              style="h5"
              weight="semibold"
              className="m-0"
              title={organizationInfo.name}
            >
              {organizationInfo.name}
            </Typography>
            <Typography
              component="p"
              style="body3"
              weight="normal"
              className="m-0 neeto-ui-text-gray-500"
              title={organizationInfo.subdomain}
            >
              {organizationInfo.subdomain}
            </Typography>
          </div>
        )}
      </div>

      <div className="neeto-ui-sidebar__links">
        {navLinks.map(
          (
            {
              label: mainLabel,
              to: mainRoute,
              icon,
              description,
              items,
              ...otherProps
            },
            mainIndex
          ) => {
            const IconSVG = icon;
            const isActive = items?.length
              ? items.some(({ to }) => location.pathname.includes(to))
              : location.pathname.includes(mainRoute);
            const shouldOpenSidebar = items && collapsed;
            const to =
              shouldOpenSidebar && isActive
                ? location.pathname
                : pathOr(mainRoute, [0, "to"], items);
            return (
              <React.Fragment key={mainIndex}>
                <NavLink
                  to={to}
                  className="flex items-center no-underline select-none neeto-ui-sidebar__link"
                  activeClassName="active"
                  isActive={() => isActive}
                  onClick={() => shouldOpenSidebar && toggleCollapse()}
                  {...otherProps}
                >
                  {icon && (
                    <NavIconWrapper
                      tooltipStyle={tooltipStyle}
                      icon={<IconSVG color="#68737D" />}
                      description={description}
                      collapsed={collapsed}
                      mainLabel={mainLabel}
                    >
                      <div className="flex items-center justify-center neeto-ui-sidebar__link-icon">
                        <IconSVG />
                      </div>
                    </NavIconWrapper>
                  )}
                  {!collapsed && (
                    <Typography
                      component="span"
                      style="body2"
                      weight="medium"
                      className="neeto-ui-sidebar__link-label"
                    >
                      {mainLabel}
                    </Typography>
                  )}
                </NavLink>
                {items && isActive && !collapsed && (
                  <>
                    {items.map(
                      (
                        { label: subLabel, to: subRoute, ...otherProps },
                        subIndex
                      ) => {
                        return (
                          <NavLink
                            key={subIndex}
                            to={subRoute}
                            className="flex items-center select-none neeto-ui-sidebar__sublink"
                            activeClassName="active"
                            {...otherProps}
                          >
                            {!collapsed && (
                              <Typography
                                component="span"
                                style="body2"
                                weight="medium"
                                className="flex-grow neeto-ui-sidebar__link-sub-label"
                              >
                                {subLabel}
                              </Typography>
                            )}
                          </NavLink>
                        );
                      }
                    )}
                  </>
                )}
              </React.Fragment>
            );
          }
        )}
      </div>

      <div className="neeto-ui-sidebar__footer">
        {footerLinks?.map(({ label, href, to, icon, ...otherProps }, index) => {
          const IconSVG = icon;
          const isActive = location.pathname.includes(to);
          const Link = href ? "a" : NavLink;
          return (
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
                <NavIconWrapper
                  collapsed={collapsed}
                  mainLabel={label}
                  tooltipStyle={tooltipStyle}
                  icon={<IconSVG />}
                >
                  <div className="flex items-center justify-center neeto-ui-sidebar__link-icon">
                    <IconSVG />
                  </div>
                </NavIconWrapper>
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
          );
        })}

        {showChangelog && (
          <div
            className="flex items-center no-underline select-none neeto-ui-sidebar__link"
            {...otherChangelogProps}
          >
            <NavIconWrapper
              collapsed={collapsed}
              mainLabel="What's New"
              tooltipStyle={tooltipStyle}
              icon={<ChangelogIconSVG />}
            >
              <div className="flex items-center justify-center neeto-ui-sidebar__link-icon">
                <ChangelogIconSVG />
              </div>
            </NavIconWrapper>
            {!collapsed && (
              <Typography
                component="span"
                style="body2"
                weight="medium"
                className="neeto-ui-sidebar__link-label"
              >
                What's New
              </Typography>
            )}
          </div>
        )}

        {showAppSwitcher && (
          <button
            onClick={onAppSwitcherToggle}
            className="flex items-center justify-start w-full bg-transparent shadow-none select-none neeto-ui-sidebar__link neeto-ui-sidebar__link--app-switcher neeto-ui-sidebar__link--button"
          >
            <NavIconWrapper collapsed={collapsed} mainLabel="App Switcher" tooltipStyle={tooltipStyle} icon={<AppSwitcher />} >
              <span className="flex items-center justify-center neeto-ui-sidebar__link-icon">
                <AppSwitcher size={24} />
              </span>
            </NavIconWrapper>
            {!collapsed && (
              <Typography
                component="span"
                style="body2"
                weight="medium"
                className="text-left neeto-ui-sidebar__link-label"
              >
                {appName}
              </Typography>
            )}
          </button>
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

        {collapsible && (
          <button
            onClick={toggleCollapse}
            className="flex items-center justify-start w-full mb-0 bg-transparent shadow-none select-none neeto-ui-sidebar__link neeto-ui-sidebar__link--button"
          >
            <span className="flex items-center justify-center neeto-ui-sidebar__link-icon">
              {!collapsed ? <LeftArrow /> : <RightArrow />}
            </span>
            {!collapsed && (
              <Typography
                component="span"
                style="body2"
                weight="medium"
                className="text-left neeto-ui-sidebar__link-label"
              >
                {!collapsed ? "Collapse" : ""}
              </Typography>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

Sidebar.propTypes = {
  organizationInfo: PropTypes.shape({
    logo: PropTypes.element,
    name: PropTypes.string,
    subdomain: PropTypes.string,
  }),
  tooltipStyle: PropTypes.oneOf(Object.keys(TOOLTIP_STYLES)),
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      to: PropTypes.string,
      icon: PropTypes.element,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          to: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
  profileInfo: PropTypes.shape({
    name: PropTypes.string,
    dropdownProps: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        label: PropTypes.string,
        icon: PropTypes.element,
      })
    ),
  }),
  isCollapsed: PropTypes.bool,
  collapsible: PropTypes.bool,
  onCollapse: PropTypes.func,
  showChangelog: PropTypes.bool,
  changelogProps: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func,
  }),
  showAppSwitcher: PropTypes.bool,
  onAppSwitcherToggle: PropTypes.func,
  appName: PropTypes.string,
};

export default Sidebar;
