import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

import FormWrapper from "./FormWrapper";

const Form = ({ children, formikProps, formProps }) => {
  return (
    <Formik {...formikProps}>
      {(props) => (
        <FormWrapper
          props={props}
          formProps={formProps}
          onSubmit={formikProps?.onSubmit}
        >
          {typeof children === "function" ? children(props) : children}
        </FormWrapper>
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
