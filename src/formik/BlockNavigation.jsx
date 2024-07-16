/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */
import React from "react";

import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Alert from "components/Alert";
import { useNavPrompt } from "hooks";
import { getLocale } from "utils";

const LOCALE = {
  alertMessage:
    "All of your unsaved changes will be lost. This can't be undone.",
  submitButtonLabel: "Discard changes",
  alertTitle: "You have unsaved changes",
};

const BlockNavigation = ({ isDirty = false, ...otherProps }) => {
  const { t, i18n } = useTranslation();
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
      message={getLocale({
        i18n,
        translationKey: "neetoui.blockNavigation.alertMessage",
        defaultValue: LOCALE.alertMessage,
        t,
      })}
      submitButtonLabel={getLocale({
        i18n,
        translationKey: "neetoui.blockNavigation.submitButtonLabel",
        defaultValue: LOCALE.submitButtonLabel,
        t,
      })}
      title={getLocale({
        i18n,
        translationKey: "neetoui.blockNavigation.alertTitle",
        defaultValue: LOCALE.alertTitle,
        t,
      })}
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
