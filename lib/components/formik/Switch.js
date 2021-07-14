import React from "react";
import { Field } from "formik";

import Switch from "../Switch";

export default function FormikSwitch({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, meta: { error } }) => (
        <Switch
          name={name}
          checked={field.value}
          {...rest}
          {...field}
          error={error}
        />
      )}
    </Field>
  );
}
