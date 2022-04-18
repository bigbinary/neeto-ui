import React, { forwardRef } from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import Textarea from "../Textarea";

const FormikTextarea = forwardRef(({ name, ...rest }, ref) => (
  <Field name={name}>
    {({ field, meta }) => (
      <Textarea
        ref={ref}
        error={meta.touched && meta.error}
        {...field}
        {...rest}
      />
    )}
  </Field>
));

FormikTextarea.propTypes = {
  /**
   * The name of the textarea field.
   */
  name: PropTypes.string,
};

export default FormikTextarea;
