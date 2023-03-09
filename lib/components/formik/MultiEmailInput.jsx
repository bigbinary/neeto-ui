import React, { forwardRef } from "react";
import { useField } from "formik";
import PropTypes from "prop-types";

import EmailInput from "components/MultiEmailInput";

const FormikMultiEmailInput = forwardRef(({ name, ...otherProps }, ref) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  return (
    <EmailInput
      ref={ref}
      name={field.name}
      value={field.value}
      onChange={(value) => setValue(value)}
      onBlur={() => setTouched(true)}
      error={meta.touched ? meta.error : ""}
      {...otherProps}
    />
  );
});

FormikMultiEmailInput.propTypes = {
  /**
   * The name of the email input field.
   */
  name: PropTypes.string,
};

export default FormikMultiEmailInput;
