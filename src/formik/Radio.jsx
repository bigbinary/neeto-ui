import React from "react";

import { useField, useFormikContext, getIn } from "formik";
import { dissoc } from "ramda";

import Radio from "components/Radio";

const RadioGroup = ({ label, name, className = "", ...props }) => {
  const { setFieldValue, status, setStatus } = useFormikContext();
  const [field, meta] = useField({ name });

  const fieldStatus = getIn(status, name);

  const fieldProps = {
    ...field,
    onChange: event => {
      setStatus(dissoc(name));
      setFieldValue(name, event.target.value);
    },
  };

  return (
    <Radio
      error={meta.touched ? meta.error || fieldStatus : ""}
      {...{ className, label, ...fieldProps, ...props }}
    />
  );
};

RadioGroup.Item = Radio.Item;

RadioGroup.propTypes = Radio.propTypes;

export default RadioGroup;
