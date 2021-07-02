import React from "react";
import Modal from "../Modal";
import { useFormikContext } from "formik";
import { useNavPrompt } from "react-router-nav-prompt";

export default function NavigationHandler({ isDirty = false }) {
  const formikContext = useFormikContext();
  const shouldBlock =
    isDirty || (formikContext ? Boolean(formikContext.dirty) : false);
  const { blocked, hidePrompt, navigate } = useNavPrompt({ shouldBlock });
  if (blocked) {
    return (
      <Modal
        isOpen
        size="small"
        autoHeight
        showFooter
        submitButtonProps={{
          style: "danger",
          label: "Continue anyway",
          onClick: navigate,
        }}
        onClose={hidePrompt}
      >
        <div className="flex">
          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-red-100 rounded-full">
            <i className="text-red-500 ri-alarm-warning-fill ri-lg"></i>
          </div>

          <div className="ml-4">
            <h3 className="mb-2 text-lg font-medium text-gray-700" data-cy="block-navigation-alert-title">
              You have unsaved changes!
            </h3>
            <div className="text-sm leading-5 text-gray-500" data-cy="block-navigation-alert-message">
              Are you sure you want to continue? All of your unsaved changes
              will be lost.
            </div>
          </div>
        </div>
      </Modal>
    );
  }
  return null;
}
