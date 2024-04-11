import React, { useCallback, forwardRef, useRef } from "react";

import { Form as FormikForm, useFormikContext } from "formik";
import PropTypes from "prop-types";

import ScrollToErrorField from "./ScrollToErrorField";
import { scrollToError } from "./ScrollToErrorField/utils";

const FormWrapper = forwardRef(
  ({ className, formProps, children, onSubmit, scrollToErrorField }, ref) => {
    const { values, validateForm, setErrors, setTouched, ...formikBag } =
      useFormikContext();

    const { dirty: isFormDirty, isSubmitting } = formikBag;

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

          if (Object.keys(errors).length > 0) {
            setErrors(errors);
            setTouched(errors);
            scrollToErrorField && scrollToError(formRef, errors);
          } else {
            onSubmit(values, formikBag);
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
        values,
        validateForm,
        setErrors,
        setTouched,
        onSubmit,
        isFormDirty,
        isSubmitting,
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
  onSubmit: PropTypes.func,
  scrollToErrorField: PropTypes.bool,
};

export default FormWrapper;
