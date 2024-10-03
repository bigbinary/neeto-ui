/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */
import React, { useRef } from "react";

import { useTranslation } from "react-i18next";

import Button from "components/Button";
import Modal from "components/Modal";
import Typography from "components/Typography";
import { getLocale } from "utils";

const Alert = ({ isOpen = false, onClose, onSubmit, onDiscardChanges }) => {
  const { t, i18n } = useTranslation();

  const submitButtonRef = useRef(null);

  const cancelButtonLabel = getLocale(
    i18n,
    t,
    "neetoui.blockNavigation.cancelButtonLabel"
  );

  const submitButtonLabel = getLocale(
    i18n,
    t,
    "neetoui.blockNavigation.submitButtonLabel"
  );

  return (
    <Modal
      {...{ isOpen, onClose }}
      closeButton
      closeOnEsc
      closeOnOutsideClick
      data-cy="alert-box"
      initialFocusRef={submitButtonRef}
      size="medium"
    >
      <Modal.Header>
        <Typography data-cy="alert-title" style="h2">
          {getLocale(i18n, t, "neetoui.blockNavigation.alertTitle")}
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography data-cy="alert-message" lineHeight="normal" style="body2">
          {getLocale(i18n, t, "neetoui.blockNavigation.alertMessage")}
        </Typography>
      </Modal.Body>
      <Modal.Footer className="neeto-ui-gap-2 neeto-ui-flex neeto-ui-justify-end neeto-ui-items-center">
        <Button
          data-cy="alert-cancel-button"
          label={cancelButtonLabel}
          style="danger"
          onClick={onDiscardChanges}
        />
        <Button
          data-cy="alert-submit-button"
          label={submitButtonLabel}
          ref={submitButtonRef}
          style="primary"
          onClick={onSubmit}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default Alert;
