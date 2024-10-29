import React, { useState } from "react";

import { Search } from "neetoicons";
import * as yup from "yup";

import Button from "components/Button";
import Input from "components/Input";
import Form from "formikcomponents/Form";
import FormikInput from "formikcomponents/Input";

const description = `
\`import { Input } from "@bigbinary/neetoui";\`

\`Input\` is a component for capturing user inputs, commonly utilized in forms,
search bars, and other data entry scenarios.
`;

const metadata = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A11",
    },
  },
  argTypes: {
    id: {
      description: "To specify a unique ID to the Input component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    size: {
      description: "To specify the size of Input.",
      control: "select",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: { type: { summary: "string" } },
    },
    type: {
      description: "To specify the type of Input field.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    maxLength: {
      description:
        "To specify a maximum character limit to the Input. Charater limit is visible only if the Input value is greater than or equal to 85% of the maximum character limit.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    unlimitedChars: {
      description:
        "To be used along with maxLength prop. When set to true the character limit will not be enforced and character count will be shown in error state if the character limit is exceeded.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    label: {
      description: "To specify the text to be displayed above the Input.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    error: {
      description:
        "To specify the error message to be shown in the Input field.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    suffix: {
      description:
        "To specify the content to be added at the end of the Input field.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    prefix: {
      description:
        "To specify the content to be added at the beginning of the Input field.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    disabled: {
      description: "To specify whether the Input field is disabled or not.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    helpText: {
      description: "To specify the text that appears below the Input field.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    className: {
      description:
        "To specify external classNames that can be provided as overrides to the main wrapper.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    nakedInput: {
      description: "To create an Input field without any borders.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    contentSize: {
      description:
        "To specify the value to be passed as size attribute to the Input field.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    required: {
      description: "To specify whether the Input field is required or not.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    rejectCharsRegex: {
      description:
        "To specify a regex to be matched against the user input. Any character that matches it cannot be input by the user. It will also prevent such characters from being pasted into the input.",
      control: "object",
      table: { type: { summary: "RegExp" } },
    },
    disableTrimOnBlur: {
      description: "To disable leading and trailing white spaces onBlur.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
  },
};

const Template = args => <Input {...args} />;

const Default = Template.bind({});
Default.args = {
  label: "Input label",
  placeholder: "Input placeholder",
};

const Email = Template.bind({});
Email.args = {
  label: "Email",
  placeholder: "oliver@example.com",
  type: "email",
};

const Sizes = args => (
  <div className="flex w-full flex-col gap-3">
    <Input
      {...args}
      label="Small"
      placeholder="Input placeholder"
      size="small"
    />
    <Input {...args} label="Medium" placeholder="Input placeholder" />
    <Input
      {...args}
      label="Large"
      placeholder="Input placeholder"
      size="large"
    />
  </div>
);

const Controlled = args => {
  const [value, setValue] = useState("BigBinary");

  return (
    <Input
      {...{ ...args, value }}
      label="Controlled Input"
      prefix={<Search />}
      onChange={e => setValue(e.target.value)}
    />
  );
};

const Required = args => (
  <Input
    {...args}
    required
    label="Required Input"
    placeholder="Input placeholder"
  />
);

const Disabled = args => (
  <Input
    {...args}
    disabled
    label="Disabled Input"
    placeholder="Input placeholder"
  />
);

const Error = Template.bind({});
Error.args = {
  label: "Error",
  error: "Provide valid email",
  placeholder: "Input placeholder",
};

const HelpText = Template.bind({});
HelpText.args = {
  label: "Error",
  helpText: "This is help text.",
  placeholder: "Input placeholder",
};
HelpText.storyName = "Help text";

const NakedInput = Template.bind({});
NakedInput.args = {
  label: "Naked Input field",
  nakedInput: true,
  placeholder: "Input placeholder",
};

const SearchInput = Template.bind({});
SearchInput.args = {
  label: "Search",
  prefix: <Search />,
  suffix: ".neetohelp.com",
  type: "search",
  placeholder: "Input search text",
};

const InputWithMaxLength = args => (
  <div className="flex flex-col space-y-6">
    <Input
      {...args}
      label="Input with max length"
      maxLength={10}
      placeholder="Input placeholder"
    />
    <Input
      {...args}
      label="Input with max length"
      maxLength={10}
      placeholder="Input placeholder"
      value="Sample i"
    />
    <Input
      {...args}
      label="Input with max length"
      maxLength={10}
      placeholder="Input placeholder"
      value="Sample in"
    />
    <Input
      {...args}
      unlimitedChars
      label="Input with max length and unlimited characters"
      maxLength={10}
      placeholder="Input placeholder"
      value="Sample Input"
    />
  </div>
);
InputWithMaxLength.storyName = "Input with max length";

