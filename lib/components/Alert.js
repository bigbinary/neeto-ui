import React from "react";
import Modal from "./Modal";

export default function Alert({isOpen, title, message, confirmAction, cancelAction, confirmActionText, cancelActionText}) {
  return (
    <Modal
      isOpen={isOpen}
      size="small"
      autoHeight
      showFooter
      submitButtonProps={{
        style: "danger",
        label: confirmActionText || "Proceed",
        onClick: confirmAction
      }}
      cancelButtonProps={{
        style: "secondary",
        label: cancelActionText || "Cancel",
        onClick: cancelAction
      }}
      onClose={cancelAction}
    >
      <div className="flex">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-red-100 rounded-full">
          <i className="text-red-500 ri-alert-line ri-lg"></i>
        </div>

        <div className="ml-4">
          <h3 className="mb-2 text-lg font-medium text-gray-700">
            {title || "Delete"}
          </h3>
          <div className="text-sm leading-5 text-gray-500 mb-2">
            {message || "Delete Message"}
          </div>
          <div className="text-sm leading-5 text-gray-500">
            Are you sure?
          </div>
        </div>
      </div>
    </Modal>
  );
}
