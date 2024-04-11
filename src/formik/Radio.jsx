import React from "react";

import { useField, useFormikContext } from "formik";

import Radio from "components/Radio";

const RadioGroup = ({ label, name, className = "", ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField({ name });

  return (
    <Radio
      error={meta.touched ? meta.error : ""}
      onChange={event => setFieldValue(name, event.target.value)}
      {...{ className, label, ...field, ...props }}
    />
  );
};

RadioGroup.Item = Radio.Item;

RadioGroup.propTypes = Radio.propTypes;

export default RadioGroup;
