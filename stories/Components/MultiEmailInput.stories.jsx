import React, { useState } from "react";

import { Formik, Form } from "formik";
import * as yup from "yup";
import { Search } from "@bigbinary/neeto-icons";

import MultiEmailInput from "../../lib/components/MultiEmailInput";
import { suffixes, prefixes } from "../constants";
import { MultiEmailInput as FormikMultiEmailInput } from "../../lib/components/formik";
import Button from "../../lib/components/Button";
import Typography from "../../lib/components/Typography";
import EmailInputDocs from "!raw-loader!./MultiEmailInputDocs.mdx";

export default {
  title: "Components/Multi email input",
  component: MultiEmailInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { MultiEmailInput } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=926%3A2379",
    },
  },
  argTypes: {
    prefix: {
      options: Object.keys(prefixes),
      mapping: prefixes,
    },
    suffix: {
      options: Object.keys(suffixes),
      mapping: suffixes,
    },
  },
};

export const Controlled = (args) => {
  const [emails, setEmails] = useState(args.value);

  return (
    <MultiEmailInput
      {...args}
      value={emails}
      onChange={(emails) => setEmails(emails)}
    />
  );
};

Controlled.args = {
  value: [
    {
      label: "test@example.com",
      value: "test@example.com",
      valid: true,
    },
  ],
};

export const Error = (args) => <MultiEmailInput {...args} />;

Error.args = {
  error: "Please make sure all emails are valid.",
  value: [
    {
      label: "test",
      value: "test",
      valid: false,
    },
  ],
};

export const Disabled = () => <MultiEmailInput disabled />;

export const HelpText = () => (
  <MultiEmailInput helpText="This is the help text for this component." />
);
HelpText.storyName = "Help text";

export const Counter = () => {
  const [emails, setEmails] = useState([
    {
      label: "test@example.com",
      value: "test@example.com",
      valid: true,
    },
    {
      label: "test2@example.com",
      value: "test2@example.com",
      valid: true,
    },
    {
      label: "test3@example.com",
      value: "test3@example.com",
      valid: true,
    },
  ]);

  return (
    <MultiEmailInput
      counter={{ startsFrom: 3 }}
      value={emails}
      onChange={(emails) => setEmails(emails)}
    />
  );
};

Counter.parameters = {
  docs: {
    description: { story: EmailInputDocs },
  },
};

export const WithPrefixAndSuffix = (args) => {
  const [emails, setEmails] = useState(args.value);

  return (
    <MultiEmailInput
      {...args}
      prefix={<Search />}
      suffix={<div className="neeto-ui-text-gray-700">.bigbinary.com</div>}
      value={emails}
      onChange={(emails) => setEmails(emails)}
    />
  );
};

WithPrefixAndSuffix.args = {
  value: [
    {
      label: "test@example.com",
      value: "test@example.com",
      valid: true,
    },
  ],
};
WithPrefixAndSuffix.storyName = "With prefix and suffix";

export const FormikEmail = () => {
  const [emails, setEmails] = useState([]);

  const INITIAL_VALUES = { emails: [] };
  const VALIDATION_SCHEMA = yup.object().shape({
    emails: yup
      .array()
      .min(1, "Please enter atleast one email.")
      .test(
        "are-all-emails-valid",
        "Please make sure all emails are valid.",
        (emails) => emails.every(({ valid }) => valid)
      )
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
        <FormikMultiEmailInput
          label="Email(s)*"
          counter
          filterInvalidEmails
          name="emails"
        />
        <Button
          type="submit"
          label="Save changes"
          style="primary"
          data-cy="add-member-submit-button"
        />
        <Typography style="body1">Emails: {JSON.stringify(emails)}</Typography>
      </Form>
    </Formik>
  );
};

FormikEmail.storyName = "Formik email";
