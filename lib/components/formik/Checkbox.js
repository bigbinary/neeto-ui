import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import CheckboxField from "../Checkbox";

const Checkbox = ({ name, ...rest }) => (
  <Field name={name}>
    {({ field, meta }) => (
      <CheckboxField
        checked={field.value}
        {...field}
        error={meta.touched && meta.error}
        {...rest}
      />
    )}
  </Field>
);

Checkbox.propTypes = {
  /**
   * The name of the Checkbox.
   */
  name: PropTypes.string,
};

export default Checkbox;
