import React, { useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { Close } from "@bigbinary/neeto-icons";

import { Portal, Backdrop } from "../../atoms";
import { useOnClickOutside } from "../../utils";
import { BLUR_INITIAL, BLUR_FINAL, TRANSITION } from "../../constants/overlay";
import Button from "../Button";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const noop = () => {};

const SIZES = {
  xs: "xs",
  sm: "sm",
  md: "md",
};

const ANIMATION_VARIANTS = {
  open: { scale: 1, opacity: 1, y: 0, filter: BLUR_INITIAL },
  closed: { scale: 1.1, opacity: 0, y: -20, filter: BLUR_FINAL },
  exit: { scale: 1, opacity: 0, y: 20, filter: BLUR_FINAL },
};

const Modal = ({
  size = SIZES.sm,
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
  const backdropRef = useRef();

  useOnClickOutside(
    modalWrapper,
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
            key="modal-backdrop"
            className={classnames(
              "neeto-ui-modal__backdrop",
              backdropClassName
            )}
          >
            <motion.div
              role="dialog"
              aria-modal={true}
              variants={ANIMATION_VARIANTS}
              initial="closed"
              animate="open"
              exit="exit"
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={modalWrapper}
              key="modal-wrapper"
              className={classnames("neeto-ui-modal__wrapper", {
                "neeto-ui-modal__wrapper--xs": size === SIZES.xs,
                "neeto-ui-modal__wrapper--sm": size === SIZES.sm,
                "neeto-ui-modal__wrapper--md": size === SIZES.md,
                [className]: className,
              })}
              {...otherProps}
            >
              {closeButton && (
                <Button
                  aria-label="Close"
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
   * To specify the size of the Modal.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify whether the Modal is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the Modal is closed.
   */
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.node,
  /**
   * To provide external classNames to the Modal.
   */
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the close button of the Modal should be displayed or not.
   */
  closeButton: PropTypes.bool,
  backdropClassName: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
