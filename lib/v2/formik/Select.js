import React from "react";
import { Field } from "formik";

import Select from "../Select";
import { useFormikContext } from "formik";

import { either, isNil, isEmpty } from "ramda";

const SelectField = ({
  name,
  options,
  getOptionValue = null,
  isMulti = false,
  ...rest
}) => {
  const { setValues } = useFormikContext();

  const getRealOptionValue = (option) => {
    if (typeof getOptionValue !== "function") {
      return option.value;
    }
    return getOptionValue(option);
  };

  const buildValueObj = (value, options) => {
    if (typeof value === "object") return value;

    return options.filter((option) => getRealOptionValue(option) === value)[0];
  };

  return (
    <Field name={name}>
      {({ field, form, meta }) => (
        <Select
          options={options}
          name={field.name}
          value={
            either(isNil, isEmpty)(field.value)
              ? "Select an option"
              : buildValueObj(field.value, options)
          }
          onChange={(value) =>
            setValues({ ...form.values, [field.name]: value })
          }
          onBlur={() => form.setFieldTouched(name, true)}
          error={meta.touched && meta.error}
          getOptionValue={getOptionValue || ((option) => option.value)}
          isMulti={!!isMulti}
          {...rest}
        />
      )}
    </Field>
  );
};

export default SelectField;
