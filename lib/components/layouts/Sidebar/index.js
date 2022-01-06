import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pathOr } from "ramda";
import PropTypes from "prop-types";
import classnames from "classnames";

import NeetoLogo from "./NeetoLogo";
import NavIconWrapper from "./NavIconWrapper";
import Footer from "./Footer";
import Typography from "../../Typography";
import { TOOLTIP_STYLES } from "./constant";

const Sidebar = ({
  organizationInfo,
  navLinks,
  tooltipStyle = TOOLTIP_STYLES.featured,
  footerLinks = [],
  profileInfo,
  isCollapsed = false,
  collapsible = false,
  onCollapse,
  showChangelog = false,
  changelogProps = {},
  showAppSwitcher = false,
  onAppSwitcherToggle = () => {},
  appName,
}) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const Logo = organizationInfo?.logo;
  const LogoSVG = Logo;
  const toggleCollapse =
    onCollapse || (() => setCollapsed((collapsed) => !collapsed));

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
                <NavIconWrapper
                  tooltipStyle={tooltipStyle}
                  icon={<IconSVG color="#68737D" />}
                  description={description}
                  collapsed={collapsed}
                  mainLabel={mainLabel}
                >
                  <NavLink
                    to={to}
                    className="flex items-center no-underline select-none neeto-ui-sidebar__link"
                    activeClassName="active"
                    isActive={() => isActive}
                    onClick={() => shouldOpenSidebar && toggleCollapse()}
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
                        {mainLabel}
                      </Typography>
                    )}
                  </NavLink>
                </NavIconWrapper>
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
      <Footer
        footerLinks={footerLinks}
        appName={appName}
        profileInfo={profileInfo}
        collapsed={collapsed}
        tooltipStyle={tooltipStyle}
        collapsible={collapsible}
        showChangelog={showChangelog}
        showAppSwitcher={showAppSwitcher}
        changelogProps={changelogProps}
        toggleCollapse={toggleCollapse}
        onAppSwitcherToggle={onAppSwitcherToggle}
      />
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
    email: PropTypes.string,
    customContent: PropTypes.element,
    topLinks: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        label: PropTypes.string,
        icon: PropTypes.element,
      })
    ),
    bottomLinks: PropTypes.arrayOf(
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
