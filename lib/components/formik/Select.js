import React from "react";
import { Field } from "formik";
import * as R from "ramda";

import Select from "../Select";
import { useFormikContext } from "formik";

const nestedLens = fieldName => {
  const lensList = R.map(key => R.lensProp(key), fieldName.split("."));
  return R.compose(...lensList);
};

const SelectField = ({ name, options, getOptionValue, isMulti, ...rest }) => {
  const { values, setValues } = useFormikContext();

  const selectedOptions = (options, field) => {
    if (isMulti) {
      if (!field.value) return [];
      const selectedValues = field.value.map(v => optionValue(v));
      return options.filter(option =>
        selectedValues.includes(optionValue(option))
      );
    } else {
      return options.find(option => optionValue(option) === field.value);
    }
  };

  const optionValue = option =>
    (typeof getOptionValue === "function" && getOptionValue(option)) ||
    option.value;

  return (
    <Field name={name}>
      {({ field, form }) => (
        <Select
          options={options}
          name={field.name}
          value={options ? selectedOptions(options, field) : "Select an option"}
          onChange={value =>
            setValues(R.set(nestedLens(field.name), value, form.values))
          }
          onBlur={field.onBlur}
          error={form.errors[field.name]}
          getOptionValue={getOptionValue || (option => option.value)}
          isMulti={!!isMulti}
          {...rest}
        />
      )}
    </Field>
  );
};

export default SelectField;
