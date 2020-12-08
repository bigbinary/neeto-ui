import React from "react";
import Button from "../Button";
import { useFormikContext } from "formik";


const ActionBlock = props => {
  const { handleReset, handleSubmit, isSubmitting } = useFormikContext();

  return (
    <div className="flex flex-row items-center justify-end">
      <Button
        style="secondary"
        label="Reset changes"
        className="mr-4"
        onClick={handleReset}
        dataTestId={props["reset-data-test-id"] || "reset-changes-button"}
      />

      <Button
        style="primary"
        label="Save Changes"
        icon="ri-save-3-fill"
        loading={isSubmitting}
        onClick={handleSubmit}
        dataTestId={props["save-data-test-id"] || "save-changes-button"}
      />
    </div>
  );
};

export default ActionBlock;
