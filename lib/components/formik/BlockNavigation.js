import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Alert from "../Alert";

const NavigationHandler = ({ isDirty = false }) => {
  const formikContext = useFormikContext();
  const shouldBlock =
    isDirty || (Boolean(formikContext) && Boolean(formikContext.dirty));

  const [showPrompt, setShowPrompt] = useState(false);

  const history = useHistory();
  const unblockRef = useRef();

  const continueAction = () => {
    if (showPrompt) {
      formikContext && formikContext.resetForm();
      setShowPrompt(false);
      unblockRef.current?.();
    }
  };

  const handleNavigation = (action, transition) => {
    switch (action) {
    case "PUSH":
      history.push(transition);
      break;
    case "REPLACE":
      history.replace(transition);
      break;
    case "POP":
      history.goBack();
      break;
    }
  };

  useEffect(() => {
    const unblock = history.block((transition, action) => {
      if (shouldBlock) {
        setShowPrompt(true);
        unblockRef.current = () => {
          unblock();
          handleNavigation(action, transition);
        };
        return false;
      }

      return undefined;
    });

    return () => unblock();
  }, [shouldBlock]);

  return (
    <Alert
      isOpen={showPrompt}
      title="You have unsaved changes!"
      message="Are you sure you want to continue? All of your unsaved changes will be lost."
      onClose={() => setShowPrompt(false)}
      onSubmit={continueAction}
    />
  );
};

NavigationHandler.propTypes = {
  isDirty: PropTypes.bool,
};

export default NavigationHandler;
