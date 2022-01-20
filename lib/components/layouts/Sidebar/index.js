import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classnames from "classnames";

import Header from "./Header";
import Footer from "./Footer";
import Links from "./Links";
import { SIDEBAR_PROPTYPES, TOOLTIP_STYLES, VARIANTS } from "./constant";

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
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const toggleCollapse =
    onCollapse || (() => setCollapsed((collapsed) => !collapsed));

  useEffect(() => {
    setCollapsed(isCollapsed);
  }, [isCollapsed]);

  return (
    <motion.div
      animate={collapsed ? "collapsed" : "expanded"}
      variants={VARIANTS}
      transition={{ duration: 0.3 }}
      data-cy="sidebar-wrapper"
      className={classnames(
        "neeto-ui-sidebar flex flex-col flex-shrink-0 overflow-y-auto overflow-x-hidden",
        {
          "neeto-ui-sidebar--collapsed": collapsed,
        }
      )}
    >
      <Header organizationInfo={organizationInfo} collapsed={collapsed} />

      <Links
        navLinks={navLinks}
        tooltipStyle={tooltipStyle}
        collapsed={collapsed}
        toggleCollapse={toggleCollapse}
      />

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

Sidebar.propTypes = SIDEBAR_PROPTYPES;

export default Sidebar;
