import React, { useCallback, forwardRef } from "react";

import { Form as FormikForm, useFormikContext } from "formik";
import PropTypes from "prop-types";

const FormWrapper = forwardRef(
  ({ className, formProps, children, onSubmit }, formRef) => {
    const { values, validateForm, setErrors, setTouched, ...formikBag } =
      useFormikContext();

    const { dirty: isFormDirty, isSubmitting } = formikBag;

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
          } else {
            onSubmit(values, formikBag);
          }
        } catch {}
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
        noValidate
        className={className}
        data-testid="neeto-ui-form-wrapper"
        ref={formRef}
        onKeyDown={handleKeyDown}
        {...formProps}
      >
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
};

export default FormWrapper;
