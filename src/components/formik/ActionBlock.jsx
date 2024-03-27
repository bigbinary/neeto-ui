import React from "react";

import classnames from "classnames";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import Button from "components/Button";

import SubmitButton from "./Button";

const ActionBlock = ({
  className,
  submitButtonProps,
  cancelButtonProps,
  isSubmitting: isFormSubmitting,
}) => {
  const {
    handleReset,
    isSubmitting: isFormikSubmitting,
    dirty,
  } = useFormikContext();

  const isSubmitting = isFormSubmitting ?? isFormikSubmitting;

  return (
    <div className={classnames(["flex items-center gap-x-2", className])}>
      <SubmitButton
        data-cy="save-changes-button"
        data-test-id="save-changes-button"
        disabled={isSubmitting || !dirty}
        label="Save changes"
        loading={isSubmitting}
        style="primary"
        type="submit"
        {...submitButtonProps}
      />
      <Button
        data-cy="cancel-button"
        data-test-id="cancel-button"
        disabled={isSubmitting}
        label="Cancel"
        style="text"
        onClick={handleReset}
        onMouseDown={e => e.preventDefault()}
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
  /**
   *  Optional prop to specify the state of form submission, typically used to provide React Query mutation loading state. If not provided, Formik's `isSubmitting` prop is used.
   */
  isSubmitting: PropTypes.bool,
};

export default ActionBlock;
