import React, { useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { Portal, Backdrop } from "../atoms";
import { useOnClickOutside } from "../utils";
import { BLUR_INITIAL, BLUR_FINAL, TRANSITION } from "../constants/overlay";
import Button from "./Button";
import { Close } from "@bigbinary/neeto-icons";

const noop = () => {};
const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
};

const Modal = ({
  size = "sm",
  isOpen = false,
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
  const modalWrapper = useRef();

  if (closeOnOutsideClick) useOnClickOutside(modalWrapper, onClose);

  if (closeOnEsc) useHotkeys("esc", onClose);

  return (
    <Portal className="neeto-ui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            key="modal-backdrop"
            className={classnames("neeto-ui-modal__backdrop", backdropClassName)}
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0, y: -20, filter: BLUR_FINAL }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: BLUR_INITIAL }}
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={modalWrapper}
              key="modal-wrapper"
              exit={{ scale: 1, opacity: 0, y: 20, filter: BLUR_FINAL }}
              className={classnames("neeto-ui-modal__wrapper", {
                "neeto-ui-modal__wrapper--xs": size === sizes.xs,
                "neeto-ui-modal__wrapper--sm": size === sizes.sm,
                "neeto-ui-modal__wrapper--md": size === sizes.md,
                [className]: className,
              })}
              {...otherProps}
            >
              {closeButton && (
                <Button
                  style="text"
                  icon={Close}
                  className="neeto-ui-modal__close"
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

Modal.propTypes = {
  /**
   * To specify the size of the modal.
   */
  size: PropTypes.oneOf(Object.values(sizes)),
  /**
   * To specify whether the modal is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the modal is closed.
   */
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.node,
  /**
   * To provide external classNames to the modal.
   */
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the close button of the modal should be displayed or not.
   */
  closeButton: PropTypes.bool,
  backdropClassName: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
};

const Header = ({ children, className }) => {
  return (
    <div className={classnames("neeto-ui-modal__header", className)}>{children}</div>
  );
};

const Body = ({ children, className }) => {
  return (
    <div className={classnames("neeto-ui-modal__body", className)}>{children}</div>
  );
};

const Footer = ({ children, className }) => {
  return (
    <div className={classnames("neeto-ui-modal__footer", className)}>{children}</div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
