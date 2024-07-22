import React from "react";

import { Field, getIn } from "formik";
import PropTypes from "prop-types";
import { dissoc } from "ramda";

import Switch from "components/Switch";

const FormikSwitch = ({ name, ...rest }) => (
  <Field {...{ name }}>
    {({ field, meta: { error }, form }) => {
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
        <Switch
          checked={field.value}
          error={error || fieldStatus}
          {...{ name, ...fieldProps, ...rest }}
        />
      );
    }}
  </Field>
);

FormikSwitch.propTypes = {
  /**
   * The name of the switch.
   */
  name: PropTypes.string,
};

export default FormikSwitch;
