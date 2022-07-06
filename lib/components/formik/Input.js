import React, { forwardRef } from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import Input from "../Input";

const FormikInput = forwardRef(({ name, ...rest }, ref) => (
  <Field name={name}>
    {({ field, meta }) => (
      <Input
        ref={ref}
        {...field}
        error={meta.touched ? meta.error : ""}
        {...rest}
      />
    )}
  </Field>
));

FormikInput.propTypes = {
  /**
   * The name of the input field.
   */
  name: PropTypes.string,
};

export default FormikInput;
