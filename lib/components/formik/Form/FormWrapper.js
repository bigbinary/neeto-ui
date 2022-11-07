import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, useFormikContext } from "formik";

const FormWrapper = ({ formProps, children, onSubmit }) => {
  const { values, validateForm, setErrors } = useFormikContext();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        validateForm(values).then((errors) => {
          if (Object.keys(errors).length === 0) {
            onSubmit(values);
          } else {
            setErrors(errors);
          }
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmit, values]);

  return (
    <FormikForm noValidate {...formProps}>
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
