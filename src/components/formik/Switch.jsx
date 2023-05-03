import React from "react";

import { Field } from "formik";
import PropTypes from "prop-types";

import Switch from "components/Switch";

const FormikSwitch = ({ name, ...rest }) => (
  <Field name={name}>
    {({ field, meta: { error } }) => (
      <Switch
        checked={field.value}
        error={error}
        name={name}
        {...field}
        {...rest}
      />
    )}
  </Field>
);

FormikSwitch.propTypes = {
  /**
   * The name of the switch.
   */
  name: PropTypes.string,
};

export default FormikSwitch;
