import React, { forwardRef } from "react";

import { Field } from "formik";
import PropTypes from "prop-types";

import Textarea from "components/Textarea";

const FormikTextarea = forwardRef(({ name, ...rest }, ref) => (
  <Field {...{ name }}>
    {({ field, meta }) => (
      <Textarea
        error={meta.touched ? meta.error : ""}
        {...{ ref, ...field, ...rest }}
      />
    )}
  </Field>
));

FormikTextarea.displayName = "FormikTextarea";

FormikTextarea.propTypes = {
  /**
   * The name of the textarea field.
   */
  name: PropTypes.string,
};

export default FormikTextarea;
