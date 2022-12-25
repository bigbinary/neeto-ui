import React, { forwardRef } from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import CheckboxField from "../Checkbox";

const Checkbox = forwardRef(({ name, ...rest }, ref) => (
  <Field name={name}>
    {({ field, meta }) => (
      <CheckboxField
        checked={field.value}
        {...field}
        error={meta.touched && meta.error}
        ref={ref}
        {...rest}
      />
    )}
  </Field>
));

Checkbox.propTypes = {
  /**
   * The name of the Checkbox.
   */
  name: PropTypes.string,
};

export default Checkbox;
