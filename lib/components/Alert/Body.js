import React from "react";

import Button from "../Button";
import Typography from "../Typography";

const Body = ({
  title,
  message,
  submitButtonLabel,
  cancelButtonLabel,
  onSubmit,
  onClose,
  isSubmitting,
}) => (
  <>
    <div className="neeto-ui-modal__header" data-cy="alert-title">
      {title && <Typography style="h2">{title}</Typography>}
    </div>
    <div className="neeto-ui-modal__body" data-cy="alert-message">
      <Typography style="body2" lineHeight="normal">
        {message}
      </Typography>
    </div>
    <div className="space-x-2 neeto-ui-alert__footer">
      <Button
        style="danger"
        size="large"
        data-cy="alert-submit-button"
        label={submitButtonLabel}
        onClick={onSubmit}
        loading={isSubmitting}
      />
      <Button
        style="text"
        size="large"
        data-cy="alert-cancel-button"
        label={cancelButtonLabel}
        onClick={onClose}
      />
    </div>
  </>
);

export default Body;