import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm } from "formik";

const Form = ({ children, formikProps, formProps }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && e.key === "Enter") {
        formikProps.onSubmit();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [formikProps]);

  return (
    <Formik {...formikProps}>
      {(props) => (
        <FormikForm noValidate {...formProps}>
          {typeof children === "function" ? children(props) : children}
        </FormikForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  formikProps: PropTypes.object,
  formProps: PropTypes.object,
};

export default Form;
