import React, { useState } from "react";

import { Search } from "neetoicons";
import * as yup from "yup";

import Button from "components/Button";
import { Input as FormikInput, Form } from "components/formik";
import Input from "components/Input";

import InputCSSCustomization from "!raw-loader!./InputStoriesDocs/InputCSSCustomization.mdx";
import InputDocs from "!raw-loader!./InputStoriesDocs/InputDocs.mdx";

const metadata = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: { description: { component: InputDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A11",
    },
  },
  argTypes: { rejectCharsRegex: { control: "text" } },
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
      {...args}
      label="Controlled Input"
      prefix={<Search />}
      value={value}
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
