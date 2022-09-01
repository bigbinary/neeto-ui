import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

import SubmitButton from "./Button";
import Button from "../Button";
import { equals } from "ramda";

const ActionBlock = ({ className, submitButtonProps, cancelButtonProps }) => {
  const {
    handleReset,
    isSubmitting,
    values,
    initialValues,
  } = useFormikContext();

  return (
    <div className={classnames(["neeto-ui-action-block__wrapper", className])}>
      <SubmitButton
        style="primary"
        label="Save Changes"
        type="submit"
        data-test-id="save-changes-button"
        data-cy="save-changes-button"
        {...submitButtonProps}
      />
      <Button
        style="text"
        label="Cancel"
        onClick={handleReset}
        disabled={isSubmitting || equals(values, initialValues)}
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
