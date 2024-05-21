import React from "react";

import classnames from "classnames";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import Button from "components/Button";

import SubmitButton from "./Button";

const POSITIONS = { left: "left", right: "right" };

const ActionBlock = ({
  className,
  submitButtonProps,
  cancelButtonProps,
  isSubmitting: isFormSubmitting,
  position = POSITIONS.left,
}) => {
  const {
    handleReset,
    isSubmitting: isFormikSubmitting,
    dirty,
  } = useFormikContext();

  const isSubmitting = isFormSubmitting ?? isFormikSubmitting;
  const isButtonPositionRight = position === POSITIONS.right;

  const cancelButton = (
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
  );

  const submitButton = (
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
  );

  return (
    <div
      className={classnames([
        "neeto-ui-action-block__wrapper",
        { "justify-end": isButtonPositionRight },
        className,
      ])}
    >
      {isButtonPositionRight ? (
        <>
          {cancelButton}
          {submitButton}
        </>
      ) : (
        <>
          {submitButton}
          {cancelButton}
        </>
      )}
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
  /**
   *  Determines the alignment of buttons in ActionBlock components. Set to `right` when using ActionBlock to right-align both buttons. Defaults to `left`, left-aligning both buttons.
   */
  position: PropTypes.oneOf(Object.values(POSITIONS)),
};

export default ActionBlock;
