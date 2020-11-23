import React from "react";
import { Field } from "formik";

import Input from "../Input";

export default function FormikInput({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => (
        <Input error={meta.touched && meta.error} {...rest} {...field} />
      )}
    </Field>
  );
}
