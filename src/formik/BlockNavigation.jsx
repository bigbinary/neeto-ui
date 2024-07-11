/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */
import React from "react";

import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Alert from "components/Alert";
import { useNavPrompt } from "hooks";

const BlockNavigation = ({ isDirty = false, ...otherProps }) => {
  const { t } = useTranslation();
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
      message={t("neetoui.blockNavigation.alertMessage")}
      submitButtonLabel={t("neetoui.blockNavigation.submitButtonLabel")}
      title={t("neetoui.blockNavigation.alertTitle")}
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
