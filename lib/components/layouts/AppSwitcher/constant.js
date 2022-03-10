import PropTypes from "prop-types";

import {
  SWITCHER_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
} from "../../../constants/overlay";

export { TRANSITION } from "../../../constants/overlay";

export const ANIMATION_VARIANTS = {
  open: {
    x: 0,
    filter: BLUR_INITIAL,
  },
  closed: {
    x: -SWITCHER_SIZE,
    filter: BLUR_FINAL,
  },
};

export const SIZES = { lg: "lg", sm: "sm" };

const ENVS = {
  development: "development",
  staging: "staging",
  production: "production",
};

export const APPSWITCHER_PROPTYPES = {
  /**
   * Size of the AppSwitcher
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify whether the AppSwitcher is open or not
   */
  isOpen: PropTypes.bool,
  /**
   * To provide a callback function on close of the AppSwitcher
   */
  onClose: PropTypes.func,
  /**
   * To specify whether the AppSwitcher is loading or not
   */
  loading: PropTypes.bool,
  /**
   * To provide additional classNames to the AppSwitcher
   */
  className: PropTypes.string,
  /**
   * To close AppSwitcher on esc key press
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To close AppSwitcher on outside click
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Name of the active application
   */
  activeApp: PropTypes.string,
  /**
   * Organization subdomain name
   */
  subdomain: PropTypes.string,
  /**
   * List of names of enabled neetoApps
   */
  neetoApps: PropTypes.arrayOf(PropTypes.string),
  /**
   * List of names of recently created neetoApps
   */
  recentApps: PropTypes.arrayOf(PropTypes.string),
  /**
   * To specify the environment of the App
   */
  environment: PropTypes.oneOf(Object.values(ENVS)).isRequired,
};
