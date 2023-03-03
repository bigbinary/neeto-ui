import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { noop } from "utils";

import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";

export const TOOLTIP_STYLES = {
  default: "default",
  featured: "featured",
};

const Sidebar = ({
  organizationInfo,
  navLinks = [],
  tooltipStyle = TOOLTIP_STYLES.featured,
  profileInfo,
  helpLinks,
  showAppSwitcher = false,
  onAppSwitcherToggle = noop,
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
      helpLinks={helpLinks}
    />
  </div>
);

Sidebar.propTypes = {
  /**
   *  To specify the organization info to be rendered in the Sidebar
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
   *  To provide the nav links to be rendered in the Sidebar
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
   *  To specify the profile info to be rendered in the Sidebar
   */
  profileInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    customContent: PropTypes.element,
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
   *  To provide the help links to be rendered in the Sidebar
   */
  helpLinks: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ),

  /**
   * The name of the app that is currently active
   */
  appName: PropTypes.string,
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Removed
   * </div>
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
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Removed
   * </div>
   * _Expanded state of Sidebar have been removed from the design._
   */
  isCollapsed: PropTypes.bool,
};

export default Sidebar;
