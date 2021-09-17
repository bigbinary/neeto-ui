import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { Portal, Backdrop } from "../../atoms";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import { Check } from "@bigbinary/neeto-icons";

import { useOnClickOutside } from "../../utils";
import {
  SWITCHER_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../../constants/overlay";
import CLIENT_APPS from "../../constants/clientApps";
import Button from "../Button";
import Typography from "../Typography";

const sizes = { lg: "lg", sm: "sm" };

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
          <Backdrop key="switcher-backdrop" className="nui-app-switcher__backdrop">
            <motion.div
              initial={{
                x: -SWITCHER_SIZE,
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
              exit={{ x: -SWITCHER_SIZE, filter: BLUR_FINAL }}
              className={classnames("nui-app-switcher__wrapper", {
                "nui-app-switcher__wrapper-size--sm": size === sizes.sm,
                "nui-app-switcher__wrapper-size--lg": size === sizes.lg,
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
      <div className="nui-app-switcher__header">
        <Button label="Back" icon="ri-arrow-left-line" style="text" iconPosition="left" onClick={onClose} />
      </div>
      <div className="nui-app-switcher__body">
        <Typography style="h5" weight="bold" textTransform="uppercase" className="nui-text-gray-300">Apps</Typography>
        <div className="nui-app-switcher__grid">
          {CLIENT_APPS.filter((item) => item.isActive).map((app) => {
            const { name, url, icon } = app;
            const SVG = icon;
            return (
              <a
                href={url[environment]}
                target="_blank"
                className={classnames("nui-app-switcher-link", {
                  "nui-app-switcher-link--active": activeApp === name,
                })}
                key={name}
                rel="noreferrer"
                data-test-id={`neetoapp-link-${name}`}
              >
                <div className="nui-app-switcher-link__row">
                  <div
                    className={classnames("nui-app-switcher-link__icon-holder", {
                      [`v2-gradient--${name.toLowerCase()}`]: name,
                    })}
                  >
                    {SVG && (
                      <SVG
                        color="white"
                        className="nui-app-switcher-link__icon"
                      />
                    )}
                  </div>
                  <Typography style="h4" weight="semibold" component="span" className="nui-text-gray-600 nui-app-switcher-link__title">{name}</Typography>
                  {
                    activeApp === name && <span className="nui-app-switcher-link__check-icon nui-text-gray-800"><Check size="22" /></span>
                  }
                </div>
              </a>
            );
          })}
        </div>
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
