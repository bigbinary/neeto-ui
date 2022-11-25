import React, { useEffect, useCallback, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, useFormikContext } from "formik";

const FormWrapper = forwardRef(
  ({ className, formProps, children, onSubmit, setHasFormSubmitted }, ref) => {
    const internalFormWrapperRef = useRef(null);
    const formRef = ref || internalFormWrapperRef;

    const {
      submitCount,
      values,
      validateForm,
      setErrors,
      setTouched,
      ...formikBag
    } = useFormikContext();

    const isFormDirty = formikBag.dirty;

    const handleKeyDown = useCallback(
      (event) => {
        if (event.key !== "Enter") return;

        event.preventDefault();

        if (event.shiftKey) {
          return;
        } else {
          if (!isFormDirty) return;

          validateForm().then((errors) => {
            if (Object.keys(errors).length > 0) {
              setErrors(errors);
              setTouched(errors);
            } else {
              onSubmit(values, formikBag);
            }
          });
        }
      },
      [values, validateForm, setErrors, setTouched, onSubmit, isFormDirty]
    );

    useEffect(() => {
      if (submitCount === 1) {
        setHasFormSubmitted(true);
      }
    }, [submitCount]);

    return (
      <div>
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
      </div>
    );
  }
);

FormWrapper.propTypes = {
  children: PropTypes.node,
  formProps: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default FormWrapper;
