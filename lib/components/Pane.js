import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Close } from "@bigbinary/neeto-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import Button from "./Button";
import { Portal, Backdrop } from "../atoms";
import { useOnClickOutside } from "../utils";
import {
  PANE_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../constants/overlay";

const noop = () => {};
const sizes = ["sm", "lg"];

const Pane = ({
  size = "sm",
  isOpen,
  onClose = noop,
  loading = false,
  children,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  ...otherProps
}) => {
  const paneWrapper = useRef();

  if (closeOnOutsideClick) useOnClickOutside(paneWrapper, onClose);

  if (closeOnEsc) useHotkeys("esc", onClose);

  return (
    <Portal className="neeto-ui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            key="pane-backdrop"
            className={classnames("neeto-ui-pane__backdrop flex justify-end", backdropClassName)}
          >
            <motion.div
              initial={{
                x: PANE_SIZE,
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
              key="pane-wrapper"
              data-cy="pane-wrapper"
              exit={{ x: PANE_SIZE, filter: BLUR_FINAL }}
              className={classnames("neeto-ui-pane__wrapper", {
                "neeto-ui-pane__wrapper--sm": size === "sm",
                "neeto-ui-pane__wrapper--lg": size === "lg",
                [className]: className,
              })}
              {...otherProps}
            >
              {closeButton && (
                <Button
                  style="text"
                  icon={Close}
                  className="neeto-ui-pane__close"
                  onClick={onClose}
                />
              )}
              {loading ? <></> : children}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

Pane.propTypes = {
  size: PropTypes.oneOf(sizes),
  /**
   * To specify whether the pane component is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the pane is closed.
   */
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  /**
   * To specify the content to be rendered inside the pane component.
   */
  children: PropTypes.node,
  /**
   * To provide external classname to the pane component.
   */
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  closeButton: PropTypes.bool,
  backdropClassName: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
};

const Header = ({ children, className }) => {
  return (
    <div className={classnames("neeto-ui-pane__header", className)}>
      {children}
    </div>
  );
};

const Body = ({ children, className, hasFooter = true }) => {
  return (
    <div
      className={classnames("neeto-ui-pane__body flex flex-col items-start justify-start", {
        "neeto-ui-pane__body--has-footer": hasFooter,
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

const Footer = ({ children, className }) => {
  return (
    <div className={classnames("neeto-ui-pane__footer neeto-ui-shadow-m flex items-center", className)}>
      {children}
    </div>
  );
};

Pane.Header = Header;
Pane.Body = Body;
Pane.Footer = Footer;

export default Pane;
