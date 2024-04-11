import React, { forwardRef } from "react";

import { useField } from "formik";

import Slider from "components/Slider";

const FormikSlider = forwardRef(({ name, ...otherProps }, ref) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  return (
    <Slider
      error={meta.error || ""}
      {...{ ref, ...field, name }}
      onBlur={() => setTouched(true)}
      onChange={value => setValue(value)}
      {...otherProps}
    />
  );
});

FormikSlider.displayName = "Slider";

export default FormikSlider;
