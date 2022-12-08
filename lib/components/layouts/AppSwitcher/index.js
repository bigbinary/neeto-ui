import React, { useEffect, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import PropTypes from "prop-types";
import Body from "./Body";
import { ENVS, getSubdomain } from "./constant";
import { Portal, Backdrop } from "../../../atoms";
import { useOnClickOutside, noop } from "../../../utils";

const validateAppName = (value) =>
  typeof value === "string" && /^[A-Z]\S*$/.test(value);

const errorMessage = (value, propFullName, componentName) => {
  return (
    "Invalid prop `" +
    propFullName +
    " -> " +
    value +
    "` supplied to" +
    " `" +
    componentName +
    "`. Validation failed."
  );
};

const AppSwitcher = ({
  isOpen,
  className = "",
  closeOnEsc = true,
  closeOnOutsideClick = true,
  environment,
  activeApp,
  subdomain = "",
  neetoApps = [],
  recentApps = [],
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

  const validateNeetoAppsProp = () => {
    // Expection of PR apps
    if (ENVS[environment] && !Array.isArray(neetoApps)) {
      throw new Error(
        `Value of neetoApps prop of AppSwitcher component is ${neetoApps}, it should be an array instead`
      );
    }
  };

  const validateActiveAppProp = () => {
    if (!activeApp || !validateAppName(activeApp)) {
      throw new Error(
        `Value of activeApp prop of AppSwitcher component is ${activeApp}, it is not matching the expected format. Please refer docs for more info`
      );
    }
  };
  useEffect(() => {
    validateActiveAppProp();
  }, [activeApp]);

  useEffect(() => {
    validateNeetoAppsProp();
  }, [neetoApps]);

  return (
    <Portal rootId="neeto-ui-portal">
      <CSSTransition
        in={isOpen}
        appear
        timeout={300}
        classNames="neeto-ui-app-switcher"
        unmountOnExit
      >
        <Backdrop
          ref={backdropRef}
          key="switcher-backdrop"
          className="neeto-ui-app-switcher__backdrop"
        >
          <div
            ref={paneWrapper}
            key="switcher-wrapper"
            data-cy="switcher-wrapper"
            className={classnames("neeto-ui-app-switcher__wrapper", {
              [className]: className,
            })}
            {...otherProps}
          >
            <Body
              onClose={onClose}
              environment={environment}
              activeApp={activeApp}
              subdomain={subdomain || getSubdomain() || "spinkart"}
              neetoApps={neetoApps}
              recentApps={recentApps}
            />
          </div>
        </Backdrop>
      </CSSTransition>
    </Portal>
  );
};

AppSwitcher.propTypes = {
  /**
   * To specify whether the AppSwitcher is open or not
   */
  isOpen: PropTypes.bool,
  /**
   * To provide a callback function on close of the AppSwitcher
   */
  onClose: PropTypes.func,
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
  activeApp: PropTypes.oneOfType([
    function (props, propName, componentName) {
      const value = props[propName];
      if (!validateAppName(value)) {
        return new Error(errorMessage(value, propName, componentName));
      }
    },
  ]).isRequired,
  /**
   * Organization subdomain name
   */
  subdomain: PropTypes.string,
  /**
   * List of names of enabled neetoApps
   */
  neetoApps: PropTypes.arrayOf(function (
    propValue,
    key,
    componentName,
    location,
    propFullName
  ) {
    const value = propValue[key];
    if (!validateAppName(value)) {
      return new Error(errorMessage(value, propFullName, componentName));
    }
  }).isRequired,
  /**
   * List of names of recently created neetoApps
   */
  recentApps: PropTypes.arrayOf(PropTypes.string),
  /**
   * To specify the environment of the app
   */
  environment: PropTypes.oneOf(Object.values(ENVS)).isRequired,
};
export default AppSwitcher;
