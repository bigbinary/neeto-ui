import React, { forwardRef } from "react";

import { useField } from "formik";

import TreeSelect from "components/TreeSelect";

const FormikTreeSelect = forwardRef(({ name, ...otherProps }, ref) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  return (
    <TreeSelect
      {...{ ref }}
      error={meta.error || ""}
      name={field.name}
      value={field.value}
      onBlur={() => setTouched(true)}
      onChange={value => setValue(value)}
      {...otherProps}
    />
  );
});

FormikTreeSelect.displayName = "TreeSelect";

export default FormikTreeSelect;
