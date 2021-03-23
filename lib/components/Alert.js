import React from "react";
import Modal from "./Modal";
import classnames from "classnames";

export default function Alert({
  icon = "ri-alert-line",
  isOpen = false,
  onClose,
  title,
  message,
  submitButtonProps,
  cancelButtonProps,
  hideConfirmation = false,
  info = false,
  confirmation,
  className,
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
            [
              "flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full",
              className,
            ],
            { "bg-red-100": !info }
          )}
        >
          <i
            className={classnames([icon, "ri-lg"], { "text-red-500": !info })}
          ></i>
        </div>

        <div className="ml-4">
          <h3 className="mb-2 text-lg font-medium text-gray-800">{title}</h3>
          <div className="mb-2 text-sm leading-5 text-gray-500">{message}</div>
          {!hideConfirmation && (
            <div className="text-sm leading-5 text-gray-500">
              {confirmation || "Are you sure you want to continue?"}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
