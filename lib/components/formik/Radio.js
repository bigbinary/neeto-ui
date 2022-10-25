import React, { Children, cloneElement } from "react";
import { useField, useFormikContext } from "formik";
import Radio from "../Radio";

const RadioGroup = ({ children, label, name, className = "", ...props }) => {
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
    >
      {Children.map(children, (child) => {
        return cloneElement(child, {
          ...child.props,
          checked: field.value === child.props.value,
        });
      })}
    </Radio>
  );
};

RadioGroup.Item = Radio.Item;

RadioGroup.propTypes = Radio.propTypes;

export default RadioGroup;
