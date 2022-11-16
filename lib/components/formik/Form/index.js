import React, { forwardRef, useState } from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

import FormWrapper from "./FormWrapper";

const Form = forwardRef(
  ({ className, children, formikProps, formProps }, ref) => {
    const [hasFormSubmitted, setHasFormSubmitted] = useState(false);
    return (
      <Formik
        {...formikProps}
        validateOnBlur={formikProps?.validateOnBlur && hasFormSubmitted}
        validateOnChange={formikProps?.validateOnChange && hasFormSubmitted}
      >
        {(props) => (
          <FormWrapper
            ref={ref}
            formProps={formProps}
            className={className}
            onSubmit={formikProps?.onSubmit}
            setHasFormSubmitted={setHasFormSubmitted}
          >
            {typeof children === "function" ? children(props) : children}
          </FormWrapper>
        )}
      </Formik>
    );
  }
);

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
};

export default Form;
