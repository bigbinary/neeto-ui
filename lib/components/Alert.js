import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import Typography from "./Typography";
import Modal from "./Modal";

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

  return (
    <Modal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      loading={loading}
      className={className}
      closeOnEsc={closeOnEsc}
      closeButton={closeButton}
      backdropClassName={backdropClassName}
      closeOnOutsideClick={closeOnOutsideClick}
    >
      <Modal.Header>
        <h2>{title}</h2>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          {message}
        </Typography>
      </Modal.Body>
      <Modal.Footer>
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
      </Modal.Footer>
    </Modal>
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

export default Alert;
