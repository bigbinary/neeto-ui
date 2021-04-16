import React from "react";
import Button from "../Button";
import { useFormikContext } from "formik";
import classnames from 'classnames';


const ActionBlock = ({ className, submitButtonProps, cancelButtonProps }) => {
  const { handleReset, handleSubmit, isSubmitting } = useFormikContext();
  return (
    <div
      className={classnames([
        "flex flex-row items-center justify-end",
        className,
      ])}
    >
      <Button
        style="secondary"
        label="Cancel"
        className="mr-4"
        onClick={handleReset}
        data-test-id="cancel-button"
        data-cy="cancel-button"
        {...cancelButtonProps}
      />

      <Button
        style="primary"
        label="Save Changes"
        icon="ri-save-3-fill"
        loading={isSubmitting}
        onClick={handleSubmit}
        data-test-id="save-changes-button"
        data-cy="save-changes-button"
        {...submitButtonProps}
      />
    </div>
  );
};

export default ActionBlock;
