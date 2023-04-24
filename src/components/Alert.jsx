import React from "react";

import PropTypes from "prop-types";

import Button from "./Button";
import Modal from "./Modal";
import Typography from "./Typography";

const SIZES = { small: "small", medium: "medium", large: "large" };

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
}) => (
  <Modal
    backdropClassName={backdropClassName}
    className={className}
    closeButton={closeButton}
    closeOnEsc={closeOnEsc}
    closeOnOutsideClick={closeOnOutsideClick}
    isOpen={isOpen}
    size={size}
    onClose={onClose}
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
    <Modal.Footer className="neeto-ui-gap-2 neeto-ui-flex neeto-ui-items-center">
      <Button
        data-cy="alert-submit-button"
        label={submitButtonLabel}
        loading={isSubmitting}
        style="danger"
        onClick={onSubmit}
      />
      <Button
        data-cy="alert-cancel-button"
        label={cancelButtonLabel}
        style="text"
        onClick={onClose}
      />
    </Modal.Footer>
  </Modal>
);

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
  message: PropTypes.string,
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
};

export default Alert;
