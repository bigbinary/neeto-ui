import React, { forwardRef, useRef } from "react";

import { Formik } from "formik";
import PropTypes from "prop-types";

import FormWrapper from "./FormWrapper";
import { getFieldsWithServerError } from "./ScrollToErrorField/utils";

const Form = forwardRef(
  (
    { className, children, formikProps, formProps, scrollToErrorField = false },
    ref
  ) => {
    const formikRef = useRef();

    const handleSubmit = (values, actions) => {
      const fieldsWithServerError = getFieldsWithServerError(
        formikRef.current?.status
      );

      if (fieldsWithServerError.length > 0) {
        actions.setSubmitting(false);

        return;
      }

      formikProps.onSubmit(values, actions);
    };

    return (
      <Formik innerRef={formikRef} {...formikProps} onSubmit={handleSubmit}>
        {props => (
          <FormWrapper {...{ className, formProps, ref, scrollToErrorField }}>
            {typeof children === "function" ? children(props) : children}
          </FormWrapper>
        )}
      </Formik>
    );
  }
);

Form.displayName = "Form";

Form.propTypes = {
  /**
   * Pass a function to render children or pass the children directly
   **/
  children: PropTypes.node,
  /**
   * Additional classnames to be passed to the form wrapper
   **/
  className: PropTypes.string,
  /**
   * Props to be passed to the Formik component like `initialValues`, `validationSchema`, `onSubmit`
   * Refer to the Formik docs for more details
   * https://formik.org/docs/api/formik
   **/
  formikProps: PropTypes.object,
  /**
   * Props to be passed to the form element like `className`.
   * Refer to the Formik docs for more details
   * https://formik.org/docs/api/form
   **/
  formProps: PropTypes.object,
  /**
   * Props to be passed for scrolling to error field on submit button click.
   **/
  scrollToErrorField: PropTypes.bool,
};

export default Form;
