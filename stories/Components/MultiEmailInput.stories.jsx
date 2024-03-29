import React, { useState } from "react";

import { Search } from "neetoicons";
import { pluck, prop } from "ramda";
import * as yup from "yup";

import Button from "components/Button";
import {
  MultiEmailInput as FormikMultiEmailInput,
  Form,
} from "components/formik";
import MultiEmailInput from "components/MultiEmailInput";
import Typography from "components/Typography";

import { suffixes, prefixes } from "../constants";

import MultiEmailInputCounterDocs from "!raw-loader!./MultiEmailInputStoriesDocs/MultiEmailInputCounterDocs.mdx";
import MultiEmailInputCSSCustomization from "!raw-loader!./MultiEmailInputStoriesDocs/MultiEmailInputCSSCustomization.mdx";
import MultiEmailInputDocs from "!raw-loader!./MultiEmailInputStoriesDocs/MultiEmailInputDocs.mdx";

const metadata = {
  title: "Components/MultiEmailInput",
  component: MultiEmailInput,
  parameters: {
    layout: "padded",
    docs: { description: { component: MultiEmailInputDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=926%3A2379",
    },
  },
  argTypes: {
    prefix: { options: Object.keys(prefixes), mapping: prefixes },
    suffix: { options: Object.keys(suffixes), mapping: suffixes },
    onChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
    onBlur: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const Controlled = args => {
  const [emails, setEmails] = useState(args.value);

  return (
    <MultiEmailInput
      {...args}
      value={emails}
      options={[
        {
          label: "Daniel Ferry (daniel.ferry@example.com)",
          value: "daniel.ferry@example.com",
          valid: true,
        },
        {
          label: "Daniel Grady (daniel.grady@example.com)",
          value: "daniel.grady@example.com",
          valid: true,
        },
        {
          label: "Daniel Gutkowski (daniel.gutkowski@example.com)",
          value: "daniel.gutkowski@example.com",
          valid: true,
        },
        {
          label: "Daniel Langosh (daniel.langosh@example.com)",
          value: "daniel.langosh@example.com",
          valid: true,
        },
        {
          label: "Daniel Newton (daniel.newton@example.com)",
          value: "daniel.newton@example.com",
          valid: true,
        },
        {
          label: "Daniel Schiller (daniel.schiller@example.com)",
          value: "daniel.schiller@example.com",
          valid: true,
        },
      ]}
      onChange={emails => setEmails(emails)}
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

const Error = args => <MultiEmailInput {...args} />;

Error.args = {
  error: "Please make sure all emails are valid.",
  value: [{ label: "test", value: "test", valid: false }],
};

const Disabled = _args => <MultiEmailInput disabled />;

const HelpText = _args => (
  <MultiEmailInput helpText="This is the help text for this component." />
);
HelpText.storyName = "Help text";

const Counter = _args => {
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
      maxCount={4}
      value={emails}
      onChange={emails => setEmails(emails)}
    />
  );
};

Counter.parameters = {
  docs: { description: { story: MultiEmailInputCounterDocs } },
};

const WithPrefixAndSuffix = args => {
  const [emails, setEmails] = useState(args.value);

  return (
    <MultiEmailInput
      {...args}
      prefix={<Search />}
      suffix={<div className="neeto-ui-text-gray-700">.bigbinary.com</div>}
      value={emails}
      onChange={emails => setEmails(emails)}
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

const FormikEmail = _args => {
  const [emails, setEmails] = useState([]);

  const INITIAL_VALUES = { emails: [] };
  const VALIDATION_SCHEMA = yup.object().shape({
    emails: yup
      .array()
      .min(1, "Please enter atleast one email.")
      .test(
        "are-all-emails-valid",
        "Please make sure all emails are valid.",
        emails => emails.every(prop("valid"))
      )
      .nullable(),
  });

  const handleSubmit = ({ emails }) => setEmails(pluck("value", emails));

  return (
    <Form
      formProps={{ className: "space-y-2" }}
      formikProps={{
        initialValues: INITIAL_VALUES,
        validationSchema: VALIDATION_SCHEMA,
        onSubmit: handleSubmit,
      }}
    >
      <FormikMultiEmailInput
        counter
        filterInvalidEmails
        required
        label="Email(s)"
        name="emails"
      />
      <Button
        data-cy="add-member-submit-button"
        label="Save changes"
        style="primary"
        type="submit"
      />
      <Typography style="body1">Emails: {JSON.stringify(emails)}</Typography>
    </Form>
  );
};

FormikEmail.storyName = "Formik email";

const CSSCustomization = args => {
  const [emails, setEmails] = useState(args.value);

  return (
    <div className="neetix-email-input">
      <MultiEmailInput
        {...args}
        counter
        value={emails}
        options={[
          {
            label: "Daniel Ferry (daniel.ferry@example.com)",
            value: "daniel.ferry@example.com",
            valid: true,
          },
          {
            label: "Daniel Grady (daniel.grady@example.com)",
            value: "daniel.grady@example.com",
            valid: true,
          },
          {
            label: "Daniel Gutkowski (daniel.gutkowski@example.com)",
            value: "daniel.gutkowski@example.com",
            valid: true,
          },
          {
            label: "Daniel Langosh (daniel.langosh@example.com)",
            value: "daniel.langosh@example.com",
            valid: true,
          },
          {
            label: "Daniel Newton (daniel.newton@example.com)",
            value: "daniel.newton@example.com",
            valid: true,
          },
          {
            label: "Daniel Schiller (daniel.schiller@example.com)",
            value: "daniel.schiller@example.com",
            valid: true,
          },
        ]}
        onChange={emails => setEmails(emails)}
      />
    </div>
  );
};

CSSCustomization.storyName = "MultiEmailInput CSS Customization";

CSSCustomization.args = {
  value: [
    {
      label: "test@example.com",
      value: "test@example.com",
      valid: true,
    },
  ],
};

CSSCustomization.parameters = {
  docs: { description: { story: MultiEmailInputCSSCustomization } },
};

export {
  Controlled,
  Error,
  Disabled,
  HelpText,
  Counter,
  WithPrefixAndSuffix,
  FormikEmail,
  CSSCustomization,
};

export default metadata;
