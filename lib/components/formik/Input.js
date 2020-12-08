import React from "react";
import { Field } from "formik";

import Input from "../Input";

export default function FormikInput({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <Input {...rest} {...field} error={meta.touched && meta.error} />
      )}
    </Field>
  );
}
