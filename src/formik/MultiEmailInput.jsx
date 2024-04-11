import React, { forwardRef } from "react";

import { useField } from "formik";
import PropTypes from "prop-types";

import EmailInput from "components/MultiEmailInput";

const FormikMultiEmailInput = forwardRef(({ name, ...otherProps }, ref) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  return (
    <EmailInput
      {...{ ref }}
      error={meta.touched ? meta.error : ""}
      name={field.name}
      value={field.value}
      onBlur={() => setTouched(true)}
      onChange={value => setValue(value)}
      {...otherProps}
    />
  );
});

FormikMultiEmailInput.displayName = "FormikMultiEmailInput";

FormikMultiEmailInput.propTypes = {
  /**
   * The name of the email input field.
   */
  name: PropTypes.string,
};

export default FormikMultiEmailInput;
