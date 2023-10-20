import React, { forwardRef } from "react";

import { useField } from "formik";

import Slider from "components/Slider";

const FormikSlider = forwardRef(({ name, ...otherProps }) => {
  const [field, meta, { setValue }] = useField(name);

  return (
    <Slider
      error={meta.error || ""}
      name={field.name}
      value={field.value}
      onChange={value => setValue(value)}
      {...otherProps}
    />
  );
});

FormikSlider.displayName = "Slider";

export default FormikSlider;
