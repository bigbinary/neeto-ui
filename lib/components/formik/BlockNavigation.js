import React from "react";
import Alert from "../Alert";
import { useFormikContext } from "formik";
import { useNavPrompt } from "react-router-nav-prompt";

export default function NavigationHandler({ isDirty = false }) {
  const formikContext = useFormikContext();
  const shouldBlock =
    isDirty || (formikContext ? Boolean(formikContext.dirty) : false);
  const { blocked, hidePrompt, navigate } = useNavPrompt({ shouldBlock });
  return (
    <Alert
      isOpen={blocked}
      onSubmit={navigate}
      onClose={hidePrompt}
      title="You have unsaved changes!"
      message="Are you sure you want to continue? All of your unsaved changes will be lost."
    />
  );
}
