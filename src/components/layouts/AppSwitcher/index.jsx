import React, { useEffect, useRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { useHotkeys } from "react-hotkeys-hook";
import { CSSTransition } from "react-transition-group";

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
        appear
        unmountOnExit
        classNames="neeto-ui-app-switcher"
        in={isOpen}
        timeout={300}
      >
        <Backdrop
          className="neeto-ui-app-switcher__backdrop"
          key="switcher-backdrop"
          ref={backdropRef}
        >
          <div
            data-cy="switcher-wrapper"
            key="switcher-wrapper"
            ref={paneWrapper}
            className={classnames("neeto-ui-app-switcher__wrapper", {
              [className]: className,
            })}
            {...otherProps}
          >
            <Body
              activeApp={activeApp}
              neetoApps={neetoApps}
              recentApps={recentApps}
              onClose={onClose}
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

      return undefined;
    },
  ]).isRequired,
  /**
   * List of names of enabled neetoApps
   */
  neetoApps: PropTypes.arrayOf(
    (propValue, key, componentName, propFullName) => {
      const value = propValue[key].name;
      if (!validateAppName(value)) {
        return new Error(
          displayErrorMessage(value, propFullName, componentName)
        );
      }

      return undefined;
    }
  ).isRequired,
  /**
   * List of names of recently created neetoApps
   */
  recentApps: PropTypes.arrayOf(PropTypes.string),
};
export default AppSwitcher;
