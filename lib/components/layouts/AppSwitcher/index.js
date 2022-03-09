import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";

import Body from "./Body";
import { Portal, Backdrop } from "../../../atoms";
import { useOnClickOutside } from "../../../utils";
import {
  TRANSITION,
  ANIMATION_VARIANTS,
  APPSWITCHER_PROPTYPES,
  SIZES,
} from "./constant";

const noop = () => {};

const getSubdomain = () => {
  let host = window.location.host;
  let parts = host.split(".");
  let subdomain = "";
  if (parts.length >= 3) {
    subdomain = parts[0];
  }
  return subdomain;
};

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

AppSwitcher.propTypes = APPSWITCHER_PROPTYPES;

export default AppSwitcher;
