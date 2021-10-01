import React, { useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { Close } from "@bigbinary/neeto-icons";

import { Portal, Backdrop } from "../atoms";
import { useOnClickOutside } from "../utils";
import { BLUR_INITIAL, BLUR_FINAL, TRANSITION } from "../constants/overlay";
import Button from "./Button";
import Typography from "./Typography";
import PageLoader from "./PageLoader";

const noop = () => {};
const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

const Alert = ({
  size = "sm",
  isOpen = false,
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
                  "neeto-ui-modal__wrapper--sm": size === sizes.sm,
                  "neeto-ui-modal__wrapper--md": size === sizes.md,
                  "neeto-ui-modal__wrapper--lg": size === sizes.lg,
                  [className]: className,
                })}
              >
                {closeButton && (
                  <Button
                    style="text"
                    icon={Close}
                    className="neeto-ui-modal__close"
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
  size: PropTypes.oneOf(Object.values(sizes)),
  /**
   * To render the Alert Component.
   */
  isOpen: PropTypes.bool,
  /**
   * To close the Alert Component.
   */
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  /**
   * To add Title to Alert Component.
   */
  title: PropTypes.string,
  /**
   * To add alert message the Alert Component.
   */
  message: PropTypes.string,
  loading: PropTypes.bool,
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
      <div className="neeto-ui-modal__header">
        <div className="neeto-ui-icon__wrapper">
          <i className={classnames([icon, "neeto-ui-icon__body"])}></i>
          {title && <Typography style="h2">{title}</Typography>}
        </div>
      </div>
      <div className="neeto-ui-modal__body">
        <Typography style="body2" lineHeight="normal">{message}</Typography>
      </div>
      <div className="space-x-2 neeto-ui-alert__footer">
        <Button label="Continue" onClick={onSubmit} />
        <Button style="text" label="Cancel" onClick={onClose} />
      </div>
    </>
  );
};

export default Alert;
