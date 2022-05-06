import React from "react";
import { motion } from "framer-motion";
import classnames from "classnames";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Links from "./Links";
import { TOOLTIP_STYLES, VARIANTS } from "./constant";

const Sidebar = ({
  organizationInfo,
  navLinks = [],
  tooltipStyle = TOOLTIP_STYLES.featured,
  footerLinks = [],
  profileInfo,
  isCollapsed = true,
  showAppSwitcher = false,
  onAppSwitcherToggle = () => {},
  appName = "",
}) => (
  <motion.div
    animate={isCollapsed ? "collapsed" : "expanded"}
    variants={VARIANTS}
    transition={{ duration: 0.3 }}
    data-cy="sidebar-wrapper"
    className={classnames(
      "neeto-ui-sidebar neeto-ui-flex neeto-ui-flex-col neeto-ui-flex-shrink-0 neeto-ui-overflow-y-auto neeto-ui-overflow-x-hidden",
      {
        "neeto-ui-sidebar--collapsed": isCollapsed,
      }
    )}
  >
    <Header organizationInfo={organizationInfo} collapsed={isCollapsed} />

    <Links
      navLinks={navLinks}
      tooltipStyle={tooltipStyle}
      collapsed={isCollapsed}
    />

    <Footer
      footerLinks={footerLinks}
      appName={appName}
      profileInfo={profileInfo}
      collapsed={isCollapsed}
      tooltipStyle={tooltipStyle}
      showAppSwitcher={showAppSwitcher}
      onAppSwitcherToggle={onAppSwitcherToggle}
    />
  </motion.div>
);

Sidebar.propTypes = {
  /**
   *  To specify the organization info to be rendered in the sidebar
   */
  organizationInfo: PropTypes.shape({
    logo: PropTypes.element,
    name: PropTypes.string,
    subdomain: PropTypes.string,
  }),
  /**
   *  To specify the tooltip styles
   */
  tooltipStyle: PropTypes.oneOf(Object.keys(TOOLTIP_STYLES)),
  /**
   *  To provide the nav links to be rendered in the sidebar
   */
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      to: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ).isRequired,
  /**
   *  To provide the footer links to be rendered in the sidebar
   */
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ),
  /**
   *  To specify the profile info to be rendered in the sidebar
   */
  profileInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    customContent: PropTypes.element,
    changelogProps: PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }),
    helpProps: PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }),
    topLinks: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        label: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      })
    ),
    bottomLinks: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        label: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      })
    ),
  }),
  /**
   *  To specify whether the sidebar is collapsed or not
   */
  isCollapsed: PropTypes.bool,
  /**
   *  To specify the is app switcher visible
   */
  showAppSwitcher: PropTypes.bool,
  /**
   *  To provide the function to toggle app switcher
   */
  onAppSwitcherToggle: PropTypes.func,
  /**
   * The name of the app that is currently active
   */
  appName: PropTypes.string,
};

export default Sidebar;
