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
import PageLoader from "./PageLoader";
const noop = () => {};
const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

const Alert = ({
  size = "sm",
  isOpen,
  loading = false,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  onClose = noop,
  onSubmit = noop,
  title = "",
  message = "",
}) => {
  const modalWrapper = useRef();

  if (closeOnOutsideClick) useOnClickOutside(modalWrapper, onClose);

  if (closeOnEsc) useHotkeys("esc", onClose);

  return (
    <>
      <Portal className="nui-portal">
        <AnimatePresence>
          {isOpen && (
            <Backdrop
              key="modal-backdrop"
              className={classnames("nui-modal__backdrop", backdropClassName)}
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
                className={classnames("nui-modal__wrapper", {
                  "nui-modal__wrapper--sm": size === sizes.sm,
                  "nui-modal__wrapper--md": size === sizes.md,
                  "nui-modal__wrapper--lg": size === sizes.lg,
                  [className]: className,
                })}
              >
                {closeButton && (
                  <Button
                    style="icon"
                    icon={Close}
                    className="nui-modal__close"
                    onClick={onClose}
                  />
                )}
                {loading ? (
                  <PageLoader />
                ) : (
                  <Body
                    onSubmit={onSubmit}
                    onClose={onClose}
                    title={title}
                    message={message}
                  />
                )}
              </motion.div>
            </Backdrop>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

Alert.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.array,
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  closeButton: PropTypes.bool,
  backdropClassName: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
};

const Body = ({ title, message, onSubmit, onClose }) => {
  const icon = "ri-alert-line ri-xl";
  return (
    <>
      <div className="nui-modal__header">
        <div className="nui-icon__wrapper">
          <i className={classnames([icon, "nui-icon__body"])}></i>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="nui-modal__body">{message}</div>
      <div className="nui-alert__footer">
        <Button label="Continue" onClick={onSubmit} />
        <Button style="text" label="Cancel" onClick={onClose} />
      </div>
    </>
  );
};

export default Alert;
