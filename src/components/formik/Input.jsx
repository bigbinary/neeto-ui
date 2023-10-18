import React, { forwardRef, useState } from "react";

import { Field } from "formik";
import PropTypes from "prop-types";

import Input from "components/Input";

const FormikInput = forwardRef(({ name, ...rest }, ref) => {
  const [isFormikInputFocused, setIsFormikInputFocused] = useState(false);

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <Input
          ref={ref}
          {...field}
          error={meta.touched ? meta.error : ""}
          isFormikInputFocused={isFormikInputFocused}
          {...rest}
          onBlur={() => setIsFormikInputFocused(false)}
          onFocus={() => setIsFormikInputFocused(true)}
        />
      )}
    </Field>
  );
});

FormikInput.displayName = "FormikInput";

FormikInput.propTypes = {
  /**
   * The name of the input field.
   */
  name: PropTypes.string,
};

export default FormikInput;
