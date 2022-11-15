import React, { forwardRef, useState } from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

import FormWrapper from "./FormWrapper";

const Form = forwardRef(
  ({ className, children, formikProps, formProps }, ref) => {
    const [didSubmitForm, setDidSubmitForm] = useState(false);
    return (
      <Formik {...formikProps}
        validateOnBlur={formikProps.validateOnBlur && didSubmitForm}
        validateOnChange={formikProps.validateOnChange && didSubmitForm}>
        {(props) => (
          <FormWrapper
            ref={ref}
            formProps={formProps}
            className={className}
            onSubmit={formikProps?.onSubmit}
            setDidSubmitForm={setDidSubmitForm}
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
