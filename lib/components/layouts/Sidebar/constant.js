import PropTypes from "prop-types";

export const TOOLTIP_STYLES = {
  default: "default",
  featured: "featured",
};

export const VARIANTS = {
  expanded: { maxWidth: 320 },
  collapsed: { maxWidth: 64 },
};

export const SIDEBAR_PROPTYPES = {
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
