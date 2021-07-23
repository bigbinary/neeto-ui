import React from "react";
import Modal from "./Modal";
import classnames from "classnames";

const ALERT_STYLE_BACKGROUND = {
  danger: "bg-red-50",
  info: "bg-blue-50",
  warning: "bg-yellow-50",
};

const ALERT_BUTTON_STYLE = {
  danger: "danger",
  info: "primary",
  warning: "primary",
};

export default function Alert({
  style = "danger",
  icon = "ri-alert-line text-red-500",
  isOpen = false,
  onClose,
  title,
  message,
  submitButtonProps,
  cancelButtonProps,
  hideConfirmation = false,
  confirmationText = "",
  ...otherProps
}) {
  return (
    <Modal
      size="small"
      isOpen={isOpen}
      onClose={onClose}
      autoHeight
      showFooter
      submitButtonProps={{
        style: ALERT_BUTTON_STYLE[style],
        label: "Proceed",
        ...submitButtonProps,
      }}
      cancelButtonProps={{
        style: "secondary",
        label: "Cancel",
        onClick: onClose,
        ...cancelButtonProps,
      }}
      {...otherProps}
    >
      <div className="nui-alert__wrapper">
        <div
          className={classnames(
            "nui-alert__icon",
            ALERT_STYLE_BACKGROUND[style]
          )}
        >
          <i className={classnames([icon, "ri-lg"])}></i>
        </div>

        <div className="nui-alert__content">
          <h3 data-cy="alert-title">{title}</h3>
          <p data-cy="alert-message">{message}</p>
          {!hideConfirmation && (
            <p data-cy="alert-confirmation-text">
              {confirmationText || "Are you sure you want to continue?"}
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
}
