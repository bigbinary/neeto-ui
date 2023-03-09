import React, { useEffect, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import PropTypes from "prop-types";

import { Portal, Backdrop } from "atoms";
import { useOnClickOutside } from "hooks";
import { noop } from "utils";

import Body from "./Body";
import {
  validateNeetoAppsProp,
  validateActiveAppProp,
  validateAppName,
  displayErrorMessage,
} from "./utils";

const AppSwitcher = ({
  isOpen,
  className = "",
  closeOnEsc = true,
  closeOnOutsideClick = true,
  activeApp,
  neetoApps = [],
  recentApps = [],
  onClose = noop,
  ...otherProps
}) => {
  const paneWrapper = useRef(null);
  const backdropRef = useRef(null);

  useOnClickOutside(
    paneWrapper,
    backdropRef,
    closeOnOutsideClick ? onClose : noop
  );

  useHotkeys("esc", closeOnEsc ? onClose : noop);

  useEffect(() => {
    validateActiveAppProp(activeApp);
  }, [activeApp]);

  useEffect(() => {
    validateNeetoAppsProp(neetoApps);
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
              activeApp={activeApp}
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
        return new Error(displayErrorMessage(value, propName, componentName));
      }
    },
  ]).isRequired,
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
    const value = propValue[key].name;
    if (!validateAppName(value)) {
      return new Error(displayErrorMessage(value, propFullName, componentName));
    }
  }).isRequired,
  /**
   * List of names of recently created neetoApps
   */
  recentApps: PropTypes.arrayOf(PropTypes.string),
};
export default AppSwitcher;
