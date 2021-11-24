import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { Check } from "@bigbinary/neeto-icons";

import Button from "../Button";

const ActionBlock = ({ className, submitButtonProps, cancelButtonProps }) => {
  const { handleReset, handleSubmit, isSubmitting } = useFormikContext();
  return (
    <div className={classnames(["neeto-ui-action-block__wrapper", className])}>
      <Button
        style="primary"
        label="Save Changes"
        size="large"
        icon={Check}
        loading={isSubmitting}
        onClick={handleSubmit}
        data-test-id="save-changes-button"
        data-cy="save-changes-button"
        {...submitButtonProps}
      />
      <Button
        style="text"
        label="Cancel"
        size="large"
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
