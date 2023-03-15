import React, { useState } from "react";
import { Search } from "@bigbinary/neeto-icons";

import Input from "components/Input";
import Button from "components/Button";
import { Input as FormikInput, Form } from "components/formik";
import * as yup from "yup";

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
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A11",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Input label",
  placeholder: "Input placeholder",
};

// eslint-disable-next-line no-empty-pattern
export const Sizes = ({}) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <Input label="Small" placeholder="Input placeholder" size="small" />
      <Input label="Medium" placeholder="Input placeholder" />
      <Input label="Large" placeholder="Input placeholder" size="large" />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState("BigBinary");
  return (
    <Input
      prefix={<Search />}
      label="Controlled Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// eslint-disable-next-line no-empty-pattern
export const Required = ({}) => (
  <Input
    label="Required Input"
    placeholder="Input placeholder"
    required={true}
  />
);

// eslint-disable-next-line no-empty-pattern
export const Disabled = ({}) => (
  <Input
    label="Disabled Input"
    placeholder="Input placeholder"
    disabled={true}
  />
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

export const InputWithMaxLength = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Input
        label="Input with max length"
        maxLength={10}
        placeholder="Input placeholder"
      />
      <Input
        label="Input with max length"
        maxLength={10}
        value="Sample i"
        placeholder="Input placeholder"
      />
      <Input
        label="Input with max length"
        maxLength={10}
        value="Sample in"
        placeholder="Input placeholder"
      />
      <Input
        label="Input with max length"
        maxLength={10}
        value="Sample Input"
        placeholder="Input placeholder"
      />
    </div>
  );
};
InputWithMaxLength.storyName = "Input with max length";

export const FormikInputStory = ({}) => {
  return (
    <>
      <Form
        formikProps={{
          initialValues: { name: "", email: "" },
          validationSchema: yup.object({
            name: yup.string().required("Name is required"),
          }),
          onSubmit: (values) => window.alert(JSON.stringify(values)),
        }}
      >
        {(props) => (
          <div className="space-y-2">
            <FormikInput name="name" label="Name" />
            <FormikInput name="email" type="email" label="Email" />
            <Button type="submit" label="Submit" />
          </div>
        )}
      </Form>
    </>
  );
};

FormikInputStory.storyName = "Formik Input";
FormikInputStory.parameters = {
  docs: {
    description: {
      story:
        "`import { Input as FormikInput } from '@bigbinary/neetoui/formik';`",
    },
  },
};
