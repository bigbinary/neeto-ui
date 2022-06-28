import React, { forwardRef } from "react";
import { useFormikContext } from "formik";
import Button from "../Button";
import { equals } from "ramda";

const FormikButton = forwardRef(({ disabled, ...otherProps }, ref) => {
  const { values, initialValues, isValid } = useFormikContext();
  return (
    <Button
      ref={ref}
      disabled={disabled ?? (!isValid || equals(values, initialValues))}
      {...otherProps}
    />
  );
});

export default FormikButton;
