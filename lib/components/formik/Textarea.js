import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import Textarea from "../Textarea";

function FormikTextarea({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form: { errors }}) => (
        <Textarea error={errors[field.name]} {...rest} {...field} />
      )}
    </Field>
  );
}

FormikTextarea.propTypes = {
  name: PropTypes.string
};

export default FormikTextarea;
