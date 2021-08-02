import PropTypes from "prop-types";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../atoms/Portal";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import { useOnClickOutside } from "../utils";
const noop = () => {};

const Modal = ({
  isOpen,
  onClose = noop,
  size = "md",
  className,
  autoHeight,
  autoWidth,
  showFooter,
  submitButtonProps,
  cancelButtonProps,
  showCloseButton = false,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  children,
  ...otherProps
}) => {
  const modalWrapper = useRef();

  if (closeOnOutsideClick) useOnClickOutside(modalWrapper, onClose);

  if (closeOnEsc) useHotkeys("esc", onClose);

  return (
    <Portal className="nui-modal--portal">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              backgroundColor: "#1b1f2300",
              backdropFilter: "blur(0px)",
            }}
            animate={{
              backgroundColor: "#1b1f23dd",
              backdropFilter: "blur(2px)",
            }}
            exit={{ backgroundColor: "#1b1f2300", backdropFilter: "blur(0px)" }}
            transition={{
              bounce: false,
              duration: 0.3,
            }}
            key="backdrop"
            className="nui-modal--root"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0, y: -20, filter: "blur(3px)" }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                bounce: false,
                duration: 0.3,
              }}
              ref={modalWrapper}
              key="content"
              exit={{ scale: 1, opacity: 0, y: 20, filter: "blur(5px)" }}
              className={classnames(
                "nui-modal--wrapper",
                `v2-nui-modal--${size}`
              )}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

Modal.propTypes = {
  autoHeight: PropTypes.bool,
  autoWidth: PropTypes.bool,
  cancelButtonProps: PropTypes.any,
  children: PropTypes.array,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showFooter: PropTypes.bool,
  size: PropTypes.oneOfType(["sm", "md", "lg"]),
  submitButtonProps: PropTypes.any,
};

const Header = ({ children, className }) => {
  return (
    <div className={classnames("nui-modal--header", className)}>{children}</div>
  );
};

const Title = ({ children, className }) => {
  return (
    <h2 className={classnames("nui-modal--title", className)}>{children}</h2>
  );
};

const Body = ({ children, className }) => {
  return (
    <div className={classnames("nui-modal--body", className)}>{children}</div>
  );
};

const Footer = ({ children, className }) => {
  return (
    <div className={classnames("nui-modal--footer", className)}>{children}</div>
  );
};

Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
