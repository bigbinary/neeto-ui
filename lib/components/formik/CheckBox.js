import React from "react";
import { Field } from "formik";

import CheckBoxField from "../Checkbox";

const CheckBox = ({ name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <CheckBoxField checked={field.value} {...field} {...rest} />
      )}
    </Field>
  );
};

export default CheckBox;
