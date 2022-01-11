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
  isSubmitting = false,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  onClose = noop,
  onSubmit = noop,
  title = "",
  message = "",
  submitButtonLabel = "Continue",
  cancelButtonLabel = "Cancel",
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
    <>
      <Portal className="neeto-ui-portal">
        <AnimatePresence>
          {isOpen && (
            <Backdrop
              key="modal-backdrop"
              ref={backdropRef}
              className={classnames(
                "neeto-ui-modal__backdrop",
                backdropClassName
              )}
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
                    submitButtonLabel={submitButtonLabel}
                    cancelButtonLabel={cancelButtonLabel}
                    isSubmitting={isSubmitting}
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
  /**
   * To add loading state to Submit button
   */
  isSubmitting: PropTypes.bool,
  /**
   * To add className to Alert Component.
   */
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  closeButton: PropTypes.bool,
  /**
   * Label for submit button.
   */
  submitButtonLabel: PropTypes.string,
  /**
   * Label for cancel button.
   */
  cancelButtonLabel: PropTypes.string,
  backdropClassName: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
};

const Body = ({
  title,
  message,
  submitButtonLabel,
  cancelButtonLabel,
  onSubmit,
  onClose,
  isSubmitting,
}) => {
  return (
    <>
      <div className="neeto-ui-modal__header" data-cy="alert-title">
        {title && <Typography style="h2">{title}</Typography>}
      </div>
      <div className="neeto-ui-modal__body" data-cy="alert-message">
        <Typography style="body2" lineHeight="normal">
          {message}
        </Typography>
      </div>
      <div className="space-x-2 neeto-ui-alert__footer">
        <Button
          style="danger"
          size="large"
          data-cy="alert-submit-button"
          label={submitButtonLabel}
          onClick={onSubmit}
          loading={isSubmitting}
        />
        <Button
          style="text"
          size="large"
          data-cy="alert-cancel-button"
          label={cancelButtonLabel}
          onClick={onClose}
        />
      </div>
    </>
  );
};

export default Alert;
