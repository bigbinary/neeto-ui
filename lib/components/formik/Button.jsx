import React, { forwardRef } from "react";
import { useFormikContext } from "formik";
import { equals } from "ramda";

import Button from "components/Button";

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