const FormikInputStory = args => (
  <Form
    formikProps={{
      initialValues: { name: "", email: "" },
      validationSchema: yup.object({
        name: yup.string().required("Name is required"),
      }),
      onSubmit: values => window.alert(JSON.stringify(values)),
    }}
  >
    {() => (
      <div className="space-y-2">
        <FormikInput {...args} required label="Name" name="name" />
        <FormikInput {...args} label="Email" name="email" type="email" />
        <Button label="Submit" type="submit" />
      </div>
    )}
  </Form>
);

FormikInputStory.storyName = "Formik Input";
FormikInputStory.parameters = {
  docs: {
    description: {
      story:
        "`import { Input as FormikInput } from '@bigbinary/neetoui/formik';`",
    },
  },
};

const RejectCharsInputStory = args => (
  <Input {...args} label="No numbers" rejectCharsRegex={/[0-9]+/} />
);

RejectCharsInputStory.storyName = "Reject specific characters";
RejectCharsInputStory.parameters = {
  docs: {
    description: {
      story: `The prop \`rejectCharsRegex\` will accept a regex and any character that matches it
      cannot be input by the user. It will also prevent such characters from being pasted into the input.`,
    },
  },
};

const InputCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Input\`
component.

\`\`\`css
// Wrapper
--neeto-ui-input-wrapper-flex-grow: 1;

// Label Wrapper
--neeto-ui-input-label-wrapper-gap: 8px;

// Label
--neeto-ui-input-label-overflow-wrap: break-word;
--neeto-ui-input-label-margin: 8px;

// Max Length
--neeto-ui-input-max-length-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-max-length-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-max-length-line-height: 1;

// Input
--neeto-ui-input-padding-x: 0px;
--neeto-ui-input-padding-y: 0px;
--neeto-ui-input-min-height: 0px;
--neeto-ui-input-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-border-width: 1px;
--neeto-ui-input-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-input-border-radius: var(--neeto-ui-rounded);
--neeto-ui-input-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-input-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-input-line-height: 1.2;

// Textarea
--neeto-ui-textarea-padding-x: 0px;
--neeto-ui-textarea-padding-y: 0px;
--neeto-ui-textarea-line-height: 1.5;
--neeto-ui-textarea-max-height: 224px;

// Placeholder
--neeto-ui-input-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Focus
--neeto-ui-input-focus-outline-color: transparent;

// Hover
--neeto-ui-input-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Focus Within
--neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);

// Prefix & Suffix
--neeto-ui-input-prefix-suffix-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-prefix-suffix-bg-color: transparent;
--neeto-ui-input-prefix-suffix-line-height: 1;
--neeto-ui-input-prefix-suffix-icon-size: 16px;
--neeto-ui-input-prefix-suffix-margin: 0px;
--neeto-ui-input-prefix-suffix-padding-x: 0px;
--neeto-ui-input-prefix-suffix-border-width: 0px;
--neeto-ui-input-prefix-suffix-border-color: transparent;

// Help Text
--neeto-ui-input-help-text-margin: 8px;
--neeto-ui-input-help-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-help-text-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-help-text-line-height: 1.1;

// Error Text
--neeto-ui-input-error-text-margin: 8px;
--neeto-ui-input-error-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-error-text-color: rgb(var(--neeto-ui-error-800));
--neeto-ui-input-error-text-line-height: 1.1;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-input {
  --neeto-ui-input-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
}
\`\`\`

#### Output
`;

const CSSCustomization = args => <Input {...args} />;

CSSCustomization.storyName = "Input CSS Customization";

CSSCustomization.args = {
  label: "Custom Input label",
  placeholder: "Custom Input placeholder",
  className: "neetix-input",
};

CSSCustomization.parameters = {
  docs: { description: { story: InputCSSCustomization } },
};

export {
  Default,
  Email,
  Sizes,
  Controlled,
  Required,
  Disabled,
  Error,
  HelpText,
  NakedInput,
  SearchInput,
  InputWithMaxLength,
  FormikInputStory,
  RejectCharsInputStory,
  CSSCustomization,
};

export default metadata;
