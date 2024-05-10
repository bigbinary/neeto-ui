import React, { useRef } from "react";

import PropTypes from "prop-types";

import Button from "./Button";
import Modal from "./Modal";
import Typography from "./Typography";

const SIZES = { small: "small", medium: "medium", large: "large" };

const FOCUSABLE_ELEMENTS = { submit: "submit", cancel: "cancel" };

const Alert = ({
  size = SIZES.medium,
  isOpen = false,
  isSubmitting = false,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  onClose = () => {},
  onSubmit = () => {},
  title = "",
  message = "",
  submitButtonLabel = "Continue",
  cancelButtonLabel = "Cancel",
  initialFocusRef,
  initialFocusElement,
  hideCancelButton = false,
}) => {
  const submitButtonRef = useRef(null);
  const cancelButtonRef = useRef(null);

  const hasCustomFocusableElement = !!initialFocusRef || initialFocusElement;
  const initialFocusElementRef =
    initialFocusElement === FOCUSABLE_ELEMENTS.submit
      ? submitButtonRef
      : cancelButtonRef;

  return (
    <Modal
      {...{
        backdropClassName,
        className,
        closeButton,
        closeOnEsc,
        closeOnOutsideClick,
        isOpen,
        onClose,
        size,
      }}
      data-cy="alert-box"
      {...(hasCustomFocusableElement && {
        initialFocusRef: initialFocusRef || initialFocusElementRef,
      })}
    >
      <Modal.Header>
        <Typography data-cy="alert-title" style="h2">
          {title}
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography data-cy="alert-message" lineHeight="normal" style="body2">
          {message}
        </Typography>
      </Modal.Body>
      <Modal.Footer className="neeto-ui-gap-2 neeto-ui-flex neeto-ui-justify-end neeto-ui-items-center">
        {!hideCancelButton && (
          <Button
            data-cy="alert-cancel-button"
            label={cancelButtonLabel}
            ref={cancelButtonRef}
            style="tertiary"
            onClick={onClose}
          />
        )}
        <Button
          data-cy="alert-submit-button"
          disabled={!isOpen}
          label={submitButtonLabel}
          loading={isSubmitting}
          ref={submitButtonRef}
          style="danger"
          onClick={onSubmit}
        />
      </Modal.Footer>
    </Modal>
  );
};

Alert.propTypes = {
  /**
   * To specify the size of the Alert.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify whether the Alert is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the Alert is closed.
   */
  onClose: PropTypes.func,
  /**
   * To specify the callback which will be invoked when the Alert is submitted.
   */
  onSubmit: PropTypes.func,
  /**
   * To provide title to the Alert.
   */
  title: PropTypes.string,
  /**
   * To provide description to the Alert.
   */
  message: PropTypes.node,
  /**
   * To add loading state to submit button
   */
  isSubmitting: PropTypes.bool,
  /**
   * To provide external classNames to the Alert.
   */
  className: PropTypes.string,
  /**
   * To close the Alert on pressing the `Esc` key.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the close button of the Alert should be displayed or not.
   */
  closeButton: PropTypes.bool,
  /**
   * To provide label to the submit button.
   */
  submitButtonLabel: PropTypes.string,
  /**
   * To provide label to the cancel button.
   */
  cancelButtonLabel: PropTypes.string,
  /**
   * To add custom classes to Backdrop component.
   */
  backdropClassName: PropTypes.string,
  /**
   * To close on clicking outside the Alert content.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * To specify the ref of the element which will receive focus when the Alert is opened.
   * If not specified, the focus will be set to the submit button inside the Alert.
   * */
  initialFocusRef: PropTypes.object,
  /**
   * To specify the element which will receive focus when the Alert is opened.
   */
  initialFocusElement: PropTypes.oneOf(Object.values(FOCUSABLE_ELEMENTS)),
  /**
   * To hide the cancel button
   */
  hideCancelButton: PropTypes.bool,
};

export default Alert;
