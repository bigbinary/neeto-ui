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

const animationVariants = {
  open: {
    x: 0,
    filter: BLUR_INITIAL,
  },
  closed: {
    x: PANE_SIZE,
    filter: BLUR_FINAL,
  },
};

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
            key="pane-backdrop"
            className={classnames(
              "neeto-ui-pane__backdrop flex justify-end",
              backdropClassName
            )}
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
              key="pane-wrapper"
              data-cy="pane-wrapper"
              className={classnames("neeto-ui-pane__wrapper", {
                "neeto-ui-pane__wrapper--sm": size === "sm",
                "neeto-ui-pane__wrapper--lg": size === "lg",
                [className]: className,
              })}
              {...otherProps}
            >
              {closeButton && (
                <Button
                  aria-label="Close"
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
  /**
   * To specify whether the pane component should close on esc key press.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the pane component should render close button.
   */
  closeButton: PropTypes.bool,
  /**
   * To specify the classname to be applied to the backdrop element.
   */
  backdropClassName: PropTypes.string,
  /**
   * To specify whether the pane component should close on outside click.
   */
  closeOnOutsideClick: PropTypes.bool,
};

export const Header = ({ children, className }) => {
  return (
    <div className={classnames("neeto-ui-pane__header", className)}>
      {children}
    </div>
  );
};

Header.propTypes = {
  /**
   * To specify className to be applied to the pane header container.
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export const Body = ({ children, className, hasFooter = true }) => {
  return (
    <div
      className={classnames(
        "neeto-ui-pane__body flex flex-col items-start justify-start",
        {
          "neeto-ui-pane__body--has-footer": hasFooter,
          [className]: className,
        }
      )}
    >
      {children}
    </div>
  );
};

Body.propTypes = {
  /**
   * To specify if the pane has a footer.
   * @default true
   */
  hasFooter: PropTypes.bool,
  /**
   * To specify className to be applied to the pane body container.
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export const Footer = ({ children, className }) => {
  return (
    <div
      className={classnames(
        "neeto-ui-pane__footer neeto-ui-shadow-m flex items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

Footer.propTypes = {
  /**
   * To specify className to be applied to the pane footer container.
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

Pane.Header = Header;
Pane.Body = Body;
Pane.Footer = Footer;

export default Pane;
