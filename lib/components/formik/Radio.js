import React from "react";
import { useField, useFormikContext } from "formik";
import Radio from "../Radio";

const RadioGroup = ({ label, name, className = "", ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField({ name });

  return (
    <Radio
      label={label}
      className={className}
      error={meta.touched && meta.error}
      onChange={(event) => setFieldValue(name, event.target.value)}
      {...field}
      {...props}
    />
  );
};

RadioGroup.Item = Radio.Item;

RadioGroup.propTypes = Radio.propTypes;

export default RadioGroup;
