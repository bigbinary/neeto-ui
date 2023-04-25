import React, { useState } from "react";

import { Search } from "neetoicons";
import * as yup from "yup";

import Button from "components/Button";
import { Input as FormikInput, Form } from "components/formik";
import Input from "components/Input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Input } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A11",
    },
  },
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Input label",
  placeholder: "Input placeholder",
};

export const Sizes = ({}) => (
  <div className="flex w-full flex-col gap-3">
    <Input label="Small" placeholder="Input placeholder" size="small" />
    <Input label="Medium" placeholder="Input placeholder" />
    <Input label="Large" placeholder="Input placeholder" size="large" />
  </div>
);

export const Controlled = () => {
  const [value, setValue] = useState("BigBinary");

  return (
    <Input
      label="Controlled Input"
      prefix={<Search />}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const Required = ({}) => (
  <Input required label="Required Input" placeholder="Input placeholder" />
);

export const Disabled = ({}) => (
  <Input disabled label="Disabled Input" placeholder="Input placeholder" />
);

export const Error = Template.bind({});
Error.args = {
  label: "Error",
  error: "Provide valid email",
  placeholder: "Input placeholder",
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: "Error",
  helpText: "This is help text.",
  placeholder: "Input placeholder",
};
HelpText.storyName = "Help text";

export const NakedInput = Template.bind({});
NakedInput.args = {
  label: "Naked Input field",
  nakedInput: true,
  placeholder: "Input placeholder",
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  label: "Search",
  prefix: <Search />,
  suffix: ".neetohelp.com",
  type: "search",
  placeholder: "Input search text",
};

export const InputWithMaxLength = () => (
  <div className="flex flex-col space-y-6">
    <Input
      label="Input with max length"
      maxLength={10}
      placeholder="Input placeholder"
    />
    <Input
      label="Input with max length"
      maxLength={10}
      placeholder="Input placeholder"
      value="Sample i"
    />
    <Input
      label="Input with max length"
      maxLength={10}
      placeholder="Input placeholder"
      value="Sample in"
    />
    <Input
      unlimitedChars
      label="Input with max length and unlimited characters"
      maxLength={10}
      placeholder="Input placeholder"
      value="Sample Input"
    />
  </div>
);
InputWithMaxLength.storyName = "Input with max length";

export const FormikInputStory = ({}) => (
  <Form
    formikProps={{
      initialValues: { name: "", email: "" },
      validationSchema: yup.object({
        name: yup.string().required("Name is required"),
      }),
      onSubmit: values => window.alert(JSON.stringify(values)),
    }}
  >
    {props => (
      <div className="space-y-2">
        <FormikInput label="Name" name="name" />
        <FormikInput label="Email" name="email" type="email" />
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
