import React from "react";
import { Field } from "formik";

import CheckboxField from "../Checkbox";

const Checkbox = ({ name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <CheckboxField checked={field.value} {...field} {...rest} />
      )}
    </Field>
  );
};

export default Checkbox;
