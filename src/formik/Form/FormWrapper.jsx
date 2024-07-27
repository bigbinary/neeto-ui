import React, { useCallback, forwardRef, useRef } from "react";

import { Form as FormikForm, useFormikContext } from "formik";
import PropTypes from "prop-types";

import ScrollToErrorField from "./ScrollToErrorField";
import {
  getFieldsWithServerError,
  scrollToError,
} from "./ScrollToErrorField/utils";

const FormWrapper = forwardRef(
  ({ className, formProps, children, scrollToErrorField }, ref) => {
    const { validateForm, setErrors, setTouched, submitForm, ...formikBag } =
      useFormikContext();

    const { dirty: isFormDirty, isSubmitting, status } = formikBag;

    const formRefForScrollToErrorField = useRef();

    const formRef = ref || formRefForScrollToErrorField;

    const handleKeyDown = useCallback(
      async event => {
        const isEventFromEditorOrTextarea =
          event.target.tagName === "TEXTAREA" || event.target.editor;

        if (event.key !== "Enter") return;

        if (isEventFromEditorOrTextarea && !event.metaKey) return;

        event.preventDefault();

        if (event.shiftKey) return;

        if (!isFormDirty || isSubmitting) return;

        try {
          const errors = await validateForm();
          const fieldStatuses = getFieldsWithServerError(status);

          if (
            Object.keys(errors).length > 0 ||
            Object.keys(fieldStatuses).length > 0
          ) {
            setErrors(errors);
            setTouched({ ...errors, ...status });
            scrollToErrorField && scrollToError(formRef, errors, status);
          } else {
            submitForm();
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(
            "An unhandled error was caught from validateForm()",
            error
          );
        }
      },
      [
        validateForm,
        setErrors,
        setTouched,
        isFormDirty,
        isSubmitting,
        submitForm,
        status,
      ]
    );

    return (
      <FormikForm
        {...{ className }}
        noValidate
        data-testid="neeto-ui-form-wrapper"
        ref={formRef}
        onKeyDown={handleKeyDown}
        {...formProps}
      >
        {scrollToErrorField && <ScrollToErrorField {...{ formRef }} />}
        {children}
      </FormikForm>
    );
  }
);

FormWrapper.displayName = "FormWrapper";

FormWrapper.propTypes = {
  children: PropTypes.node,
  formProps: PropTypes.object,
  scrollToErrorField: PropTypes.bool,
};

export default FormWrapper;
