import React, { useState } from "react";

import { Search } from "neetoicons";
import { pluck, prop } from "ramda";
import * as yup from "yup";

import Button from "components/Button";
import MultiEmailInput from "components/MultiEmailInput";
import Typography from "components/Typography";
import {
  MultiEmailInput as FormikMultiEmailInput,
  Form,
} from "formikcomponents";

import { EMAILS } from "./constants";

const description = `
\`import { MultiEmailInput } from "@bigbinary/neetoui";\`

\`MultiEmailInput\` allows users to input multiple email addresses in a single
input field.
`;

const metadata = {
  title: "Components/MultiEmailInput",
  component: MultiEmailInput,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=926%3A2379",
    },
  },
  argTypes: {
    label: {
      description: "To specify the text to be displayed above the Input field.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Email(s)" },
      },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    placeholder: {
      description:
        "To specify the text to be displayed inside the Input field.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    helpText: {
      description:
        "To specify the helper text message to be displayed below the Input field.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    value: {
      description:
        "To specify the value to be displayed inside the Input field.",
      control: "object",
      table: { type: { summary: "array" } },
    },
    error: {
      description:
        "To specify the error message to be shown below the Input field.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    disabled: {
      description: "To specify whether the Input field is disabled or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    required: {
      description: "To specify whether the Input field is required or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    filterInvalidEmails: {
      description:
        "To specify the message to be shown besides the error message to filter out the invalid emails.",
      control: "object",
      table: {
        type: { summary: "shape", detail: "{ label: string }" },
      },
    },
    counter: {
      description: "To add an email counter next to the label.",
      control: "object",
      table: {
        type: {
          summary: "oneOfType([bool, shape])",
          detail: `{
  label: string,
  startsFrom: number
}`,
        },
      },
    },
    prefix: {
      description:
        "To specify the content to be added at the beginning of the Input field.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    suffix: {
      description:
        "To specify the content to be added at the end of the Input field.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    onChange: {
      description:
        "To specify the action to be triggered on modifying the Input field.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    maxHeight: {
      description:
        "To specify the maximum height (in pixels) of the container before it becomes scrollable.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "200" },
      },
    },
    onBlur: {
      description:
        "To specify the action to be triggered on changing focus from the Input field.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    visibleEmailsCount: {
      description:
        "To specify the number of email to be displayed in the input field when not in focus.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
    },
    isCreateable: {
      description:
        "To specify whether a new email option can be created or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaulValue: { summary: true },
      },
    },
    isAlwaysExpanded: {
      description:
        "To specify whether the input field should always be shown in an expanded state or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
};

const Controlled = args => {
  const [emails, setEmails] = useState(args.value);

  return (
    <MultiEmailInput
      {...args}
      options={EMAILS}
      value={emails}
      onChange={emails => setEmails(emails)}
    />
  );
};

Controlled.args = { value: [EMAILS[0]] };

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
  const [emails, setEmails] = useState(EMAILS.slice(0, 3));

  return (
    <MultiEmailInput
      counter={{ startsFrom: 3 }}
      value={emails}
      onChange={emails => setEmails(emails)}
    />
  );
};

const MultiEmailInputCounterDescription = `
Basic implementation:

\`\`\`jsx
<MultiEmailInput counter />
\`\`\`

Specify the counter label for i18n purposes:

\`\`\`jsx
<MultiEmailInput counter={{ label: "E-mail" }} />
\`\`\`

Start showing counter label after a specific number of emails:

\`\`\`jsx
<MultiEmailInput counter={{ startsFrom: 3 }} />
\`\`\`
`;

Counter.parameters = {
  docs: { description: { story: MultiEmailInputCounterDescription } },
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

WithPrefixAndSuffix.args = { value: [EMAILS[0]] };
WithPrefixAndSuffix.storyName = "With prefix and suffix";

const AlwaysExpandedInput = args => {
  const [emails, setEmails] = useState(args.value);

  return (
    <MultiEmailInput
      {...args}
      value={emails}
      onChange={emails => setEmails(emails)}
    />
  );
};

AlwaysExpandedInput.args = { value: EMAILS, isAlwaysExpanded: true };
AlwaysExpandedInput.storyName = "Always expanded input";

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
        options={EMAILS}
        value={emails}
        onChange={emails => setEmails(emails)}
      />
    </div>
  );
};

CSSCustomization.storyName = "MultiEmailInput CSS Customization";

CSSCustomization.args = { value: [EMAILS[0]] };

const MultiEmailInputCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the
\`MultiEmailInput\` component.

\`\`\`css
// Label Wrapper
--neeto-ui-multi-email-input-label-wrapper-gap: 8px;
--neeto-ui-multi-email-input-counter-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-multi-email-input-counter-line-height: 1;
--neeto-ui-multi-email-input-counter-margin-bottom: 8px;

// Prefx & Suffix
--neeto-ui-multi-email-input-prefix-suffix-icon-size: 16px;
--neeto-ui-multi-email-input-prefix-margin-left: 12px;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-email-input {
  --neeto-ui-multi-email-input-counter-color: rgb(var(--neeto-ui-primary-500));
}
\`\`\`

#### Output
`;

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
  AlwaysExpandedInput,
  FormikEmail,
  CSSCustomization,
};

export default metadata;
