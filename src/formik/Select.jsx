import React, { forwardRef, useRef, startTransition } from "react";

import { getIn, useFormikContext, useField } from "formik";
import PropTypes from "prop-types";
import { prop, either, isNil, isEmpty } from "ramda";

import Select from "components/Select";

const SelectField = forwardRef((props, ref) => {
  const {
    name = "",
    options = [],
    getOptionValue = null,
    isMulti = false,
    ...otherProps
  } = props;
  const [field, meta, { setValue, setTouched }] = useField(name);
  const { status, setStatus } = useFormikContext();
  const fieldStatus = getIn(status, name);

  const isMenuOpen = useRef(otherProps.defaultMenuIsOpen);

  const getRealOptionValue = option => {
    if (typeof getOptionValue !== "function") {
      return option.value;
    }

    return getOptionValue(option);
  };

  const buildValueObj = (value, options) => {
    if (typeof value === "object") return value;

    return options.filter(option => getRealOptionValue(option) === value)[0];
  };

  return (
    <Select
      {...{ options }}
      error={meta.touched ? meta.error || fieldStatus : ""}
      getOptionValue={getOptionValue || prop("value")}
      innerRef={ref}
      isMulti={!!isMulti}
      name={field.name}
      value={
        either(isNil, isEmpty)(field.value)
          ? null
          : buildValueObj(field.value, options)
      }
      onBlur={() =>
        startTransition(() => {
          setTouched(true);
        })
      }
      onChange={value => {
        setStatus({ ...status, [name]: null });
        setValue(value);
      }}
      {...otherProps}
      onKeyDown={event => {
        if (event.key === "Enter" && isMenuOpen.current) {
          event.stopPropagation();
        }
        otherProps.onKeyDown?.(event);
      }}
      onMenuClose={() => {
        isMenuOpen.current = false;
        otherProps.onMenuClose?.();
      }}
      onMenuOpen={() => {
        isMenuOpen.current = true;
        otherProps.onMenuOpen?.();
      }}
    />
  );
});

SelectField.displayName = "SelectField";

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
