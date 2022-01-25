import React from "react";
import { motion } from "framer-motion";
import classnames from "classnames";

import Header from "./Header";
import Footer from "./Footer";
import Links from "./Links";
import { SIDEBAR_PROPTYPES, TOOLTIP_STYLES, VARIANTS } from "./constant";
import { all, either, isEmpty, isNil } from "ramda";

const Sidebar = ({
  organizationInfo,
  navLinks,
  tooltipStyle = TOOLTIP_STYLES.featured,
  footerLinks = [],
  profileInfo,
  isCollapsed,
  showChangelog = false,
  changelogProps = {},
  showAppSwitcher = false,
  onAppSwitcherToggle = () => {},
  appName,
}) => {
  const hasNoSubItems = all((link) => either(isNil, isEmpty)(link.items))(
    navLinks
  );
  const collapsed = isCollapsed ?? hasNoSubItems;

  return (
    <motion.div
      animate={collapsed ? "collapsed" : "expanded"}
      variants={VARIANTS}
      transition={{ duration: 0.3 }}
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
      />

      <Footer
        footerLinks={footerLinks}
        appName={appName}
        profileInfo={profileInfo}
        collapsed={collapsed}
        tooltipStyle={tooltipStyle}
        showChangelog={showChangelog}
        showAppSwitcher={showAppSwitcher}
        changelogProps={changelogProps}
        onAppSwitcherToggle={onAppSwitcherToggle}
      />
    </motion.div>
  );
};

Sidebar.propTypes = SIDEBAR_PROPTYPES;

export default Sidebar;
