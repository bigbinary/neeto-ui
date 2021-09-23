import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import Input from "../Input";

function FormikInput({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <Input {...field} error={meta.touched && meta.error} {...rest} />
      )}
    </Field>
  );
}

FormikInput.propTypes = {
  name: PropTypes.string,
};

export default FormikInput;
