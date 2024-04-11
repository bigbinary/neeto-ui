import React from "react";

import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import Alert from "components/Alert";
import { useNavPrompt } from "hooks";

const BlockNavigation = ({ isDirty = false, ...otherProps }) => {
  const formikContext = useFormikContext();
  const shouldBlock =
    isDirty || (Boolean(formikContext) && Boolean(formikContext.dirty));

  const { isBlocked, continueNavigation, hidePrompt } = useNavPrompt({
    shouldBlock,
  });

  const continueAction = () => {
    if (formikContext) formikContext.resetForm();
    continueNavigation();
  };

  return (
    <Alert
      isOpen={isBlocked}
      message="All of your unsaved changes will be lost. This can't be undone."
      submitButtonLabel="Discard changes"
      title="You have unsaved changes"
      onClose={hidePrompt}
      onSubmit={continueAction}
      {...otherProps}
    />
  );
};

BlockNavigation.propTypes = {
  isDirty: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  submitButtonLabel: PropTypes.string,
};

export default BlockNavigation;
