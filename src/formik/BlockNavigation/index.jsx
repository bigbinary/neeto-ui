/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */
import React from "react";

import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import { useNavPrompt } from "hooks";

import Alert from "./Alert";

const BlockNavigation = ({ isDirty = false, ...otherProps }) => {
  const formikContext = useFormikContext();
  const shouldBlock =
    isDirty || (Boolean(formikContext) && Boolean(formikContext.dirty));

  const { isBlocked, continueNavigation, hidePrompt } = useNavPrompt({
    shouldBlock,
  });

  const handleDiscardChanges = () => {
    if (formikContext) formikContext.resetForm();
    hidePrompt();
    continueNavigation();
  };

  const handleSaveChanges = () => {
    if (formikContext?.isValid) {
      formikContext.submitForm();
      continueNavigation();
    } else formikContext?.setTouched(formikContext.errors);

    hidePrompt();
  };

  return (
    <Alert
      isOpen={isBlocked}
      onClose={hidePrompt}
      onDiscardChanges={handleDiscardChanges}
      onSaveChanges={handleSaveChanges}
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
