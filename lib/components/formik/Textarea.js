import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import Textarea from "../Textarea";

function FormikTextarea({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <Textarea error={meta.touched && meta.error} {...rest} {...field} />
      )}
    </Field>
  );
}

FormikTextarea.propTypes = {
  name: PropTypes.string,
};

export default FormikTextarea;
