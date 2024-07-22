import React, { forwardRef } from "react";

import { Field, getIn } from "formik";
import PropTypes from "prop-types";
import { dissoc } from "ramda";

import Input from "components/Input";

const FormikInput = forwardRef(({ name, ...rest }, ref) => (
  <Field {...{ name }}>
    {({ field, meta, form }) => {
      const { status = {}, setStatus } = form;
      const fieldStatus = getIn(status, name);

      const fieldProps = {
        ...field,
        onChange: e => {
          setStatus(dissoc(name, status));
          field.onChange(e);
        },
      };

      return (
        <Input
          {...{ ref, ...fieldProps }}
          error={meta.touched ? meta.error || fieldStatus : ""}
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
