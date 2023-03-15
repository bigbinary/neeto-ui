import React, { useEffect, useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, useFormikContext } from "formik";

const FormWrapper = forwardRef(
  (
    { className, formProps, children, onSubmit, setEnableChangeAndBlurValidation },
    formRef
  ) => {
    const {
      submitCount,
      values,
      validateForm,
      setErrors,
      setTouched,
      ...formikBag
    } = useFormikContext();

    const { dirty: isFormDirty, isSubmitting } = formikBag;

    const handleKeyDown = useCallback(
      (event) => {
        const isEventFromEditorOrTextarea =
          event.target.tagName === "TEXTAREA" || event.target.editor;

        if (event.key !== "Enter") return;
        if (isEventFromEditorOrTextarea && !event.metaKey) return;

        event.preventDefault();

        if (event.shiftKey) {
          return;
        } else {
          if (!isFormDirty || isSubmitting) return;

          validateForm().then((errors) => {
            setEnableChangeAndBlurValidation(true);
            if (Object.keys(errors).length > 0) {
              setErrors(errors);
              setTouched(errors);
            } else {
              onSubmit(values, formikBag);
            }
          });
        }
      },
      [values, validateForm, setErrors, setTouched, onSubmit, isFormDirty, isSubmitting]
    );

    useEffect(() => {
      if (submitCount === 1) {
        setEnableChangeAndBlurValidation(true);
      }
    }, [submitCount]);

    return (
      <FormikForm
        onKeyDown={handleKeyDown}
        noValidate
        className={className}
        ref={formRef}
        data-testid="neeto-ui-form-wrapper"
        {...formProps}
      >
        {children}
      </FormikForm>
    );
  }
);

FormWrapper.propTypes = {
  children: PropTypes.node,
  formProps: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default FormWrapper;
