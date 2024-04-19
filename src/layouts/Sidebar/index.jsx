import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import { noop } from "utils";
import "styles/common";
import "styles/layout/_common";

import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";

const TOOLTIP_STYLES = { default: "default", featured: "featured" };

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
    data-testid="sidebar"
    className={classnames(
      "neeto-ui-sidebar neeto-ui-flex neeto-ui-flex-col neeto-ui-flex-shrink-0 neeto-ui-overflow-y-auto neeto-ui-overflow-x-hidden",
      "neeto-ui-sidebar--collapsed"
    )}
  >
    <Header {...{ organizationInfo }} />
    <Links {...{ navLinks, tooltipStyle }} />
    <Footer
      {...{
        helpLinks,
        onAppSwitcherToggle,
        profileInfo,
        showAppSwitcher,
        tooltipStyle,
      }}
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
  helpLinks: PropTypes.shape({
    documentationProps: PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }),
    keyboardShortcutProps: PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }),
    liveChatProps: PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }),
    changelogProps: PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }),
  }),
};

export default Sidebar;
