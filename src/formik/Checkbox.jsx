import React, { forwardRef } from "react";

import { Field, getIn } from "formik";
import PropTypes from "prop-types";

import CheckboxField from "components/Checkbox";

const Checkbox = forwardRef(({ name, ...rest }, ref) => (
  <Field {...{ name }}>
    {({ field, meta, form }) => {
      const { status, setStatus } = form;
      const fieldStatus = getIn(status, name);

      const fieldProps = {
        ...field,
        onChange: e => {
          setStatus({ ...status, [name]: null });
          field.onChange(e);
        },
      };

      return (
        <CheckboxField
          checked={field.value}
          {...{ ...fieldProps, ref }}
          error={meta.touched ? meta.error || fieldStatus : ""}
          {...rest}
        />
      );
    }}
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
