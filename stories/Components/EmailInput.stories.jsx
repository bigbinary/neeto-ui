import React, { useState } from "react";

import { Formik, Form } from "formik";
import * as yup from "yup";

import EmailInput from "../../lib/components/EmailInput";
import { EmailInput as FormikEmailInput } from "../../lib/components/formik";
import Button from "../../lib/components/Button";
import Typography from "../../lib/components/Typography";

export default {
  title: "Components/Email Input",
  component: EmailInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { EmailInput } from "@bigbinary/neetoui";`',
      },
    },
  },
};

export const Controlled = (args) => {
  const [emails, setEmails] = useState([]);

  return (
    <EmailInput
      {...args}
      value={emails}
      onChange={emails => setEmails(emails)}
    />
  );
};

Controlled.args = {
  label: "Email(s)",
  placeholder: "",
  error: "",
};

export const Error = () => (
  <EmailInput label="Email(s)" error="Please make sure all emails are valid." />
);

export const Disabled = () => <EmailInput label="Email(s)" disabled />;

export const FormikEmail = () => {
  const [emails, setEmails] = useState([]);

  const INITIAL_VALUES = { emails: [] };
  const VALIDATION_SCHEMA = yup.object().shape({
    emails: yup
      .array()
      .min(1, "Please enter atleast one email.")
      .of(
        yup.object().shape({
          label: yup.string().email(),
          value: yup.string().email(),
        })
      )
      .required("Please enter an email address.")
      .nullable(),
  });

  const handleSubmit = ({ emails }) =>
    setEmails(emails.map(({ value }) => value));

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      <Form className="space-y-2">
        <FormikEmailInput label="Email(s)*" name="emails" />
        <Button
          type="submit"
          label="Save Changes"
          style="primary"
          data-cy="add-member-submit-button"
        />
        <Typography style="body1">
            Emails: {JSON.stringify(emails)}
        </Typography>
      </Form>
    </Formik>
  );
};
