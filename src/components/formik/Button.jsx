import React, { forwardRef } from "react";

import { useFormikContext } from "formik";
import { equals } from "ramda";

import Button from "components/Button";

const FormikButton = forwardRef(({ disabled, ...otherProps }, ref) => {
  const { handleSubmit, isSubmitting, values, initialValues, isValid } =
    useFormikContext();

  const isDisabled =
    disabled ?? (isSubmitting || equals(values, initialValues));

  return (
    <Button
      disabled={isDisabled}
      loading={isSubmitting && isValid}
      ref={ref}
      onClick={handleSubmit}
      {...otherProps}
    />
  );
});

FormikButton.displayName = "FormikButton";

export default FormikButton;
