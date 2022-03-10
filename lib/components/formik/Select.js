import React, { forwardRef } from "react";
import { useField } from "formik";
import PropTypes from "prop-types";

import Select from "../Select";

import { either, isNil, isEmpty } from "ramda";

const SelectField = forwardRef((props, ref) => {
  const {
    name = "",
    options = [],
    getOptionValue = null,
    isMulti = false,
    ...otherProps
  } = props;
  const [field, meta, { setValue, setTouched }] = useField(name);

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
    <Select
      ref={ref}
      options={options}
      name={field.name}
      value={
        either(isNil, isEmpty)(field.value)
          ? null
          : buildValueObj(field.value, options)
      }
      onChange={(value) => setValue(value)}
      onBlur={() => setTouched(true)}
      error={meta.touched ? meta.error : ""}
      getOptionValue={getOptionValue || ((option) => option.value)}
      isMulti={!!isMulti}
      {...otherProps}
    />
  );
});

SelectField.propTypes = {
  /**
   * The name of the select input.
   */
  name: PropTypes.string,
  /**
   * To provide the options to be displayed in the select component.
   */
  options: PropTypes.array,
  /**
   * To provide the function to get the value of the option.
   */
  getOptionValue: PropTypes.string,
  /**
   * To specify whether multiple options can be selected.
   */
  isMulti: PropTypes.bool,
};

export default SelectField;
