import React, { useEffect } from "react";
import { Button } from "NitroUI";
import { useFormikContext } from "formik";

const ActionBlock = () => {
  const { handleReset, handleSubmit, isSubmitting } = useFormikContext();
  return (
    <div className="flex flex-row items-center justify-end">
      <Button
        style="secondary"
        label="Reset changes"
        className="mr-4"
        onClick={handleReset}
      />
      <Button
        style="primary"
        label="Save Changes"
        icon="ri-save-3-fill"
        loading={isSubmitting}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ActionBlock;
