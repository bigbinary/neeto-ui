import React from "react";
import PropTypes from "prop-types";
import { useHotkeys } from "react-hotkeys-hook";
import { Formik, Form as FormikForm } from "formik";

const Form = ({ children, formikProps, formProps }) => {
  useHotkeys(
    "ctrl+enter, cmd+enter",
    (event) => {
      event.preventDefault();
      formikProps.onSubmit();
    },
    [formikProps.onSubmit]
  );

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
