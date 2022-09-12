import React from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import useNavPrompt from "../../../hooks/useNavPrompt";
import Alert from "../../Alert";

const BlockNavigation = ({ isDirty = false }) => {
  const formikContext = useFormikContext();
  const shouldBlock =
    isDirty || (Boolean(formikContext) && Boolean(formikContext.dirty));

  const { isBlocked, continueNavigation, hidePrompt } = useNavPrompt({
    shouldBlock,
  });
  return (
    <Alert
      isOpen={isBlocked}
      title="You have unsaved changes!"
      message="Are you sure you want to continue? All of your unsaved changes will be lost."
      onClose={hidePrompt}
      onSubmit={continueNavigation}
    />
  );
};

BlockNavigation.propTypes = {
  isDirty: PropTypes.bool,
};

export default BlockNavigation;
