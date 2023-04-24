import React from "react";

import classnames from "classnames";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { equals } from "ramda";

import Button from "components/Button";

import SubmitButton from "./Button";

const ActionBlock = ({ className, submitButtonProps, cancelButtonProps }) => {
  const { handleReset, isSubmitting, values, initialValues } =
    useFormikContext();

  return (
    <div className={classnames(["neeto-ui-action-block__wrapper", className])}>
      <SubmitButton
        data-cy="save-changes-button"
        data-test-id="save-changes-button"
        label="Save changes"
        style="primary"
        type="submit"
        {...submitButtonProps}
      />
      <Button
        data-cy="cancel-button"
        data-test-id="cancel-button"
        disabled={isSubmitting || equals(values, initialValues)}
        label="Cancel"
        style="text"
        onClick={handleReset}
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
