import React, { forwardRef } from "react";

import { Field, getIn } from "formik";
import PropTypes from "prop-types";
import { dissoc } from "ramda";

import Textarea from "components/Textarea";

const FormikTextarea = forwardRef(({ name, ...rest }, ref) => (
  <Field {...{ name }}>
    {({ field, meta, form }) => {
      const { status, setStatus } = form;
      const fieldStatus = getIn(status, name);

      const fieldProps = {
        ...field,
        onChange: e => {
          setStatus(dissoc(name));
          field.onChange(e);
        },
      };

      return (
        <Textarea
          error={meta.touched ? meta.error || fieldStatus : ""}
          {...{ ref, ...fieldProps, ...rest }}
        />
      );
    }}
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
