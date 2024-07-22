import React, { forwardRef } from "react";

import { getIn, useField, useFormikContext } from "formik";
import { dissoc } from "ramda";

import Slider from "components/Slider";

const FormikSlider = forwardRef(({ name, ...otherProps }, ref) => {
  const [field, meta, { setValue, setTouched }] = useField(name);
  const { status, setStatus } = useFormikContext();

  const fieldStatus = getIn(status, name);

  return (
    <Slider
      error={meta.error || fieldStatus || ""}
      {...{ ref, ...field, name }}
      onBlur={() => setTouched(true)}
      onChange={value => {
        setStatus(dissoc(name));
        setValue(value);
      }}
      {...otherProps}
    />
  );
});

FormikSlider.displayName = "Slider";

export default FormikSlider;
