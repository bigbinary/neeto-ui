import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { Portal, Backdrop } from "../../atoms";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import { useOnClickOutside } from "../../utils";
import {
  SWITCHER_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../../constants/overlay";
import CLIENT_APPS from "../../constants/clientApps";
import Button from "../Button";

const noop = () => {};

const envs = {
  development: "development",
  staging: "staging",
  production: "production",
};

const AppSwitcher = ({
  size = "sm",
  isOpen,
  onClose = noop,
  loading = false,
  className = "",
  closeOnEsc = true,
  closeOnOutsideClick = true,
  environment = envs.development,
  activeApp = "Desk",
  ...otherProps
}) => {
  const paneWrapper = useRef();

  if (closeOnOutsideClick) useOnClickOutside(paneWrapper, onClose);

  if (closeOnEsc) useHotkeys("esc", onClose);

  return (
    <Portal className="nui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop key="switcher-backdrop" className="nui-switcher__backdrop">
            <motion.div
              initial={{
                x: SWITCHER_SIZE,
                filter: BLUR_FINAL,
              }}
              animate={{
                x: 0,
                filter: BLUR_INITIAL,
              }}
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={paneWrapper}
              key="switcher-wrapper"
              data-cy="switcher-wrapper"
              exit={{ x: SWITCHER_SIZE, filter: BLUR_FINAL }}
              className={classnames("nui-switcher__wrapper", {
                "nui-switcher__wrapper--sm": size === "sm",
                "nui-switcher__wrapper--lg": size === "lg",
                [className]: className,
              })}
              {...otherProps}
            >
              {loading ? (
                <></>
              ) : (
                <Pane
                  onClose={onClose}
                  environment={environment}
                  activeApp={activeApp}
                />
              )}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const Pane = ({ onClose, environment, activeApp }) => {
  return (
    <>
      <div className="nui-switcher__header">
        <Button
          style="icon"
          icon="ri-arrow-left-line ri-lg"
          onClick={onClose}
        />
        Switch to
      </div>
      <div className="nui-switcher__body">
        <h3>Apps</h3>
        {CLIENT_APPS.filter((item) => item.isActive).map((app) => {
          const { name, url, icon } = app;
          const SVG = icon;
          return (
            <a
              href={url[environment]}
              target="_blank"
              className="app-links--href"
              key={name}
              rel="noreferrer"
              data-test-id={`neetoapp-link-${name}`}
            >
              <div
                className={classnames("app-links", {
                  "active": activeApp === name,
                })}
              >
                <div
                  className={classnames("app-links-svg", {
                    [`v2-gradient--${name.toLowerCase()}`]: name,
                  })}
                >
                  {SVG && <SVG color="white" />}
                </div>
                <p className="app-links-title">{name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

AppSwitcher.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  activeApp: PropTypes.string,
};

export default AppSwitcher;
