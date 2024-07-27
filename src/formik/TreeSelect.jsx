import React, { forwardRef } from "react";

import { useField, getIn, useFormikContext } from "formik";
import { dissoc } from "ramda";

import TreeSelect from "components/TreeSelect";

const FormikTreeSelect = forwardRef(({ name, ...otherProps }, ref) => {
  const [field, meta, { setValue, setTouched }] = useField(name);
  const { status = {}, setStatus } = useFormikContext();

  const fieldStatus = getIn(status, name);

  return (
    <TreeSelect
      {...{ ref }}
      error={meta.error || fieldStatus || ""}
      name={field.name}
      value={field.value}
      onBlur={() => setTouched(true)}
      onChange={value => {
        setStatus(dissoc(name, status));
        setValue(value);
      }}
      {...otherProps}
    />
  );
});

FormikTreeSelect.displayName = "TreeSelect";

export default FormikTreeSelect;
