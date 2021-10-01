import React from "react";
import Button from "../Button";
import { useFormikContext } from "formik";
import classnames from "classnames";
import PropTypes from "prop-types";

const ActionBlock = ({ className, submitButtonProps, cancelButtonProps }) => {
  const { handleReset, handleSubmit, isSubmitting } = useFormikContext();
  return (
    <div className={classnames(["neeto-ui-action-block__wrapper", className])}>
      <Button
        style="primary"
        label="Save"
        icon="ri-check-line"
        loading={isSubmitting}
        onClick={handleSubmit}
        data-test-id="save-changes-button"
        data-cy="save-changes-button"
        {...submitButtonProps}
      />
      <Button
        style="link"
        label="Cancel"
        onClick={handleReset}
        data-test-id="cancel-button"
        data-cy="cancel-button"
        {...cancelButtonProps}
      />
    </div>
  );
};

ActionBlock.propTypes = {
  className: PropTypes.string,
  submitButtonProps: PropTypes.object,
  cancelButtonProps: PropTypes.object,
};

export default ActionBlock;
