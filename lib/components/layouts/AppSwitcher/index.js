import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import PropTypes from "prop-types";

import Body from "./Body";
import { Portal, Backdrop } from "../../../atoms";
import { useOnClickOutside } from "../../../utils";
import {
  SWITCHER_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../../../constants/overlay";

const sizes = { lg: "lg", sm: "sm" };

const noop = () => {};

const envs = {
  development: "development",
  staging: "staging",
  production: "production",
};

const getSubdomain = () => {
  let host = window.location.host;
  let parts = host.split(".");
  let subdomain = "";
  if (parts.length >= 3) {
    subdomain = parts[0];
  }
  return subdomain;
};

const animationVariants = {
  open: {
    x: 0,
    filter: BLUR_INITIAL,
  },
  closed: {
    x: -SWITCHER_SIZE,
    filter: BLUR_FINAL,
  },
};

const AppSwitcher = ({
  size = "sm",
  isOpen,
  onClose = noop,
  loading = false,
  className = "",
  closeOnEsc = true,
  closeOnOutsideClick = true,
  environment,
  activeApp = "Desk",
  subdomain = "",
  neetoApps = [],
  recentApps = [],
  isSidebarOpen = false,
  ...otherProps
}) => {
  const paneWrapper = useRef();
  const backdropRef = useRef();

  useOnClickOutside(
    paneWrapper,
    backdropRef,
    closeOnOutsideClick ? onClose : noop
  );

  useHotkeys("esc", closeOnEsc ? onClose : noop);

  return (
    <Portal className="neeto-ui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            ref={backdropRef}
            key="switcher-backdrop"
            className={classnames("neeto-ui-app-switcher__backdrop", {
              "neeto-ui-app-switcher__backdrop--expanded": isSidebarOpen,
            })}
          >
            <motion.div
              variants={animationVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={paneWrapper}
              key="switcher-wrapper"
              data-cy="switcher-wrapper"
              className={classnames("neeto-ui-app-switcher__wrapper", {
                "neeto-ui-app-switcher__wrapper-size--sm": size === sizes.sm,
                "neeto-ui-app-switcher__wrapper-size--lg": size === sizes.lg,
                [className]: className,
              })}
              {...otherProps}
            >
              {loading ? (
                <></>
              ) : (
                <Body
                  onClose={onClose}
                  environment={environment}
                  activeApp={activeApp}
                  subdomain={subdomain || getSubdomain() || "spinkart"}
                  neetoApps={neetoApps}
                  recentApps={recentApps}
                />
              )}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

AppSwitcher.propTypes = {
  /**
   * Size of the AppSwitcher
   */
  size: PropTypes.oneOf(Object.values(sizes)),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
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
  environment: PropTypes.oneOf(Object.values(envs)).isRequired,
};

export default AppSwitcher;
