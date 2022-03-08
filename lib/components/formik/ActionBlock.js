import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

import Button from "../Button";

const ActionBlock = ({ className, submitButtonProps, cancelButtonProps }) => {
  const { handleReset, handleSubmit, isSubmitting, dirty } = useFormikContext();
  return (
    <div className={classnames(["neeto-ui-action-block__wrapper", className])}>
      <Button
        size="large"
        style="primary"
        label="Save Changes"
        loading={isSubmitting}
        disabled={isSubmitting || !dirty}
        onClick={handleSubmit}
        data-test-id="save-changes-button"
        data-cy="save-changes-button"
        {...submitButtonProps}
      />
      <Button
        size="large"
        style="text"
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
  /**
   * To specify additional classnames for action block.
   */
  className: PropTypes.string,
  /**
   *  To provide props for submit button.
   */
  submitButtonProps: PropTypes.object,
  /**
   *  To provide props for cancel button.
   */
  cancelButtonProps: PropTypes.object,
};

export default ActionBlock;
