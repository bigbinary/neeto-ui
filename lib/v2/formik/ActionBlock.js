import React from "react";
import Button from "../Button";
import { useFormikContext } from "formik";
import classnames from "classnames";

const ActionBlock = ({ className, submitButtonProps, cancelButtonProps }) => {
  const { handleReset, handleSubmit, isSubmitting } = useFormikContext();
  return (
    <div className={classnames(["nui-action-block__wrapper", className])}>
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

export default ActionBlock;
