import React from "react";
import { motion } from "framer-motion";
import classnames from "classnames";

import Header from "./Header";
import Footer from "./Footer";
import Links from "./Links";
import { SIDEBAR_PROPTYPES, TOOLTIP_STYLES, VARIANTS } from "./constant";

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
}) => {
  return (
    <motion.div
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={VARIANTS}
      transition={{ duration: 0.3 }}
      data-cy="sidebar-wrapper"
      className={classnames(
        "neeto-ui-sidebar flex flex-col flex-shrink-0 overflow-y-auto overflow-x-hidden",
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
};

Sidebar.propTypes = SIDEBAR_PROPTYPES;

export default Sidebar;
