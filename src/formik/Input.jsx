import React, { forwardRef } from "react";

import { Field, getIn } from "formik";
import PropTypes from "prop-types";

import Input from "components/Input";

const FormikInput = forwardRef(({ name, ...rest }, ref) => (
  <Field {...{ name }}>
    {({ field, meta, form }) => {
      const { status, setStatus } = form;
      const apiError = getIn(status, name);

      const fieldProps = {
        ...field,
        onChange: e => {
          setStatus({ ...status, [name]: null });
          field.onChange(e);
        },
      };

      return (
        <Input
          {...{ ref, ...fieldProps }}
          error={meta.touched ? meta.error || apiError : ""}
          {...rest}
        />
      );
    }}
  </Field>
));

FormikInput.displayName = "FormikInput";

FormikInput.propTypes = {
  /**
   * The name of the input field.
   */
  name: PropTypes.string,
};

export default FormikInput;
