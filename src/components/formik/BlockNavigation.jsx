import React from "react";

import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import Alert from "components/Alert";
import { useNavPrompt } from "hooks";

const BlockNavigation = ({ isDirty = false }) => {
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
      message="Are you sure you want to continue? All of your unsaved changes will be lost."
      title="You have unsaved changes!"
      onClose={hidePrompt}
      onSubmit={continueAction}
    />
  );
};

BlockNavigation.propTypes = {
  isDirty: PropTypes.bool,
};

export default BlockNavigation;
