import React from "react";
import Modal from "./Modal";
import classnames from "classnames";

const ALERT_STYLE_BACKGROUND = {
  danger: "bg-red-50",
  info: "bg-blue-50",
  warning: "bg-yellow-50"
}

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
        style: "danger",
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
      <div className="flex">
        <div
          className={classnames(
            "flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full",
            ALERT_STYLE_BACKGROUND[style]
          )}
        >
          <i className={classnames([icon, "ri-lg"])}></i>
        </div>

        <div className="ml-4">
          <h3
            data-cy="alert-title"
            className="mb-2 text-lg font-medium text-gray-800"
          >
            {title}
          </h3>
          <div
            data-cy="alert-message"
            className="mb-2 text-sm leading-5 text-gray-600"
          >
            {message}
          </div>
          {!hideConfirmation && (
            <div
              data-cy="alert-confirmation-text"
              className="text-sm leading-5 text-gray-600"
            >
              {confirmationText || "Are you sure you want to continue?"}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
