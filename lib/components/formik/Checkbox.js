import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

import CheckboxField from "../Checkbox";

const Checkbox = ({ name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <CheckboxField checked={field.value} {...field} {...rest} />
      )}
    </Field>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
};

export default Checkbox;
