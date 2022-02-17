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
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ).isRequired,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    })
  ),
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
  isCollapsed: PropTypes.bool,
  showAppSwitcher: PropTypes.bool,
  onAppSwitcherToggle: PropTypes.func,
  appName: PropTypes.string,
};
