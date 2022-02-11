import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import Switch from "../Switch";

function FormikSwitch({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, meta: { error } }) => (
        <Switch
          name={name}
          error={error}
          checked={field.value}
          {...field}
          {...rest}
        />
      )}
    </Field>
  );
}

FormikSwitch.propTypes = {
  name: PropTypes.string,
};

export default FormikSwitch;
