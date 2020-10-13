import React from "react";
import { Field } from "formik";

import Input from "../Input";

export default function FormikInput({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form: { errors }, meta }) => (
        <Input error={errors[field.name]} {...rest} {...field} />
      )}
    </Field>
  );
}
