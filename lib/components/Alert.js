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
  xs: "xs",
  sm: "sm",
  md: "md",
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
      <Portal rootId="neeto-ui-portal">
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
                  "neeto-ui-modal__wrapper--xs": size === sizes.xs,
                  "neeto-ui-modal__wrapper--sm": size === sizes.sm,
                  "neeto-ui-modal__wrapper--md": size === sizes.md,
                  [className]: className,
                })}
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
  /**
   * To specify the size of the Alert.
   */
  size: PropTypes.oneOf(Object.values(sizes)),
  /**
   * To specify whether the Alert is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the Alert is closed.
   */
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  /**
   * To provide Title to the Alert.
   */
  title: PropTypes.string,
  /**
   * To provide Description to the Alert.
   */
  message: PropTypes.string,
  loading: PropTypes.bool,
  /**
   * To add loading state to Submit button
   */
  isSubmitting: PropTypes.bool,
  /**
   * To provide external classNames to the Alert.
   */
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the close button of the Alert should be displayed or not.
   */
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
