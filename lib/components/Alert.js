import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import Typography from "./Typography";
import Modal from "./Modal";

const noop = () => {};

const SIZES = {
  xs: "xs",
  sm: "sm",
  md: "md",
};

const Alert = ({
  size = SIZES.sm,
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
   * To provide Title to the Alert.
   */
  title: PropTypes.string,
  /**
   * To provide Description to the Alert.
   */
  message: PropTypes.string,
  /**
   * To specify whether the Alert is in loading state.
   */
  loading: PropTypes.bool,
  /**
   * To add loading state to Submit button
   */
  isSubmitting: PropTypes.bool,
  /**
   * To provide external classNames to the Alert.
   */
  className: PropTypes.string,
  /**
   * To close the Alert on pressing the Esc key.
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
