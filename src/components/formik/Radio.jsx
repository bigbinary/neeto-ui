import React from "react";

import { useField, useFormikContext } from "formik";

import Radio from "components/Radio";

const RadioGroup = ({ label, name, className = "", ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField({ name });

  return (
    <Radio
      className={className}
      error={meta.touched && meta.error}
      label={label}
      onChange={event => setFieldValue(name, event.target.value)}
      {...field}
      {...props}
    />
  );
};

RadioGroup.Item = Radio.Item;

RadioGroup.propTypes = Radio.propTypes;

export default RadioGroup;
