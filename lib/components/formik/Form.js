import React from "react";
import { Formik, Form as FormikForm } from "formik";
import PropTypes from "prop-types";

const Form = ({ children, formikProps, formProps }) => (
  <Formik {...formikProps}>
    {() => (
      <FormikForm noValidate {...formProps}>
        {children}
      </FormikForm>
    )}
  </Formik>
);

Form.propTypes = {
  children: PropTypes.node,
  formikProps: PropTypes.object,
  formProps: PropTypes.object,
};

export default Form;
