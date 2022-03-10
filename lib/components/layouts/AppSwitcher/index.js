import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import PropTypes from "prop-types";
import Body from "./Body";
import { Portal, Backdrop } from "../../../atoms";
import { useOnClickOutside } from "../../../utils";
import {
  TRANSITION,
  ANIMATION_VARIANTS,
  ENVS,
  SIZES,
  getSubdomain,
} from "./constant";

const noop = () => {};

const AppSwitcher = ({
  size = "sm",
  isOpen,
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
  onClose = noop,
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
    <Portal rootId="neeto-ui-portal">
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
              variants={ANIMATION_VARIANTS}
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
                "neeto-ui-app-switcher__wrapper-size--sm": size === SIZES.sm,
                "neeto-ui-app-switcher__wrapper-size--lg": size === SIZES.lg,
                [className]: className,
              })}
              {...otherProps}
            >
              {!loading && (
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
export default AppSwitcher;
