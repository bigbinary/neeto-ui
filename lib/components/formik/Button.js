import React, { forwardRef } from "react";
import { useFormikContext } from "formik";
import Button from "../Button";
import { equals } from "ramda";

const FormikButton = forwardRef(({ disabled, ...otherProps }, ref) => {
  const {
    handleSubmit,
    isSubmitting,
    values,
    initialValues,
    isValid,
  } = useFormikContext();

  const isDisabled =
    disabled ?? (isSubmitting || !isValid || equals(values, initialValues));

  return (
    <Button
      ref={ref}
      onClick={handleSubmit}
      loading={isSubmitting && isValid}
      disabled={isDisabled}
      {...otherProps}
    />
  );
});

export default FormikButton;
