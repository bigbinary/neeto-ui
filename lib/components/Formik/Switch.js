import React from "react";
import { Field } from "formik";

import Switch from "../Switch";

export default function FormikSwitch({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form: { errors }, meta }) => (
        <Switch
          name={name}
          error={errors[field.name]}
          checked={field.value}
          {...rest}
          {...field}
        />
      )}
    </Field>
  );
}
