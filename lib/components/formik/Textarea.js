import React from "react";
import { Field } from "formik";

import Textarea from "../Textarea";

export default function FormikTextarea({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form: { errors }, meta }) => (
        <Textarea error={errors[field.name]} {...rest} {...field} />
      )}
    </Field>
  );
}
