import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import Textarea from "../Textarea";

const FormikTextarea = React.forwardRef(({ name, ...rest }, ref) => (
  <Field name={name}>
    {({ field, meta }) => (
      <Textarea
        ref={ref}
        error={meta.touched && meta.error}
        {...rest}
        {...field}
      />
    )}
  </Field>
));

FormikTextarea.propTypes = {
  name: PropTypes.string,
};

export default FormikTextarea;
