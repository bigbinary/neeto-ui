import React, { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, useFormikContext } from "formik";

const FormWrapper = ({ formProps, children, onSubmit }) => {
  const formWrapperRef = useRef(null);
  const { values, validateForm, setErrors, setTouched } = useFormikContext();

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key !== "Enter") return;

      if (event.shiftKey) {
        event.preventDefault();
        return;
      } else {
        validateForm().then((errors) => {
          if (Object.keys(errors).length > 0) {
            setErrors(errors);
            setTouched(errors);
          } else {
            onSubmit(values);
          }
        });
        event.preventDefault();
      }
    },
    [values, validateForm, setErrors, setTouched, onSubmit]
  );

  useEffect(() => {
    formWrapperRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      formWrapperRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmit, values]);

  return (
    <FormikForm ref={formWrapperRef} noValidate {...formProps}>
      {children}
    </FormikForm>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node,
  formProps: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default FormWrapper;
