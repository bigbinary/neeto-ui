import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Links from "./Links";
import { TOOLTIP_STYLES } from "./constant";

const Sidebar = ({
  organizationInfo,
  navLinks = [],
  tooltipStyle = TOOLTIP_STYLES.featured,
  profileInfo,
  showAppSwitcher = false,
  onAppSwitcherToggle = () => {},
}) => (
  <div
    data-cy="sidebar-wrapper"
    className={classnames(
      "neeto-ui-sidebar neeto-ui-flex neeto-ui-flex-col neeto-ui-flex-shrink-0 neeto-ui-overflow-y-auto neeto-ui-overflow-x-hidden",
      "neeto-ui-sidebar--collapsed"
    )}
    data-testid="sidebar"
  >
    <Header organizationInfo={organizationInfo} />

    <Links navLinks={navLinks} tooltipStyle={tooltipStyle} />

    <Footer
      profileInfo={profileInfo}
      tooltipStyle={tooltipStyle}
      showAppSwitcher={showAppSwitcher}
      onAppSwitcherToggle={onAppSwitcherToggle}
    />
  </div>
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
  /**
   * **DEPRECATED:**
   * _Footer links have been removed from the design._
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
   *  **DEPRECATED:**
   * _Expanded state of sidebar have been removed from the design._
   */
  isCollapsed: PropTypes.bool,
};

export default Sidebar;
