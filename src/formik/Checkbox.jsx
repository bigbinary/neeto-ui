import React, { forwardRef } from "react";

import { Field } from "formik";
import PropTypes from "prop-types";

import CheckboxField from "components/Checkbox";

const Checkbox = forwardRef(({ name, ...rest }, ref) => (
  <Field {...{ name }}>
    {({ field, meta }) => (
      <CheckboxField
        checked={field.value}
        {...{ ...field, ref }}
        error={meta.touched ? meta.error : ""}
        {...rest}
      />
    )}
  </Field>
));

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  /**
   * The name of the Checkbox.
   */
  name: PropTypes.string,
};

export default Checkbox;
